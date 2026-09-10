/**
 * Minimal fixed-window limiter, held in process memory.
 *
 * Good enough for a contact form on a single deployment. If the site ever runs
 * on multiple instances, swap the Map for Redis — the call signature stays the
 * same.
 */
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, retryAfter: 0 };
  }

  entry.count += 1;

  if (entry.count > MAX_REQUESTS) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  return { ok: true, retryAfter: 0 };
}

/** Drop expired buckets so the map cannot grow without bound. */
export function pruneRateLimit() {
  const now = Date.now();
  for (const [key, entry] of hits) {
    if (now > entry.resetAt) hits.delete(key);
  }
}
