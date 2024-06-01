// validación de el for mulario 

const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const warning = document.getElementById("warnings");

form.addEventListener('submit', (mail) => {
  mail.preventDefault();

  let warnings = "";
  let validatemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let login = false;

  if (!validatemail.test(email.value)) {
    warnings += `El correo no es válido <br>`;
    login = true;
  }

  if (password.value.length < 8) {
    warnings += `la contraseña no es válida`;
    login = true;
  }

  if (login) {
    warning.innerHTML = warnings;
  } else {
    warning.innerHTML = "sesión iniciada";
  }
});