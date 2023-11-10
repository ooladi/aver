const messageContainer = document.getElementById("message-container");
const inputField = document.querySelector(".mensaje input");

let buttonsPressed = 0;

function replaceCharacter(button, character) {
    // Agregar la animación de rotación al botón
    button.style.transform = "rotate(360deg)";

    // Esperar a que termine la animación antes de cambiar el contenido del botón
    setTimeout(() => {
        button.textContent = character;
        // Eliminar la transformación para futuros clics
        button.style.transform = "none";

        button.classList.add("bold");
        if (messageContainer.classList.contains("hidden")) {
            messageContainer.classList.remove("hidden");
        }

        buttonsPressed++;
        console.log(buttonsPressed);
        
        if (buttonsPressed === 31) {
            inputField.value = "¿Te gustaría salir este sábado? :)";
            buttonsPressed = 0;
        }
    }, 300); // El valor debe coincidir con la duración de la transición en el CSS
}

function revelar() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.click();
    });
}
