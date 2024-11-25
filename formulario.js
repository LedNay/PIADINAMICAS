document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Validación de los campos
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Por favor, completa todos los campos.";
            formMessage.style.color = "red";
            formMessage.style.display = "block";
            return;
        }

        if (!validateEmail(email)) {
            formMessage.textContent = "Por favor, ingresa un correo electrónico válido.";
            formMessage.style.color = "red";
            formMessage.style.display = "block";
            return;
        }

        // Simular el envío exitoso
        formMessage.textContent = "¡Gracias! Tu mensaje ha sido enviado con éxito.";
        formMessage.style.color = "#28a745";
        formMessage.style.display = "block";

        // Limpiar formulario
        form.reset();
    });

    // Función para validar el correo electrónico
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});