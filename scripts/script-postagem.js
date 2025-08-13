document.addEventListener("DOMContentLoaded", () => {
  // --- Selecionando os elementos do DOM ---
  const modal = document.getElementById("modal-postagem");
  const btnAbrirModal = document.getElementById("barra-criar-post");
  // CORREÇÃO: O seletor precisa ser mais específico para o modal de postagem
  const btnFecharModal = modal.querySelector(".fechar-modal"); 
  const formPostagem = document.getElementById("form-postagem");
  const feedContainer = document.getElementById("feed-container");

  // --- Funções para controlar o modal ---
  function abrirModal() {
    modal.style.display = "block";
  }

  function fecharModal() {
    modal.style.display = "none";
  }

  // --- Event Listeners ---
  btnAbrirModal.addEventListener("click", abrirModal);
  btnFecharModal.addEventListener("click", fecharModal);

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      fecharModal();
    }
  });

  formPostagem.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const imageUrl = document.getElementById("input-url-imagem").value;
    const caption = document.getElementById("input-legenda").value;

    const novoPost = criarCardDePostagem(imageUrl, caption);
    feedContainer.prepend(novoPost);

    formPostagem.reset();
    fecharModal();
  });

  // --- Função para criar o card (VERSÃO ATUALIZADA) ---
  function criarCardDePostagem(imageUrl, caption) {
    const post = document.createElement("div");
    post.className = "post";

    const usuarioAtual = {
      nome: "Jiraiya (Você)",
      foto: "img/jiraiya-profile.png",
      localizacao: "Monte Myōboku",
    };

    // AQUI ESTÁ A MUDANÇA PRINCIPAL: os ícones agora são os mesmos do feed
    post.innerHTML = `
      <div class="post-header">
        <img src="${usuarioAtual.foto}" alt="${usuarioAtual.nome}" class="profile-pic">
        <div class="user-info">
          <h3 class="username">${usuarioAtual.nome}</h3>
          <span class="location">${usuarioAtual.localizacao}</span>
        </div>
      </div>
      <div class="post-image-container">
        <img src="${imageUrl}" alt="Post de ${usuarioAtual.nome}" class="post-image">
      </div>
      <div class="post-actions">
        <button><i class="bi bi-hearts"></i></button>
        <button><i class="bi bi-chat-heart-fill"></i></button>
        <button><i class="bi bi-send-fill"></i></button>
      </div>
      <div class="post-caption">
        <strong>${usuarioAtual.nome}</strong> ${caption}
      </div>
    `;

    

    return post;
  }
});