// This code adds a smooth scroll effect to the links in the navigation bar.

window.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll("nav a");

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(event) {
      event.preventDefault();

      var target = document.getElementById(this.href.split("#")[1]);
      var offset = target.offsetTop;

      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    });
  }
});
