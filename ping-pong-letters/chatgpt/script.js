document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".letter");
  const container = document.getElementById("container");

  let containerWidth = container.offsetWidth;
  let containerHeight = container.offsetHeight;

  const updateContainerSize = () => {
    containerWidth = container.offsetWidth;
    containerHeight = container.offsetHeight;
  };

  window.addEventListener("resize", updateContainerSize);

  letters.forEach(letter => {
    let x = parseInt(letter.style.left);
    let y = parseInt(letter.style.top);
    let dx = Math.random() * 4 + 1;
    let dy = Math.random() * 4 + 1;

    const moveLetter = () => {
      if (x + dx > containerWidth - letter.offsetWidth || x + dx < 0) {
        dx = -dx;
      }
      if (y + dy > containerHeight - letter.offsetHeight || y + dy < 0) {
        dy = -dy;
      }
      x += dx;
      y += dy;
      letter.style.left = x + 'px';
      letter.style.top = y + 'px';
      requestAnimationFrame(moveLetter);
    };

    moveLetter();
  });
});
