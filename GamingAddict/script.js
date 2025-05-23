function checkResult() {
  const form = document.forms['quizForm'];
  let score = 0;
  for (let i = 1; i <= 3; i++) {
    if (form['q' + i].checked) score++;
  }

  const resultText = document.getElementById('result');
  if (score === 0) resultText.textContent = "✅ Kamu aman!";
  else if (score <= 2) resultText.textContent = "⚠️ Perlu lebih sadar waktu main game.";
  else resultText.textContent = "🚨 Perlu perhatian! Pertimbangkan bicara dengan orang tua atau ahli.";
}
