const btn = document.getElementById("btn");

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const span = document.querySelector("span");
btn.addEventListener("click", (e) => {
  let randomNum = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = getRandomColor();
  span.innerHTML = getRandomColor();
});

function getRandomColor() {
  let colorsLength = colors.length;
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random() * colorsLength)];
  }
  return color;
}

// console.log(getRandomColor());
