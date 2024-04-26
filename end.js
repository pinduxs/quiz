const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const saveForm = document.getElementById('saveForm');
const selectedAnswers = JSON.parse(localStorage.getItem("Selected answers"))
let userData = []

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
   window.location.assign('/result.html');
});