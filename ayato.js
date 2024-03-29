
  
  let timeLeft = 30; // Set the initial time limit in seconds
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000); // Update the timer every second
}

function startQuiz() {
  startTimer(); // Start the timer when the quiz starts
  loadQuestion();
  const startButton = document.getElementById("startButton");
  startButton.style.display = "none";
}

function playOtherGames() {
    window.location.href = "other-games.html"; // Redirect to the other games page
  }
  function playOtherGames() {
    console.log("Play Other Games button clicked");
    window.location.href = "other-games.html"; // Redirect to the other games page
}

// ayato.js

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("playOtherGamesButton").addEventListener("click", function() {
      window.location.href = "other-games.html"; // Redirect to the other games page
    });
  });
  