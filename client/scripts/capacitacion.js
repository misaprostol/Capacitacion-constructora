<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capacitación - Supervisor de Seguridad</title>
    <link rel="stylesheet" href="styles/capacitacion.css">
</head>
<body>
    <div class="container">
        <h3>Formulario de Capacitación - Supervisor de Seguridad</h3>
        <form id="trainingForm">
            <!-- Preguntas 1 a 4 -->
            <div class="form-group">
                <label for="question1">1. ¿Cuál es la importancia de usar equipos de protección personal (EPP)?</label>
                <select id="question1" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="correct">Para evitar lesiones en el lugar de trabajo.</option>
                    <option value="incorrect">Para hacer el trabajo más rápido.</option>
                    <option value="incorrect">Porque es una norma opcional.</option>
                </select>
            </div>
            <div class="form-group">
                <label for="question2">2. ¿Qué debe hacer un supervisor en caso de identificar un riesgo de seguridad?</label>
                <select id="question2" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="correct">Implementar medidas inmediatas para mitigar el riesgo.</option>
                    <option value="incorrect">Esperar a que alguien reporte el problema.</option>
                    <option value="incorrect">Ignorar el riesgo si no parece grave.</option>
                </select>
            </div>
            <div class="form-group">
                <label for="question3">3. ¿Con qué frecuencia se debe realizar la capacitación en seguridad?</label>
                <select id="question3" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="incorrect">Solo una vez al año.</option>
                    <option value="correct">De manera continua y regular.</option>
                    <option value="incorrect">Solo al comienzo del proyecto.</option>
                </select>
            </div>
            <div class="form-group">
                <label for="question4">4. ¿Qué es un plan de seguridad?</label>
                <select id="question4" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="incorrect">Un documento opcional.</option>
                    <option value="correct">Un conjunto de normas para prevenir accidentes.</option>
                    <option value="incorrect">Una lista de instrucciones para el equipo de trabajo.</option>
                </select>
            </div>

            <!-- Añadir más preguntas hasta 15 -->
            <div class="form-group">
                <label for="question5">5. ¿Cuál es la acción más importante al identificar un peligro en el sitio de construcción?</label>
                <select id="question5" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="incorrect">Ignorarlo si no es grave.</option>
                    <option value="correct">Informar inmediatamente a los responsables y tomar medidas correctivas.</option>
                    <option value="incorrect">Esperar a que ocurra un incidente para actuar.</option>
                </select>
            </div>

            <div class="form-group">
                <label for="question6">6. ¿Qué significa señalización de seguridad?</label>
                <select id="question6" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="incorrect">Es un adorno en el sitio.</option>
                    <option value="correct">Es un conjunto de indicaciones para prevenir accidentes.</option>
                    <option value="incorrect">Solo sirve para decorar.</option>
                </select>
            </div>

            <div class="form-group">
                <label for="question7">7. ¿Qué medida es clave para evitar caídas en altura?</label>
                <select id="question7" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="correct">Uso de arnés y líneas de vida.</option>
                    <option value="incorrect">Solo tener cuidado.</option>
                    <option value="incorrect">No es necesario usar equipo si la altura no es significativa.</option>
                </select>
            </div>

            <div class="form-group">
                <label for="question8">8. ¿Qué es un accidente laboral?</label>
                <select id="question8" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="incorrect">Un evento sin consecuencias.</option>
                    <option value="correct">Un evento inesperado que provoca daño o lesiones en el trabajo.</option>
                    <option value="incorrect">Un evento planificado.</option>
                </select>
            </div>

            <div class="form-group">
                <label for="question9">9. ¿Quién es responsable de garantizar un ambiente seguro en el sitio?</label>
                <select id="question9" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="correct">El supervisor y todo el equipo.</option>
                    <option value="incorrect">Solo los trabajadores.</option>
                    <option value="incorrect">Nadie, solo depende del destino.</option>
                </select>
            </div>

            <div class="form-group">
                <label for="question10">10. ¿Cuál es el propósito de los simulacros de emergencia?</label>
                <select id="question10" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="correct">Preparar al personal para responder a situaciones de emergencia.</option>
                    <option value="incorrect">Hacer que los empleados se ejerciten.</option>
                    <option value="incorrect">Solo cumplir con la normativa.</option>
                </select>
            </div>

            <div class="form-group">
                <label for="question11">11. ¿Qué acción reduce la exposición al ruido en una obra?</label>
                <select id="question11" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="incorrect">No es necesario protegerse.</option>
                    <option value="correct">Uso de protección auditiva adecuada.</option>
                    <option value="incorrect">Hablar más fuerte para sobreponerse al ruido.</option>
                </select>
            </div>

            <div class="form-group">
                <label for="question12">12. ¿Qué es un riesgo eléctrico?</label>
                <select id="question12" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="incorrect">Un incidente relacionado con el uso de vehículos.</option>
                    <option value="correct">Un riesgo derivado del uso de electricidad.</option>
                    <option value="incorrect">Un peligro solo para electricistas.</option>
                </select>
            </div>

            <div class="form-group">
                <label for="question13">13. ¿Cómo se asegura el correcto uso de herramientas?</label>
                <select id="question13" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="correct">Mediante inspección regular y mantenimiento.</option>
                    <option value="incorrect">Solo con la experiencia del trabajador.</option>
                    <option value="incorrect">No es necesario ningún control específico.</option>
                </select>
            </div>

            <div class="form-group">
                <label for="question14">14. ¿Cuál es la mejor práctica para manejar sustancias químicas peligrosas?</label>
                <select id="question14" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="incorrect">No es necesario tomar precauciones adicionales.</option>
                    <option value="correct">Usar EPP y seguir las hojas de seguridad del producto.</option>
                    <option value="incorrect">Solo tener cuidado al usarlas.</option>
                </select>
            </div>

            <div class="form-group">
                <label for="question15">15. ¿Cuál es el objetivo principal de una investigación de incidentes?</label>
                <select id="question15" class="form-control" required>
                    <option value="">Seleccione una opción</option>
                    <option value="correct">Identificar la causa y prevenir futuros incidentes.</option>
                    <option value="incorrect">Determinar la culpa de los empleados.</option>
                    <option value="incorrect">Ignorar el evento y continuar con el trabajo.</option>
                </select>
            </div>

        <!-- captcha -->
<center> 
        <div class="form-group captcha-container">
            <label for="captcha">Por favor, completar el sistema captcha para proceder: </label>
            <div class="captcha">
                <span id="captchaImage" class="captcha-image"></span>
                <span class="captcha-refresh" onclick="generateCaptcha()">🔄 Recargar</span>
            </div>
            <input type="text" id="captchaInput" class="form-control" placeholder="Escribe el texto del CAPTCHA" required>
        </div>

        <button type="submit" class="btn-submit">Finalizar y Evaluar</button>
    </form>

    <div id="result" class="result"></div>
    <a href="index.html" class="retroceder">Volver</a>
</div>
</center>
    <script src="scripts/capacitacion.js"></script>

</body>
</html>
