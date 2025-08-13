// As variáveis e funções principais ficam no nível mais alto do arquivo.
let allApiCharacters = [];
let isDataFetched = false;
const API_URL = "https://dattebayo-api.onrender.com/characters";
const listaDeComentariosAleatorios = [
    "Incrível! Sempre superando os limites. 🔥",
    "Que foto épica! Mandou bem.",
    "O treinamento pesado sempre dá resultado! 💪",
    "Essa é a verdadeira Vontade do Fogo! 🍃",
    "Estou impressionado com a sua técnica.",
    "Depois vamos comemorar no Ichiraku? 🍜",
    "Que orgulho para a nossa vila!",
    "Onde foi essa missão? Parece perigosa.",
    "Uau! Simplesmente impressionante.",
    "Continue assim, o trabalho duro compensa! 👍",
    "Cuidado para não exagerar no treino! 😉",
    "Isso me lembra dos velhos tempos de academia."
];
const personagensPermitidosParaComentar = [
    "Nagato", "Konan", "Itachi Uchiha", "Kisame Hoshigaki", "Deidara",
    "Sasori", "Hidan", "Kakuzu", "Zetsu", "Obito Uchiha", "Madara Uchiha",
    "Minato Namikaze", "Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno",
    "Kakashi Hatake", "Kiba Inuzuka", "Shino Aburame", "Hinata Hyūga",
    "Kurenai Yūhi", "Rock Lee", "Neji Hyūga", "Tenten", "Might Guy",
    "Shikamaru Nara", "Chōji Akimichi", "Ino Yamanaka", "Asuma Sarutobi",
];

async function fetchAllCharactersOnce() {
    if (isDataFetched) return;
    try {
        const firstPageResponse = await fetch(API_URL);
        const firstPageData = await firstPageResponse.json();
        const totalPages = Math.ceil(firstPageData.total / firstPageData.pageSize);
        const pagePromises = [];
        for (let i = 2; i <= totalPages; i++) {
            pagePromises.push(fetch(`${API_URL}?page=${i}`).then((res) => res.json()));
        }
        const allPagesResults = await Promise.all(pagePromises);
        allApiCharacters = [...firstPageData.characters];
        allPagesResults.forEach((pageData) => {
            allApiCharacters = allApiCharacters.concat(pageData.characters);
        });
        isDataFetched = true;
    } catch (error) {
        console.error("Erro ao buscar personagens para comentários:", error);
    }
}

function criarComentarioHTML(imagemSrc, nome, texto) {
    const item = document.createElement("div");
    item.className = "comentario-item";
    item.innerHTML = `
      <img src="${imagemSrc || 'https://placehold.co/40'}" alt="Foto de ${nome}">
      <div class="comentario-corpo">
        <p><span class="comment-username">${nome}</span> ${texto}</p>
      </div>
    `;
    return item;
}

// LÓGICA CORRIGIDA: MOSTRAR PRIMEIRO, CARREGAR DEPOIS
export async function abrirModalComentarios() {
    const modalComentarios = document.getElementById("modal-comentarios");
    const listaComentariosContainer = document.getElementById("lista-comentarios");

    // 1. Mostra o modal IMEDIATAMENTE com uma mensagem de "Carregando"
    listaComentariosContainer.innerHTML = '<p style="text-align: center; padding: 3rem;">Carregando comentários...</p>';
    modalComentarios.style.display = "block";

    // 2. Busca os dados da API em segundo plano
    await fetchAllCharactersOnce();
    
    // 3. Limpa a mensagem de "Carregando" e preenche com os comentários reais
    listaComentariosContainer.innerHTML = "";
    
    const comentaristasFiltrados = allApiCharacters.filter(char => 
        personagensPermitidosParaComentar.includes(char.name)
    );

    const shuffledChars = [...comentaristasFiltrados].sort(() => 0.5 - Math.random());
    const shuffledComments = [...listaDeComentariosAleatorios].sort(() => 0.5 - Math.random());

    const commentCount = Math.floor(Math.random() * 3) + 3; 
    for (let i = 0; i < commentCount; i++) {
        const char = shuffledChars[i];
        const commentText = shuffledComments[i % shuffledComments.length];
        if (char && char.images && char.images.length > 0) {
            const comentarioElement = criarComentarioHTML(char.images[0], char.name, commentText);
            listaComentariosContainer.appendChild(comentarioElement);
        }
    }
}


// O código que adiciona os listeners continua igual
document.addEventListener("DOMContentLoaded", () => {
    const modalComentarios = document.getElementById("modal-comentarios");
    if (!modalComentarios) return; // Adiciona uma verificação de segurança
    
    const btnFecharModal = modalComentarios.querySelector(".fechar-modal");
    const formComentario = document.getElementById("form-comentario");
    const inputComentario = document.getElementById("input-comentario");

    function fecharModal() {
        modalComentarios.style.display = "none";
    }

    function postarComentario(event) {
        event.preventDefault();
        const texto = inputComentario.value.trim();
        const listaComentariosContainer = document.getElementById("lista-comentarios");
        if (texto) {
            const meuComentario = criarComentarioHTML("img/jiraiya-profile.png", "Eu", texto); 
            listaComentariosContainer.prepend(meuComentario);
            inputComentario.value = "";
        }
    }

    btnFecharModal.addEventListener("click", fecharModal);
    window.addEventListener("click", (event) => {
        if (event.target == modalComentarios) {
            fecharModal();
        }
    });
    formComentario.addEventListener("submit", postarComentario);
});