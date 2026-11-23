/* Entry point: mount the shared frame, then run the initialiser for the current page. */
(function () {
  Layout.mount();
  var page = document.body.getAttribute("data-page");
  if (page === "home") { Hero.init(); Projects.featured(); }
  else if (page === "projects") Projects.page();
  else if (Pages[page]) Pages[page]();
  var gh = U.$("#ghBtn");
  if (gh && SITE.github) { gh.href = SITE.github; gh.target = "_blank"; gh.rel = "noopener"; gh.hidden = false; }
})();
