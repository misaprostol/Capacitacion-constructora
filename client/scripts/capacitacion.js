// Función para generar el captcha
function generateCaptcha() {
    var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var captchaLength = 6;
    var captcha = [];
    for (var i = 0; i < captchaLength; i++) {
        var index = Math.floor(Math.random() * charsArray.length);
        captcha.push(charsArray[index]);
    }
    var captchaString = captcha.join("");
    document.getElementById('captchaImage').innerText = captchaString;
    return captchaString;
}

// aca iniciamos el captcha 
var generatedCaptcha = generateCaptcha();

// Validar CAPTCHA y formulario
document.getElementById('trainingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validar el CAPTCHA
    var userCaptchaInput = document.getElementById('captchaInput').value.trim();
    if (userCaptchaInput.toLowerCase() !== generatedCaptcha.toLowerCase()) {
        alert('El CAPTCHA es incorrecto. Por favor, intenta nuevamente.');
        generatedCaptcha = generateCaptcha();  // Recargar un nuevo CAPTCHA
        document.getElementById('captchaInput').value = '';  // Limpiar campo de entrada
        return; // Salir de la función para evitar que se muestre el resultado
    }

    // Si el CAPTCHA es correcto, proceder a evaluar las respuestas
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
        resultDiv.innerHTML += '<br>¡Aprobaste la capacitación, has obtenido tu certificado de capacitación!';
    } else {
        resultDiv.classList.add('fail');
        resultDiv.classList.remove('success');
        resultDiv.innerHTML += '<br>No aprobaste, no has obtenido tu certificado de capacitación.';
    }
});

const increaseFontBtn = document.getElementById('increaseFont');
const decreaseFontBtn = document.getElementById('decreaseFont');
const form = document.getElementById('trainingForm');

// Tamaño de fuente inicial
let fontSize = 16; // tamaño en píxeles

// Función para aumentar el tamaño de la fuente
increaseFontBtn.addEventListener('click', () => {
    fontSize += 2; // Incrementar el tamaño de la fuente
    form.style.fontSize = fontSize + 'px'; // Aplicar el nuevo tamaño
});

// Función para disminuir el tamaño de la fuente
decreaseFontBtn.addEventListener('click', () => {
    if (fontSize > 10) { // Prevenir que la fuente sea demasiado pequeña
        fontSize -= 2;
        form.style.fontSize = fontSize + 'px';
    }
});