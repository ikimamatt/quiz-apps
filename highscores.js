const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScores.forEach(score => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = score.name;
  row.appendChild(nameCell);

  const scoreCell = document.createElement("td");
  scoreCell.textContent = score.score;
  row.appendChild(scoreCell);

  highScoresList.appendChild(row);
});
