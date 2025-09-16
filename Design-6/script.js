const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

let index = 0;

dots[0].style.opacity = "1";

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", (e) => {
    index = i;
    removeopacity();
    e.target.style.opacity = "1";
    moveslide();
  });
});

const removeopacity = () => {
  dots.forEach((dot) => {
    console.log('first')
    dot.style.opacity = ".2";
  });
};

const moveslide = () => {
  slides.forEach((slide) => {
    console.log("first");
    slide.style.transform = `translateY(-${index * 100}%)`;
  });
};
