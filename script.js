document.addEventListener("DOMContentLoaded", function () {
  const ball = document.getElementById("ball");
  const goals = document.querySelectorAll(".goal");
  let goalsLeft = goals.length; // Houd het aantal doelen bij dat nog niet is bereikt

  // Beweging van de bal
  document.addEventListener("keydown", function (event) {
    const key = event.key;
    const ballStyle = getComputedStyle(ball);
    const ballLeft = parseInt(ballStyle.left);
    const ballTop = parseInt(ballStyle.top);

    switch (key) {
      case "ArrowUp":
        ball.style.top = ballTop - 10 + "px";
        break;
      case "ArrowDown":
        ball.style.top = ballTop + 10 + "px";
        break;
      case "ArrowLeft":
        ball.style.left = ballLeft - 10 + "px";
        break;
      case "ArrowRight":
        ball.style.left = ballLeft + 10 + "px";
        break;
    }

    // Controleer of de bal een doel heeft bereikt
    goals.forEach((goal) => {
      if (checkCollision(ball, goal)) {
        goal.classList.add("reached"); // Markeer het bereikte doel
        goalsLeft--; // Verminder het aantal doelen dat nog niet is bereikt
        if (goalsLeft === 0) {
          alert("Gefeliciteerd! Je hebt alle doelen bereikt!");
        }
      }
    });
  });

  // Controleer of er een botsing is tussen de bal en het doel
  function checkCollision(ball, goal) {
    const ballRect = ball.getBoundingClientRect();
    const goalRect = goal.getBoundingClientRect();
    return !(
      ballRect.right < goalRect.left ||
      ballRect.left > goalRect.right ||
      ballRect.bottom < goalRect.top ||
      ballRect.top > goalRect.bottom
    );
  }
});
