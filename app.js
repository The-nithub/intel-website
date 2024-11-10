
//for text animation

const containerEl = document.querySelector(".container");

const career = "INTEL CLUB CMRTC"; // Single career to display
let charIdx = 0;

updateText();

function updateText() {
    charIdx++;
    containerEl.innerHTML = `<h1>${career.slice(0, charIdx)}</h1>`;

    // Reset when the full career is displayed
    if (charIdx === career.length) {
        charIdx = 0;
    }
    
    setTimeout(updateText, 200);
}


//-------------------------------------------------------------------------------------------------------------------------------------

// FOR CURSOR ANIMATION

const circle = document.querySelector(".circle");
let mouseX = 0, mouseY = 0; // Mouse position
let circleX = 0, circleY = 0; // Circle's position
const speed = 0.1; // Adjust this to control the speed (lower is slower)

// Update mouse position on mousemove
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate the circle movement
function animate() {
  // Calculate the distance from the current position to the mouse position
  circleX += (mouseX - circleX) * speed;
  circleY += (mouseY - circleY) * speed;

  // Apply the new position
  circle.style.left = `${circleX - circle.offsetWidth / 2}px`;
  circle.style.top = `${circleY - circle.offsetHeight / 2}px`;

  requestAnimationFrame(animate); // Repeat animation
}

animate(); // Start the animation
