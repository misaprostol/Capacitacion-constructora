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

