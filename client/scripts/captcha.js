function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }

  // Mostrar el CAPTCHA en el HTML
  const captchaTextElement = document.getElementById('captchaText');
  let captchaGenerated = generateCaptcha();
  captchaTextElement.textContent = captchaGenerated;

  // Validar el formulario
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const captchaInput = document.getElementById('captchaInput').value;

    // Validar si el captcha es correcto
    if (captchaInput === captchaGenerated) {
      alert('Captcha correcto. Formulario enviado exitosamente.');
      // Aquí podrías enviar el formulario a tu servidor.
    } else {
      // Mostrar mensaje de error si el captcha es incorrecto
      document.getElementById('captchaError').style.display = 'block';
      // Generar un nuevo CAPTCHA si el anterior era incorrecto
      captchaGenerated = generateCaptcha();
      captchaTextElement.textContent = captchaGenerated;
      document.getElementById('captchaInput').value = ''; // Limpiar el campo de entrada del captcha
    }
  });