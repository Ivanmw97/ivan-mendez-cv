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

  var header = document.getElementById("site-header");
  function revealHeader() {
    if (header) header.classList.add("is-visible");
  }

  var scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function () {
      var next = document.querySelector(".summary-section");
      if (next) {
        next.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    });
  }

  var roleSpan = document.querySelector(".hero-role__text");

  function getRoleText() {
    if (window.t) return window.t("home.heroRole");
    return "Android · iOS · Flutter";
  }

  if (roleSpan) {
    roleSpan.textContent = getRoleText();
    window.addEventListener("langchange", function () {
      roleSpan.textContent = getRoleText();
    });
  }

  // The "IM" letters split apart at 0.66s and the name is wiped open
  // between 0.74s and 1.32s (see .hero-mark / .hero-name in index.astro).
  // Bring the header in once the name has landed.
  if (reduceMotion) {
    revealHeader();
  } else {
    setTimeout(revealHeader, 1350);
  }
})();
