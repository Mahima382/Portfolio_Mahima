/* Project cards (used on Home and Projects) and the Projects page filter. */
(function () {
  var E = U.el;

  function card(p, highlight) {
    var c = E("article", { class: "card" + (highlight ? " match open" : ""), id: "p-" + p.id });
    var chev = U.icon("M6 9l6 6 6-6", 16); chev.setAttribute("class", "chev");
    var tog = E("button", { class: "link-btn", type: "button", "aria-expanded": String(!!highlight) }, ["Details", chev]);
    tog.onclick = function () { tog.setAttribute("aria-expanded", String(c.classList.toggle("open"))); };
    var actions = E("div", { class: "actions" }, [tog]);
    if (p.repo) actions.append(E("a", { class: "link-btn", href: p.repo, target: "_blank", rel: "noopener" }, ["View code ↗"]));
    var more = E("div", { class: "more" }, [E("div", {}, [E("ul", {}, p.details.map(function (d) { return E("li", { text: d }); }))])]);
    c.append(
      E("div", { class: "top" }, [E("span", { text: SITE.categories[p.cat].toUpperCase() }), E("span", { class: "status-tag" + (p.live ? " live" : ""), text: p.status })]),
      E("h3", { text: p.title }), E("p", { text: p.summary }),
      E("ul", { class: "tags" }, p.tags.map(function (t) { return E("li", { text: t }); })),
      more, actions);
    return c;
  }

  function featured() {
    var g = U.$("#featured"); if (!g) return;
    SITE.projects.filter(function (p) { return p.featured; }).forEach(function (p) { g.append(card(p)); });
  }

  function page() {
    var g = U.$("#projectGrid"), f = U.$("#filters"); if (!g) return;
    var now = "all", target = location.hash.replace("#p-", "");
    function filters() {
      f.innerHTML = "";
      Object.keys(SITE.categories).forEach(function (k) {
        var n = k === "all" ? SITE.projects.length : SITE.projects.filter(function (p) { return p.cat === k; }).length;
        if (!n) return;
        var b = E("button", { class: "chip", type: "button", "aria-pressed": String(now === k) }, [SITE.categories[k], E("span", { class: "n", text: n })]);
        b.onclick = function () { now = k; filters(); list(); };
        f.append(b);
      });
    }
    function list() {
      g.innerHTML = "";
      var items = SITE.projects.filter(function (p) { return now === "all" || p.cat === now; });
      items.forEach(function (p) { g.append(card(p, p.id === target)); });
      if (!items.length) g.append(E("p", { class: "empty", text: "No projects in this category yet." }));
    }
    filters(); list();
    if (target) { var t = document.getElementById("p-" + target); if (t) t.scrollIntoView({ block: "center" }); }
  }

  window.Projects = { featured: featured, page: page };
})();
