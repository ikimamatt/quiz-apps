const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScores.forEach((score, index) => {
  const row = document.createElement("tr");

  const numberCell = document.createElement("td");
  numberCell.textContent = index + 1;
  row.appendChild(numberCell);

  const nameCell = document.createElement("td");
  nameCell.textContent = score.name;
  row.appendChild(nameCell);

  const scoreCell = document.createElement("td");
  scoreCell.textContent = score.score;
  row.appendChild(scoreCell);

  highScoresList.appendChild(row);
});
