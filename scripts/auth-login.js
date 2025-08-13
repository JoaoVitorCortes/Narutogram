document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  const fields = {
    email: {
      el: document.getElementById("email"),
      errorId: "emailError",
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: "Digite um e-mail válido (ex: nome@dominio.com)",
    },
    password: {
      el: document.getElementById("password"),
      errorId: "passwordError",
      validate: (value) => value.length >= 6,
      message: "Senha inválida",
    },
  };

  // Validação individual ao pressionar Enter
  Object.values(fields).forEach((field) => {
    field.el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        validateField(field);
      }
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Limpar mensagens anteriores
    Object.values(fields).forEach((field) => {
      clearError(field);
    });

    // Validar campos individualmente
    Object.values(fields).forEach((field) => {
      const valid = validateField(field);
      if (!valid) isValid = false;
    });

    if (isValid) {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      const emailValue = fields.email.el.value.trim();
      const passwordValue = fields.password.el.value;

      if (
        storedData &&
        storedData.email === emailValue &&
        storedData.password === passwordValue
      ) {
        // Redirecionar após sucesso
        window.location.href = "feed.html";
      } else {
        showError(
          "passwordError",
          "E-mail ou senha incorretos",
          fields.password.el
        );
      }
    }
  });

  function validateField(field) {
    const value = field.el.value;
    const isValid = field.validate(value);

    if (!isValid) {
      showError(field.errorId, field.message, field.el);
      return false;
    } else {
      clearError(field);
      return true;
    }
  }

  function showError(id, message, inputElement) {
    const span = document.getElementById(id);
    if (span) span.textContent = message;
    if (inputElement) inputElement.classList.add("input-error");
  }

  function clearError(field) {
    const span = document.getElementById(field.errorId);
    if (span) span.textContent = "";
    if (field.el) field.el.classList.remove("input-error");
  }

  // Alternar visibilidade da senha
  const toggle = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  if (toggle && passwordInput) {
    toggle.addEventListener("click", () => {
      const isHidden = passwordInput.type === "password";
      passwordInput.type = isHidden ? "text" : "password";

      const icon = toggle.querySelector("i");
      icon.classList.toggle("bi-eye");
      icon.classList.toggle("bi-eye-slash");
    });
  }
});
