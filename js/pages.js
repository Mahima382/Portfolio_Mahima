/* Per-page initialisers for About, Skills, Certificates, GitHub and Contact. */
(function () {
  var E = U.el, $ = U.$;

  function about() {
    $("#edu").append.apply($("#edu"), SITE.education.map(function (e) {
      return E("article", {}, [E("div", { class: "meta" }, [E("span", { class: "pill", text: e.period }), E("span", { text: e.note })]), E("h3", { text: e.title }), E("div", { class: "inst", text: e.place })]);
    }));
    $("#acts").append.apply($("#acts"), SITE.activities.map(function (a) {
      return E("li", {}, [E("div", { class: "ic" }, [U.icon(a.icon)]), E("div", {}, [E("b", { text: a.title }), E("span", { text: a.note })])]);
    }));
    $("#soft").append.apply($("#soft"), SITE.softSkills.map(function (s) { return E("span", { text: s }); }));
    $("#interests").append.apply($("#interests"), SITE.interests.map(function (s) { return E("span", { text: s }); }));
  }

  function skills() {
    var grid = $("#skillGrid"), hint = $("#skillHint"), sel = null;
    function draw() {
      grid.innerHTML = "";
      Object.keys(SITE.skills).forEach(function (grp) {
        var row = E("div", { class: "row" });
        SITE.skills[grp].forEach(function (s) {
          var b = E("button", { class: "sk", type: "button", "aria-pressed": String(sel === s), text: s });
          b.onclick = function () { sel = sel === s ? null : s; draw(); say(); };
          row.append(b);
        });
        grid.append(E("div", { class: "skill-group" }, [E("h3", { text: grp }), row]));
      });
    }
    function say() {
      hint.innerHTML = "";
      if (!sel) return;
      var used = SITE.projects.filter(function (p) { return p.skills.indexOf(sel) > -1; });
      if (!used.length) { hint.textContent = sel + " is part of my toolkit but is not tied to a listed project yet."; return; }
      hint.append(sel + " is used in: ");
      used.forEach(function (p, i) {
        if (i) hint.append(", ");
        hint.append(E("a", { href: "projects.html#p-" + p.id, text: p.title }));
      });
    }
    draw();
  }

  function certificates() {
    var g = $("#certs");
    SITE.certificates.forEach(function (c) {
      var meta = [c.issuer, c.year].filter(Boolean).join(" · ");
      var kids = [];
      if (c.image) kids.push(E("img", { src: c.image, alt: "Certificate: " + c.title, loading: "lazy" }));
      else kids.push(E("div", { class: "seal" }, [U.icon("M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.5 14l-1.5 7 5-3 5 3-1.5-7")]));
      kids.push(E("h3", { text: c.title }));
      if (meta) kids.push(E("div", { class: "m", text: meta }));
      if (c.url) kids.push(E("a", { class: "link-btn", href: c.url, target: "_blank", rel: "noopener" }, ["View certificate ↗"]));
      else if (!c.image) kids.push(E("div", { class: "m", text: "Certificate link to be added" }));
      g.append(E("div", { class: "cert" }, kids));
    });
    for (var i = 0; i < SITE.certificateSlots; i++)
      g.append(E("div", { class: "cert todo" }, [E("div", { class: "seal" }, [U.icon("M12 5v14M5 12h14")]), E("h3", { text: "Next certificate" }), E("div", { class: "m", text: "Space reserved" })]));
  }

  function github() {
    var main = $("#ghMain"), r = $("#repos");
    if (SITE.github) {
      main.href = SITE.github; main.target = "_blank"; main.rel = "noopener";
      main.textContent = "Open GitHub ↗"; main.removeAttribute("aria-disabled");
      $("#ghText").textContent = "Source code for my research prototypes, web platforms and robotics work.";
    }
    SITE.projects.forEach(function (p) {
      if (p.repo) r.append(E("a", { class: "repo", href: p.repo, target: "_blank", rel: "noopener" }, [E("span", { text: p.title }), E("span", { text: "↗" })]));
      else r.append(E("div", { class: "repo todo" }, [E("span", { text: p.title }), E("span", { text: "repo link soon" })]));
    });
  }

  function contact() {
    var rows = $("#rows");
    var items = [["Email", SITE.email, true], ["Phone", SITE.phone, true], ["Location", SITE.location, false]];
    if (SITE.github) items.push(["GitHub", SITE.github, false]);
    if (SITE.linkedin) items.push(["LinkedIn", SITE.linkedin, false]);
    items.forEach(function (it) {
      var v = E("span", { class: "v", text: it[1] }), row = E("div", { class: "crow" }, [E("span", { class: "k", text: it[0] }), v]);
      if (it[2]) {
        var b = E("button", { class: "copy", type: "button", text: "Copy" });
        b.onclick = function () {
          function done(t) { b.textContent = t; setTimeout(function () { b.textContent = "Copy"; }, 1600); }
          var fallback = function () { var s = getSelection(), r = document.createRange(); r.selectNodeContents(v); s.removeAllRanges(); s.addRange(r); done("Selected"); };
          if (navigator.clipboard) navigator.clipboard.writeText(it[1]).then(function () { done("Copied"); }, fallback); else fallback();
        };
        row.append(b);
      }
      rows.append(row);
    });
  }

  window.Pages = { about: about, skills: skills, certificates: certificates, github: github, contact: contact };
})();
