document.addEventListener("DOMContentLoaded", () => {
  fetch("./vinyl.svg")
      .then((response) => response.text())
      .then((svg) => {
          const playerContainer = document.getElementById("player-container");
          playerContainer.innerHTML = svg;

          const vinyl = document.querySelector("svg");
          const audio = document.getElementById("love-song");

          // Make sure audio is ready to play when triggered
          vinyl.classList.add("spin");

          // Play the music after user clicks anywhere on the page
          document.body.addEventListener("click", () => {
              audio.play().catch(error => {
                  console.log("Auto-play blocked by browser:", error);
              });
          });

          // Floating Hearts Effect Across the Page
          function createHeart() {
              const heart = document.createElement("div");
              heart.classList.add("heart");
              heart.innerHTML = "🩷";
              document.body.appendChild(heart);

              // Random position across the whole page
              heart.style.left = `${Math.random() * 100}%`;
              heart.style.animationDuration = `${3 + Math.random() * 2}s`; // Different speeds

              setTimeout(() => heart.remove(), 5000); // Remove after animation
          }

          setInterval(createHeart, 600); // Controls heart spawn frequency
      })
      .catch((err) => console.error("Error loading SVG:", err));
});

document.addEventListener("DOMContentLoaded", () => {
  const clickToSubmit = document.getElementById("click-to-submit");
  const gifPopup = document.getElementById("gif-popup");

  let isLeft = true; // Track which side the GIF should appear on

  function showGif() {
    // Reset position and hide the gif initially
    gifPopup.style.bottom = '-300px';
    gifPopup.style.display = 'block';

    // Apply the animation (slide up)
    gifPopup.classList.add('show-gif');

    // Set the position of the GIF
    if (isLeft) {
      gifPopup.classList.add('left-position');
      gifPopup.classList.remove('right-position');
    } else {
      gifPopup.classList.add('right-position');
      gifPopup.classList.remove('left-position');
    }

    // Alternate the position for the next click
    isLeft = !isLeft;
  }

  // Trigger the gif pop-up effect when the text is clicked
  clickToSubmit.addEventListener("click", () => {
    showGif();
  });
});





