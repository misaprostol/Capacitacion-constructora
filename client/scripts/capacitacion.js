document.getElementById('trainingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Respuestas correctas
    const correctAnswers = {
        question1: 'correct',
        question2: 'correct',
        question3: 'correct',
        question4: 'correct',
        question5: 'correct',
        question6: 'correct',
        question7: 'correct',
        question8: 'correct',
        question9: 'correct',
        question10: 'correct',
        question11: 'correct',
        question12: 'correct',
        question13: 'correct',
        question14: 'correct',
        question15: 'correct'
    };

    // Obtener las respuestas del formulario
    let score = 0;
    const totalQuestions = 15;

    for (let question in correctAnswers) {
        const selectedAnswer = document.getElementById(question).value;
        if (selectedAnswer === correctAnswers[question]) {
            score++;
        }
    }

    // Calcular el porcentaje
    const percentage = (score / totalQuestions) * 100;

    // Mostrar resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Tu puntuación es ${score}/${totalQuestions} (${percentage}%)`;

    // Evaluar si aprobó o desaprobó
    if (percentage >= 70) {
        resultDiv.classList.add('success');
        resultDiv.classList.remove('fail');
        resultDiv.innerHTML += '<br>¡Aprobaste la capacitación has obtenido tu certificado de capacitacion!';
    } else {
        resultDiv.classList.add('fail');
        resultDiv.classList.remove('success');
        resultDiv.innerHTML += '<br>No aprobaste, no has obtenido tu certificado de capacitacion';
    }
});
