
document.addEventListener('DOMContentLoaded', function () {
  
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
  
    // Validar el formulario y el CAPTCHA
    document.querySelector("#formulario").addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const codigo = document.querySelector("#codigoCredencial").value;
      const nombre = document.querySelector("#nombre").value;
      const apellido = document.querySelector("#apellido").value;
      const sede = document.querySelector("#sede").value;
      const captchaInput = document.querySelector("#captchaInput").value;
  
      // Validar si el captcha es correcto
      if (captchaInput !== captchaGenerated) {
        document.getElementById('captchaError').style.display = 'block'; // Mostrar mensaje de error
        captchaGenerated = generateCaptcha(); // Generar un nuevo captcha
        captchaTextElement.textContent = captchaGenerated;
        document.getElementById('captchaInput').value = ''; // Limpiar el campo del captcha
        return; // Detener el envío del formulario
      }
  
      try {
        // Enviar solicitud al servidor
        const response = await fetch(`http://localhost:3000/usuarios/${codigo}`, {
          method: 'GET'
        });
  
        if (response.ok) {
          const datos = await response.json();
          console.log(datos);
  
          alert('Formulario enviado exitosamente.');
        } else {
          alert('Error al enviar el formulario. Intente nuevamente.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error al procesar el formulario.');
      }
    });
  });
  