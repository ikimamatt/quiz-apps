const username = document.getElementById("username");
const score = document.getElementById("score");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

username.innerHTML = highScores
  .map(score => {
    return `${score.name}`;
  })
  .join("");

score.innerHTML = highScores
  .map(score => {
    return `${score.score}`;
  })
  .join("");

  
