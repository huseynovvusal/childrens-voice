class Background {
  constructor(background, time) {
    this.background = background;
    this.time = time;
  }

  circle() {
    let span = document.createElement("span");

    let left = Math.random() * window.innerWidth;
    let top = Math.random() * window.innerHeight;
    let scale = Math.random() * 40;

    span.style.left = `${left}px`;
    span.style.top = `${top}px`;
    span.style.width = `${scale}px`;
    span.style.height = `${scale}px`;

    span.classList.add("background-circle");

    document.querySelector(".background").appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 3000);
  }

  mouseMove(e) {
    let mouseX = -(e.clientX * 0.01);
    let mouseY = -(e.clientY * 0.01);

    let bg = document.querySelector(".background");

    bg.style.left = `${mouseX}px`;
    bg.style.top = `${mouseY}px`;
    bg.style.transform = `scale(${-mouseX * 0.05 + 1})`;
  }
}

const bg = new Background(document.querySelector(".background"), 3000);

setInterval(bg.circle, 600);

document.addEventListener("mousemove", (e) => {
  bg.mouseMove(e);
});
