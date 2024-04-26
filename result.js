document.addEventListener('DOMContentLoaded', () => {
    const usernameDiv = document.getElementById('username');
    const answersDiv = document.getElementById('answers');

    // Retrieve username and answers from localStorage
    const username = localStorage.getItem('username');
    const userAnswers = JSON.parse(localStorage.getItem('Selected answers'));
    // Display username
    usernameDiv.textContent = `Username: ${username}`;

    // Loop through user's answers and display them
    userAnswers.forEach((answer, index) => {
        const userAnswerDiv = document.createElement('div');
        userAnswerDiv.textContent = `Atbilde ${index + 1}: ${answer}`;
        answersDiv.appendChild(userAnswerDiv);
    });
});
