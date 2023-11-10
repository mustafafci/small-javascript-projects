let count = 0;
let counter = document.getElementById("counter");
const btns = document.querySelectorAll("[data-btn]");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let dataBtn = e.currentTarget.attributes["data-btn"].value;
    if (dataBtn === "increase") {
      count++;
    } else if (dataBtn === "decrease") {
      count--;
    } else {
      count = 0;
    }
    counter.textContent = count;
    if (count > 0) {
      counter.style.color = "green";
    }
    if (count === 0) {
      counter.style.color = "#333";
    }
    if (count < 0) {
      counter.style.color = "red";
    }
  });
});
