document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  // Función para mostrar mensajes de éxito o error
  const showAlert = (type, message) => {
    Swal.fire({
      icon: type,
      title: type === 'success' ? '¡Éxito!' : 'Error',
      text: message,
      confirmButtonText: 'Aceptar'
    });
  };

  // Función para validar el formulario
  const validateForm = () => {
    const fields = ['firstName', 'lastName', 'email', 'phone', 'age', 'country', 'city', 'message'];
    for (let field of fields) {
      const input = document.getElementById(field);
      if (!input.value.trim()) {
        input.focus();
        showAlert('error', 'Por favor completa todos los campos.');
        return false;
      }
    }
    const termsCheckbox = document.getElementById('acceptContact');
    if (!termsCheckbox.checked) {
      termsCheckbox.focus();
      showAlert('error', 'Debes aceptar ser contactado.');
      return false;
    }
    return true;
  };

  // Manejar el evento de envío del formulario
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    if (validateForm()) {
      // Aquí podrías enviar los datos del formulario a un servidor usando fetch o AJAX
      console.log('Formulario enviado con éxito');
      showAlert('success', 'Tu mensaje ha sido enviado correctamente.');

      // Limpiar el formulario después de enviar
      contactForm.reset();
    }
  });
});
