// A função principal de manipulação de cliques de like
function handleLikeClick(likeBtn) {
    const post = likeBtn.closest('.post');
    if (!post) return;
    const likeCountSpan = post.querySelector('.like-count');
    if (!likeCountSpan) return;
    
    // Alterna a classe visual do coração
    const isLiked = likeBtn.classList.toggle('liked');

    // Pega o número real de curtidas do data attribute
    let currentLikes = parseInt(likeCountSpan.dataset.likes, 10);

    // Verifica se o número inicial era maior que 998
    const initialLikes = parseInt(likeCountSpan.dataset.initial, 10);
    if (initialLikes > 998) {
        return; // Apenas muda a cor do coração e não faz mais nada, como solicitado.
    }

    // Se não for > 998, atualiza o número
    if (isLiked) {
        currentLikes++;
    } else {
        currentLikes--;
    }

    // Atualiza os dados e o texto visível
    likeCountSpan.dataset.likes = currentLikes;
    likeCountSpan.textContent = currentLikes;
}

// O listener de evento que usa a função acima
document.addEventListener("DOMContentLoaded", () => {
    const feedContainer = document.getElementById("feed-container");
    if (!feedContainer) return;

    feedContainer.addEventListener('click', handleLikeClick);
});