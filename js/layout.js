/* Shared header and footer, mounted into every page so navigation lives in one place. */
(function () {
  var PAGES = [
    ["index.html", "Home"], ["about.html", "About"], ["projects.html", "Projects"],
    ["skills.html", "Skills"], ["certificates.html", "Certificates"], ["github.html", "GitHub"], ["contact.html", "Contact"]
  ];
  var current = document.body.getAttribute("data-page");
  var files = { home: "index.html", about: "about.html", projects: "projects.html", skills: "skills.html", certificates: "certificates.html", github: "github.html", contact: "contact.html" };

  function mount() {
    var links = PAGES.map(function (p) {
      return '<a href="' + p[0] + '"' + (files[current] === p[0] ? ' aria-current="page"' : "") + ">" + p[1] + "</a>";
    }).join("");
    var h = document.getElementById("site-header");
    if (h) h.outerHTML =
      '<header class="nav"><div class="wrap">' +
      '<a class="brand" href="index.html">Zakia<span>.</span>Mahima</a>' +
      '<nav class="links" aria-label="Pages">' + links + "</nav>" +
      '<button class="icon-btn" id="theme" type="button" aria-label="Switch colour theme" title="Switch theme">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' +
      "</button></div></header>";
    var f = document.getElementById("site-footer");
    if (f) f.outerHTML =
      '<footer class="site-footer"><div class="wrap"><span>© ' + new Date().getFullYear() + " " + SITE.name + " · " + SITE.location + "</span>" +
      '<nav aria-label="Footer">' + links.replace(/ aria-current="page"/, "") + "</nav></div></footer>";
    var t = document.getElementById("theme");
    if (t) t.addEventListener("click", window.toggleTheme);
    var active = document.querySelector('.links [aria-current="page"]');
    if (active) { var n = active.parentNode; n.scrollLeft = active.offsetLeft - n.clientWidth / 2 + active.offsetWidth / 2; }
  }
  window.Layout = { mount: mount };
})();
