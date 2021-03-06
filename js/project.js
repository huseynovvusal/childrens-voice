function toggle() {
  document.querySelector(".hamburger").classList.toggle("hamburger-active");
  document.querySelector("ul").classList.toggle("list-active");
  document.querySelector(".content").classList.toggle("content-disable");
  document.querySelector("nav h2").classList.toggle("content-disable-2");
  document.querySelector(".container").classList.toggle("disable");
}

document.querySelector(".hamburger").addEventListener("click", toggle);

window.addEventListener("resize", () => {
  document.querySelector(".hamburger").classList.remove("hamburger-active");
  document.querySelector("ul").classList.remove("list-active");
  document.querySelector(".content").classList.remove("content-disable");
  document.querySelector("nav h2").classList.remove("content-disable-2");
  document.querySelector(".container").classList.remove("disable");
});

document.querySelectorAll(".comment-btn").forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.parentElement
      .querySelector(".comment")
      .classList.toggle("comment-active");
  });
});
