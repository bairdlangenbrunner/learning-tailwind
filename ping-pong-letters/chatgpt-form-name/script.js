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

  const animations = [];

  letters.forEach(letter => {
    // Randomly position the letters within the container
    const randomX = Math.random() * (containerWidth - letter.offsetWidth);
    const randomY = Math.random() * (containerHeight - letter.offsetHeight);

    letter.style.left = `${randomX}px`;
    letter.style.top = `${randomY}px`;

    let x = randomX;
    let y = randomY;
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
      const animation = requestAnimationFrame(moveLetter);
      animations.push(animation);
    };

    moveLetter();
  });

  // Function to zoom letters, form the name, and then grow and drop out
  const formName = () => {
    const name = "Baird Langenbrunner".split(''); // Split the name into individual letters
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const letterSpacing = 30; // Adjust the spacing between letters
    const lineBreakIndex = name.indexOf(' '); // Find the index of the space to split the first and last names

    // Stop all animations
    animations.forEach(animation => cancelAnimationFrame(animation));

    letters.forEach((letter, index) => {
      let targetX;
      let targetY;
      if (index < lineBreakIndex) {
        // Position the first name
        targetX = centerX - ((lineBreakIndex / 2) * letterSpacing) + (index * letterSpacing);
        targetY = centerY - 40; // Adjust the vertical position for the first name
      } else {
        // Position the last name
        targetX = centerX - (((name.length - lineBreakIndex - 1) / 2) * letterSpacing) + ((index - lineBreakIndex - 1) * letterSpacing);
        targetY = centerY + 40; // Adjust the vertical position for the last name
      }

      letter.style.left = `${targetX}px`;
      letter.style.top = `${targetY}px`;
      letter.style.transform = 'scale(2)';
    });

    // Make the letters grow bigger and then drop out of the frame
    setTimeout(() => {
      letters.forEach(letter => {
        letter.style.transition = 'transform 10s, top 10s';
        letter.style.transform = 'scale(10)';
        letter.style.top = '110vh'; // Move letters out of the frame
      });
    }, 2000); // Wait for 2 seconds before starting the grow and drop animation
  };

  // Trigger the formName function after 5 seconds
  setTimeout(formName, 5000);
});
