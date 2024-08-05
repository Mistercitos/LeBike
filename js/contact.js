document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Verificar si la casilla de verificación está marcada
    const acceptContact = document.getElementById("acceptContact").checked;
    if (!acceptContact) {
      Swal.fire(
        "Error!",
        "Debe aceptar ser contactado para enviar el formulario.",
        "error"
      );
      return;
    }

    // Obtener valores del formulario
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;

    // Aquí podría ir la lógica para enviar el formulario (e.g., AJAX, etc.)

    // Mostrar mensaje de éxito
    Swal.fire(
      "Formulario enviado!",
      "Nos pondremos en contacto contigo pronto.",
      "success"
    );

    // Limpiar el formulario
    contactForm.reset();
  });
});
