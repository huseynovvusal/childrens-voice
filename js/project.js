function toggle() {
  document.querySelector(".hamburger").classList.toggle("hamburger-active");
  document.querySelector("ul").classList.toggle("list-active");
  document.querySelector(".content").classList.toggle("content-disable");
}

document.querySelector(".hamburger").addEventListener("click", toggle);

window.addEventListener("resize", () => {
  document.querySelector(".hamburger").classList.remove("hamburger-active");
  document.querySelector("ul").classList.remove("list-active");
  document.querySelector(".content").classList.remove("content-disable");
});
