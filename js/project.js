function toggle() {
  document.querySelector(".hamburger").classList.toggle("hamburger-active");
  document.querySelector("ul").classList.toggle("list-active");
}

document.querySelector(".hamburger").addEventListener("click", toggle);
