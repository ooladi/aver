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
        // console.log(buttonsPressed);

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
    buttonsPressed++;
    if (buttonsPressed === 10) {
        clearInterval(intervalID); // Detener el intervalo después de 10 repeticiones
    }
}
let buttonsInterval = setInterval(revelar, 10000);
var aux = 0;
function reproducirCancion() {
    if (aux === 0) {
        // Crea un elemento de audio
        var audio = new Audio("music.mp3");
        // Reproduce el archivo de audio
        audio.volume = 0.2;
        // Adelanta 3.1 segundos en la reproducción
        //audio.currentTime = 3.1;
        // Habilita la reproducción en bucle
        audio.loop = true;
        audio.play();
    }
    aux = 1;
}
