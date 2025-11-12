function setVh() {
  const vh = (window.visualViewport?.height || window.innerHeight) * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// 최초 실행
setVh();

// 창 크기 변경 시 업데이트
window.addEventListener("resize", setVh);
window.addEventListener("orientationchange", setVh);
window.addEventListener("scroll", () => {
  requestAnimationFrame(setVh);
});
