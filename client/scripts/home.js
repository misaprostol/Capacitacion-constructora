const bodyElement = document.body;
let currentFontSize = 16; // Tamaño de fuente inicial en píxeles

// Función para aumentar el tamaño de la fuente
function increaseFontSize() {
    if (currentFontSize < 30) { // Límite máximo de 30px
    currentFontSize += 2;
    bodyElement.style.fontSize = currentFontSize + 'px';
    }
}

// Función para disminuir el tamaño de la fuente
function decreaseFontSize() {
    if (currentFontSize > 12) { // Límite mínimo de 12px
    currentFontSize -= 2;
    bodyElement.style.fontSize = currentFontSize + 'px';
    }
}

// Asignar eventos a los botones del dropdown
document.getElementById('increaseFont').addEventListener('click', increaseFontSize);
document.getElementById('decreaseFont').addEventListener('click', decreaseFontSize);

