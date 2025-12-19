const texto_sobre_mi = document.getElementById("texto-sobre-mi")
const boton_sobre_mi = document.getElementById("boton-sobre-mi")

boton_sobre_mi.addEventListener('click', function() {
    if (texto_sobre_mi.textContent === "¡El texto ha sido cambiado, ahora sabes un poco sobre mí!") {
        texto_sobre_mi.textContent = "Me apasiona la tecnología y no temo enfrentarme a retos. Sueño con convertirme en una tesa en programación, dominando las herramientas y conocimientos necesarios para crear soluciones que marquen la diferencia.";
        texto_sobre_mi.style.color = "black";
    } else {
        texto_sobre_mi.textContent = "¡El texto ha sido cambiado, ahora sabes un poco sobre mí!";
        texto_sobre_mi.style.color = "rgb(115, 69, 199)";
    }
});

const cambio_mascotas = document.getElementById('cambio-mascotas');
cambio_mascotas.addEventListener('click', function() {
    alert('¡Bienvenido a mi página de Mascotas!');
});
