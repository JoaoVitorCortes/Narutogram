const themeCheckbox = document.getElementById("theme-checkbox");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Imagens para cada tema
const sharinganIcon =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d4b5255a-4854-487f-bd6f-589eac25094b/d54wtbq-15651c6e-dcda-4c46-ac3c-8589e3eaf76d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q0YjUyNTVhLTQ4NTQtNDg3Zi1iZDZmLTU4OWVhYzI1MDk0YlwvZDU0d3RicS0xNTY1MWM2ZS1kY2RhLTRjNDYtYWMzYy04NTg5ZTNlYWY3NmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2ZETHtddTbNSyPWRi2ThP9dvCLzfsQvD3LB_2zWHVh0";
const byakuganIcon =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1c68bc82-d298-4e60-9291-8b076caef75a/dc3dhda-eacbb2cd-e59d-4a25-9107-3b37665b45b9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFjNjhiYzgyLWQyOTgtNGU2MC05MjkxLThiMDc2Y2FlZjc1YVwvZGMzZGhkYS1lYWNiYjJjZC1lNTlkLTRhMjUtOTEwNy0zYjM3NjY1YjQ1YjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4ieSUFUMT8RUHTQKpkieuok-5yW1_w8TFF3cIPumUIw";

// Função que aplica o tema e atualiza o ícone e o checkbox
function applyTheme(theme) {
  body.dataset.theme = theme;
  themeIcon.src = theme === "light" ? byakuganIcon : sharinganIcon;
  themeCheckbox.checked = theme === "light";
  localStorage.setItem("theme", theme); // Salva a preferência
}

// Evento de clique no interruptor
themeCheckbox.addEventListener("change", () => {
  const newTheme = themeCheckbox.checked ? "light" : "dark";
  applyTheme(newTheme);
});

// Verifica se há um tema salvo ao carregar a página
const savedTheme = localStorage.getItem("theme") || "dark"; // Padrão é dark
applyTheme(savedTheme);
