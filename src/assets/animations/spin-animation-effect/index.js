export class SpinAnimationEffect {
  constructor(container) {
    this.container = container;
    this.img = container.querySelector(".item"); // <ds-image class="item"> 호환
    if (!this.img) return;

    this.direction = container.dataset.rotate === "left" ? -1 : 1;
    this.duration = parseFloat(container.dataset.duration || "5");
    this.repeat = container.dataset.repeat || "infinite";
    this.playState = (container.dataset.play ?? "true") !== "false";

    this.keyframeName = `spin-${this.direction > 0 ? "cw" : "ccw"}-${
      this.duration
    }-${this.repeat}`;
    this.injectKeyframes();
    this.applyStyles();

    if (!this.playState) this.pause();

    // 선택: viewport 시작 지원 (container.dataset.startOnViewport === "true")
    if (container.dataset.startOnViewport === "true") {
      this._io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && this.playState) this.play();
          else this.pause();
        },
        { threshold: 0.01 }
      );
      this._io.observe(container);
    }

    // 선택: hover 일시정지 (container.hasAttribute('data-pause-on-hover'))
    if (
      "pauseOnHover" in container.dataset ||
      container.hasAttribute("data-pause-on-hover")
    ) {
      this._onEnter = () => this.pause();
      this._onLeave = () => {
        if (this.playState) this.play();
      };
      container.addEventListener("mouseenter", this._onEnter);
      container.addEventListener("mouseleave", this._onLeave);
    }
  }

  injectKeyframes() {
    if (document.getElementById(this.keyframeName)) return;
    const style = document.createElement("style");
    style.id = this.keyframeName;
    style.textContent = `
      @keyframes ${this.keyframeName} {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(${this.direction * 360}deg); }
      }
    `;
    document.head.appendChild(style);
  }

  applyStyles() {
    Object.assign(this.img.style, {
      animationName: this.keyframeName,
      animationDuration: `${this.duration}s`,
      animationTimingFunction: "linear",
      animationIterationCount: this.repeat,
      animationFillMode: "forwards",
      animationPlayState: this.playState ? "running" : "paused",
    });
  }

  play() {
    this.playState = true;
    this.img.style.animationPlayState = "running";
  }

  pause() {
    this.img.style.animationPlayState = "paused";
  }

  destroy() {
    if (this._io) {
      this._io.disconnect();
      this._io = null;
    }
    if (this._onEnter) {
      this.container.removeEventListener("mouseenter", this._onEnter);
      this.container.removeEventListener("mouseleave", this._onLeave);
    }
    // 애니만 해제 (스타일 전체 리셋 원하면 여기서 clear)
  }
}
