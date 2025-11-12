export class RollingMediaEffect {
  constructor(container) {
    this.container = container;
    this.track = container.querySelector(".rolling-track");
    this.allItems = Array.from(this.track.children);
    this.items = this.allItems.filter(
      (el) => !el.classList.contains("edit-dot")
    );

    this.cloneCount = parseInt(container.dataset.cloneCount || "1", 10);
    this.speed = parseFloat(container.dataset.speed || "10");
    this.repeat = container.dataset.repeat || "infinite";
    this.axis = container.dataset.axis === "y" ? "y" : "x";
    this.startOnViewport = container.dataset.startOnViewport === "true";

    this.cloneItems();
    this.applyInitialStyles();

    if (this.startOnViewport) this.observeViewport();
    else this.startRolling();
  }

  cloneItems() {
    for (let i = 0; i < this.cloneCount; i++) {
      for (const item of this.items) {
        const clone = item.cloneNode(true);
        this.removeIdsRecursively(clone);
        this.track.appendChild(clone);
      }
    }
  }

  removeIdsRecursively(element) {
    if (element.id) element.removeAttribute("id");
    for (const child of element.children) {
      this.removeIdsRecursively(child);
    }
  }

  applyInitialStyles() {
    const containerStyle = this.container.style;
    const trackStyle = this.track.style;

    if (this.axis === "y") {
      containerStyle.overflow = "hidden";
      containerStyle.height = `${this.track.scrollHeight}px`;
      trackStyle.flexDirection = "column";
    } else {
      containerStyle.overflow = "hidden";
      trackStyle.display = "flex";
    }
  }

  observeViewport() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.startRolling();
            observer.unobserve(this.container);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.container);
  }

  startRolling() {
    const moveLength = this.items.reduce((acc, el) => {
      return acc + (this.axis === "y" ? el.offsetHeight : el.offsetWidth);
    }, 0);

    const axisUpper = this.axis.toUpperCase();
    const sign = "-";

    const keyframeName = `rolling-${this.axis}-${Math.round(moveLength)}`;
    if (!document.getElementById(keyframeName)) {
      const style = document.createElement("style");
      style.id = keyframeName;
      style.textContent = `
        @keyframes ${keyframeName} {
          0% { transform: translate${axisUpper}(0); }
          100% { transform: translate${axisUpper}(${sign}${moveLength}px); }
        }
      `;
      document.head.appendChild(style);
    }

    Object.assign(this.track.style, {
      animationName: keyframeName,
      animationDuration: `${this.speed}s`,
      animationTimingFunction: "linear",
      animationIterationCount: this.repeat,
      animationDirection: "normal",
      animationFillMode: "forwards",
      animationPlayState: "running",
    });

    // 정확한 width 지정
    if (this.axis === "x") {
      this.track.style.width = `${moveLength * (this.cloneCount + 1)}px`;
    }
  }
}
