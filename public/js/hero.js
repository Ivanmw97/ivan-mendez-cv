(function () {
  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var onScroll = function () {
    if (reduceMotion) return;
    var el = document.querySelector(".hero-container");
    if (!el || !el.style) return;
    var offset = Math.min(window.scrollY * 0.35, 48);
    el.style.transform = "translateY(" + offset + "px)";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var titleText = "Iván Méndez";
  var label = document.querySelector(".hero-label");
  var titleSpan = document.querySelector(".hero-title__text");
  var cursor = document.querySelector(".hero-cursor");
  var roleSpan = document.querySelector(".hero-role__text");
  var roleEl = document.querySelector(".hero-role");

  if (!titleSpan || !cursor || !roleSpan || !label || !roleEl) return;

  function getRoleText() {
    if (window.t) return window.t("home.heroRole");
    return "Android \u00b7 iOS \u00b7 Flutter";
  }

  function typeText(target, text, speed, cb) {
    var i = 0;
    function tick() {
      if (i < text.length) {
        target.textContent += text.charAt(i);
        i++;
        setTimeout(tick, speed);
      } else if (cb) {
        cb();
      }
    }
    tick();
  }

  if (reduceMotion) {
    label.classList.add("visible");
    label.style.opacity = "1";
    label.style.transform = "none";
    titleSpan.textContent = titleText;
    cursor.classList.add("hidden");
    roleSpan.textContent = getRoleText();
    roleEl.classList.add("visible");
    return;
  }

  setTimeout(function () {
    label.classList.add("visible");
  }, 200);

  setTimeout(function () {
    typeText(titleSpan, titleText, 70, function () {
      setTimeout(function () {
        roleEl.classList.add("visible");
        typeText(roleSpan, getRoleText(), 50, function () {
          setTimeout(function () {
            cursor.classList.add("hidden");
          }, 1500);
        });
      }, 400);
    });
  }, 800);

  window.addEventListener("langchange", function () {
    if (roleSpan) roleSpan.textContent = getRoleText();
  });
})();
