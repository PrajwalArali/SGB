var correctAnswers = {
    1: 'A',
    2: 'C',
    3: 'C',
    4: 'D',
    5: 'B'
};
var currentQuestion = 1;

function checkAnswer(question, answer) {
    if (correctAnswers[question] === answer) {
        document.getElementById('resultMessage').textContent = 'Correct!';
    } else {
        document.getElementById('resultMessage').textContent = 'Incorrect, try again.';
    }
    document.getElementById('resultMessage').style.display = 'block';

    if (question < 5 && correctAnswers[question] === answer) {
        setTimeout(function() {
            document.getElementById('question' + question).style.display = 'none';
            currentQuestion++;
            document.getElementById('question' + currentQuestion).style.display = 'block';
            document.getElementById('resultMessage').style.display = 'none';
        }, 1000);
    } else if (question === 5 && correctAnswers[question] === answer) {
        setTimeout(function() {
            document.getElementById('quiz').innerHTML = '<p>Congratulations! You have completed the quiz.</p>';
        }, 1000);
    }
}