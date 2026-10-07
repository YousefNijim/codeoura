/**
 * The page-wide reveal observer, as an inline script rather than an effect.
 *
 * As a React effect it could only start once the bundle had downloaded and
 * the tree had hydrated, so on a slow connection the whole page sat invisible
 * and then appeared at once — the opposite of an entrance. Inline, it runs as
 * the body is parsed: the document is marked ready before anything paints, and
 * each element is observed the moment it exists.
 *
 * A MutationObserver picks up elements added later, so pages reached by
 * client-side navigation animate too instead of staying hidden.
 *
 * Nothing is hidden if the browser lacks IntersectionObserver or the visitor
 * has asked for reduced motion: the `reveal-ready` class is what hides, and it
 * is simply never added.
 */
const script = `(function () {
  var doc = document.documentElement;
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  doc.classList.add('reveal-ready');

  var io = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if (!entry.isIntersecting) continue;
      var el = entry.target;
      el.style.setProperty('--seq', el.getAttribute('data-seq') || '0');
      el.classList.add('is-visible');
      io.unobserve(el);
    }
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

  var seen = new WeakSet();
  function watch(el) {
    if (seen.has(el)) return;
    seen.add(el);
    io.observe(el);
  }
  function scan(root) {
    if (root.matches && root.matches('[data-anim]')) watch(root);
    if (root.querySelectorAll) root.querySelectorAll('[data-anim]').forEach(watch);
  }

  new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var added = mutations[i].addedNodes;
      for (var j = 0; j < added.length; j++) {
        if (added[j].nodeType === 1) scan(added[j]);
      }
    }
  }).observe(doc, { childList: true, subtree: true });

  scan(document);
})();`;

export function RevealObserver() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
