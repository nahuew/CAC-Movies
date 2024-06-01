// validación de el for mulario 
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const warning = document.getElementById("warnings");

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let warnings = "";
    const emailV = email.value.trim();
    const passwordV = password.value.trim();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if (!emailRegex.test(emailV)) {
      warnings += `El correo electrónico no es válido.<br>`;
    }

    if (passwordV.length < 8) {
      warnings += `La contraseña debe tener al menos 8 caracteres.<br>`;
    }

    if (warnings) {
      warning.innerHTML = warnings;
    } else {
      warning.innerHTML = "¡Sesión iniciada!";
    }
  });
});