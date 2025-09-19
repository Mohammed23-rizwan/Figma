const sliders = document.querySelectorAll(".slide");
const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");

let itemsno = 0;

sliders.forEach((item, index) => {
  item.style.top = `${index * 100}%`;
});

const moveslide = () => {
  sliders.forEach((slide) => {
    slide.style.transform = `translateY(-${itemsno * 100}%)`;
  });
};

left.addEventListener("click", () => {
  if (itemsno === 0) return itemsno;
  else {
    itemsno = itemsno - 1;
    moveslide();
  }
});

right.addEventListener("click", () => {
  if (itemsno === sliders.length - 1) return itemsno;
  else {
    itemsno = itemsno + 1;
    moveslide();
  }
});

console.log(itemsno);
