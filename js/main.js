let section = document.querySelector(".targets");
let spans = document.querySelectorAll(".details span.animate");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
