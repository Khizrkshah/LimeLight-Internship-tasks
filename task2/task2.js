window.addEventListener("scroll", parallaxScroll);

function parallaxScroll() {
  var scrolled = window.pageYOffset;

  setParallaxStyle(".layer-1", scrolled, 0.067);

  function setParallaxStyle(selector, scrolled, multiplier) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.top = 0 - scrolled * multiplier + "px";
    }
  }
}
