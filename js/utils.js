/* Tiny DOM helpers shared by all modules. */
window.U = {
  $: function (s, r) { return (r || document).querySelector(s); },
  el: function (tag, attrs, kids) {
    var e = document.createElement(tag);
    attrs = attrs || {};
    for (var k in attrs) {
      if (k === "text") e.textContent = attrs[k];
      else if (k === "class") e.className = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    [].concat(kids || []).forEach(function (c) { e.append(c); });
    return e;
  },
  icon: function (d, size) {
    var s = size || 18, w = document.createElement("span");
    w.innerHTML = '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>';
    return w.firstChild;
  },
  project: function (id) { return SITE.projects.filter(function (p) { return p.id === id; })[0]; }
};
