document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  const fields = {
    firstName: {
      el: document.getElementById("firstName"),
      errorId: "firstNameError",
      validate: (value) => value.trim() !== "",
      message: "Informe seu nome",
    },
    lastName: {
      el: document.getElementById("lastName"),
      errorId: "lastNameError",
      validate: (value) => value.trim() !== "",
      message: "Informe seu sobrenome",
    },
    email: {
      el: document.getElementById("registerEmail"),
      errorId: "registerEmailError",
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: "Digite um e-mail válido (ex: nome@dominio.com)",
    },
    jutsu: {
      el: document.getElementById("jutsu"),
      errorId: "jutsuError",
      validate: (value) => value.trim() !== "",
      message: "Digite seu jutsu favorito",
    },
    village: {
      el: document.getElementById("village"),
      errorId: "villageError",
      validate: (value) => value.trim() !== "",
      message: "Digite sua vila",
    },
    password: {
      el: document.getElementById("registerPassword"),
      errorId: "registerPasswordError",
      validate: (value) => value.length >= 6,
      message: "A senha deve ter ao menos 6 caracteres",
    },
    confirmPassword: {
      el: document.getElementById("confirmPassword"),
      errorId: "confirmPasswordError",
      validate: (value) =>
        value === document.getElementById("registerPassword").value,
      message: "As senhas não coincidem",
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

    // Validar todos os campos
    Object.values(fields).forEach((field) => {
      const valid = validateField(field);
      if (!valid) isValid = false;
    });

    if (isValid) {
      const userData = {
        firstName: fields.firstName.el.value.trim(),
        lastName: fields.lastName.el.value.trim(),
        email: fields.email.el.value.trim(),
        jutsu: fields.jutsu.el.value.trim(),
        village: fields.village.el.value.trim(),
        password: fields.password.el.value,
      };

      localStorage.setItem("userData", JSON.stringify(userData));

      // Redirecionar para o login
      window.location.href = "index.html";
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

  // Alternar visibilidade das senhas
  function setupPasswordToggles() {
    const toggles = [
      { btn: "toggleRegisterPassword", input: "registerPassword" },
      { btn: "toggleConfirmPassword", input: "confirmPassword" },
    ];

    toggles.forEach(({ btn, input }) => {
      const toggleBtn = document.getElementById(btn);
      const inputEl = document.getElementById(input);

      if (toggleBtn && inputEl) {
        toggleBtn.addEventListener("click", () => {
          const isHidden = inputEl.type === "password";
          inputEl.type = isHidden ? "text" : "password";

          const icon = toggleBtn.querySelector("i");
          icon.classList.toggle("bi-eye");
          icon.classList.toggle("bi-eye-slash");
        });
      }
    });
  }

  setupPasswordToggles();
});
