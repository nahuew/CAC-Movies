document.getElementById('form-2').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = getFormData();
  const warnings = validateForm(formData);
  displayWarnings(warnings);
});

function getFormData() {
  return {
      nombre: document.getElementById("nombre").value.trim(),
      last: document.getElementById("last-name").value.trim(),
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("password").value.trim(),
      date: document.getElementById("birth").value.trim(),
      region: document.getElementById("region").value.trim(),
      checkaccept: document.getElementById('check').checked
  };
}

function validateForm(formData) {
  let warnings = "";

  if (!formData.nombre || !formData.last || !formData.email || !formData.password || !formData.date || !formData.region || !formData.checkaccept) {
    warnings += 'Por favor, completa todos los campos y acepta los términos.';
  } else if (!isValidEmail(formData.email)) {
    warnings += 'Por favor, introduce un correo electrónico válido.';
  }

  return warnings;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayWarnings(warnings) {
  const warningElement = document.getElementById("warnings");
  warningElement.innerHTML = warnings || "te has registrado";
}