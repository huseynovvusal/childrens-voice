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
}

const bg = new Background(document.querySelector(".background"), 3000);

setInterval(bg.circle, 300);
