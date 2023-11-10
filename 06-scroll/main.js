const navabr = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navabr.classList.add("fixed-navbar");
  } else {
    navabr.classList.remove("fixed-navbar");
  }
});
