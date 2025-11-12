class TypingEffect {
  constructor(element) {
    this.el = element;
    this.texts = JSON.parse(this.el.dataset.texts);
    this.speed = parseInt(this.el.dataset.speed) || 100;
    this.eraseSpeed = parseInt(this.el.dataset.eraseSpeed) || 50;
    this.loop = this.el.dataset.loop === "true";
    this.cursor = this.el.dataset.cursor === "true";
    this.unit = this.el.dataset.unit || "char"; // "char" | "word"

    this.textIndex = 0;
    this.displayText = "";
    this.isDeleting = false;
    this.startTyping();
  }

  startTyping() {
    const currentText = this.texts[this.textIndex];

    if (!this.isDeleting) {
      // 추가 (문자 or 단어 단위)
      if (this.unit === "word") {
        const words = currentText.split(" ");
        const wordCount = this.displayText.split(" ").length;
        this.displayText = words.slice(0, wordCount + 1).join(" ");
      } else {
        this.displayText = currentText.slice(0, this.displayText.length + 1);
      }

      // 문장이 끝났으면 일정 시간 후 삭제 시작
      if (this.displayText === currentText) {
        setTimeout(() => (this.isDeleting = this.loop), 1000);
      }
    } else {
      // 삭제 (문자 or 단어 단위)
      if (this.unit === "word") {
        const words = this.displayText.split(" ");
        words.pop(); // 마지막 단어 삭제
        this.displayText = words.join(" ");
      } else {
        this.displayText = this.displayText.slice(0, -1);
      }

      // 다 지웠으면 다음 문장으로 이동
      if (!this.displayText) {
        this.isDeleting = false;
        this.textIndex = this.loop
          ? (this.textIndex + 1) % this.texts.length
          : this.textIndex;
      }
    }

    this.el.textContent = this.displayText;
    if (this.cursor) this.el.classList.add("cursor");
    else this.el.classList.remove("cursor");

    setTimeout(
      () => this.startTyping(),
      this.isDeleting ? this.eraseSpeed : this.speed
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const typingEffectedElements = document.querySelectorAll(".typing-effect");

  typingEffectedElements.forEach((el) => new TypingEffect(el));

  console.log(typingEffectedElements, "typingEffectedElements");
});
