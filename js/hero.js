/* Home page only: typing role line and the interactive waveform strip. */
(function () {
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function typing() {
    var out = U.$("#role"); if (!out) return;
    var roles = SITE.roles;
    if (reduce) { out.textContent = roles[0]; return; }
    var i = 0, j = 0, del = false;
    (function tick() {
      var w = roles[i];
      out.textContent = w.slice(0, j);
      if (!del && j < w.length) { j++; setTimeout(tick, 42); }
      else if (!del) { del = true; setTimeout(tick, 1700); }
      else if (j > 0) { j--; setTimeout(tick, 20); }
      else { del = false; i = (i + 1) % roles.length; setTimeout(tick, 300); }
    })();
  }

  function wave() {
    var c = U.$("#wave"); if (!c) return;
    var x = c.getContext("2d"), W, H, mx = -999, t = 0;
    function size() { var d = Math.min(devicePixelRatio || 1, 2); W = c.clientWidth; H = c.clientHeight; c.width = W * d; c.height = H * d; x.setTransform(d, 0, 0, d, 0, 0); }
    size(); addEventListener("resize", function () { size(); draw(); });
    c.addEventListener("pointermove", function (e) { mx = e.clientX - c.getBoundingClientRect().left; });
    c.addEventListener("pointerleave", function () { mx = -999; });
    function draw() {
      var cs = getComputedStyle(document.documentElement), a = cs.getPropertyValue("--accent").trim(), b = cs.getPropertyValue("--warm").trim();
      x.clearRect(0, 0, W, H);
      var gap = 7, bw = 3, n = Math.floor(W / gap);
      for (var i = 0; i < n; i++) {
        var px = i * gap + gap / 2, p = i / n;
        var v = .35 * Math.sin(p * 9 + t * 1.3) + .25 * Math.sin(p * 23 - t * 1.9) + .2 * Math.sin(p * 3.5 + t * .6);
        v = Math.abs(v) * (.55 + .45 * Math.sin(p * Math.PI));
        var d = Math.abs(px - mx), boost = d < 120 ? (1 - d / 120) * .7 : 0;
        var h = Math.max(3, (v + boost * .9) * H * .9);
        x.fillStyle = boost > .25 ? b : a; x.globalAlpha = .45 + Math.min(.55, v + boost);
        x.beginPath(); x.roundRect(px - bw / 2, (H - h) / 2, bw, h, 2); x.fill();
      }
      x.globalAlpha = 1;
    }
    if (reduce) { draw(); return; }
    (function loop() { t += .016; draw(); requestAnimationFrame(loop); })();
  }

  window.Hero = { init: function () { typing(); wave(); } };
})();
