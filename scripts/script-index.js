// A URL base da API
const API_URL = "https://dattebayo-api.onrender.com/characters";

// Arrays de imagens e legendas (mantidos como antes)
const randomImages = [
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
];
const randomCaptions = [
  "Treinando para ser o próximo Hokage! 🔥",
  "Mais um dia na vila da folha 🍃",
  "Nunca desista dos seus sonhos!",
  "O poder da juventude! 💪",
  "Protegendo aqueles que amo ❤️",
  "Caminho ninja nunca acaba!",
  "Força vem da determinação!",
  "Unidos somos mais fortes!",
  "A vontade do fogo queima em mim!",
  "Cada dia é uma nova missão!",
];

// ==================================================================
// NOVA FUNÇÃO QUE BUSCA TODAS AS PÁGINAS DA API
// ==================================================================
async function fetchAllCharacters() {
  console.log(
    "Iniciando busca de todos os personagens. Isso pode levar alguns segundos..."
  );

  try {
    // 1. Faz a primeira requisição para descobrir o total de páginas
    const firstPageResponse = await fetch(API_URL);
    const firstPageData = await firstPageResponse.json();

    const totalCharacters = firstPageData.total;
    const pageSize = firstPageData.pageSize;
    const totalPages = Math.ceil(totalCharacters / pageSize);

    console.log(`Total de páginas a serem buscadas: ${totalPages}`);

    // 2. Cria um array de promessas, uma para cada página, começando da página 2
    // (Já temos os dados da página 1)
    const pagePromises = [];
    for (let i = 2; i <= totalPages; i++) {
      pagePromises.push(
        fetch(`${API_URL}?page=${i}`).then((res) => res.json())
      );
    }

    // 3. Executa todas as promessas de busca em paralelo para ser mais rápido
    const allPagesResults = await Promise.all(pagePromises);

    // 4. Junta o resultado da primeira página com os resultados das outras páginas
    let allCharacters = [...firstPageData.characters];
    allPagesResults.forEach((pageData) => {
      allCharacters = allCharacters.concat(pageData.characters);
    });

    console.log(
      `Busca finalizada! Total de ${allCharacters.length} personagens carregados.`
    );
    return allCharacters;
  } catch (error) {
    console.error("Erro ao buscar todos os personagens:", error);
    return [];
  }
}

// A função createPost e addClickListeners permanecem exatamente iguais.
function createPost(character) {
  const post = document.createElement("div");
  post.className = "post";

  const postImage =
    randomImages[Math.floor(Math.random() * randomImages.length)] ||
    "https://via.placeholder.com/400";
  const postCaption =
    randomCaptions[Math.floor(Math.random() * randomCaptions.length)] ||
    "Um dia na vida de um ninja...";

  post.innerHTML = `
        <div class="post-header">
            <img src="${
              character.images[0] || "https://via.placeholder.com/40"
            }" alt="${character.name}" class="profile-pic">
            <div class="user-info">
                <h3 class="username" data-character="${encodeURIComponent(
                  character.name
                )}">${character.name}</h3>
                <span class="location">${
                  character.personal?.affiliation?.[0] || "Vila Oculta"
                }</span>
            </div>
        </div>
        <div class="post-image-container">
            <img src="${postImage}" alt="Post de ${
    character.name
  }" class="post-image" data-character="${encodeURIComponent(character.name)}">
        </div>
        <div class="post-actions">
            <button><i class="bi bi-hearts"></i></button>
            <button><i class="bi bi-chat-heart-fill"></i></button>
            <button><i class="bi bi-send-fill"></i></button>
        </div>
        <div class="post-caption">
            <strong>${character.name}</strong> ${postCaption}
        </div>
    `;

  return post;
}

function addClickListeners() {
  document.querySelectorAll(".username, .post-image").forEach((element) => {
    element.addEventListener("click", (e) => {
      const characterName = e.currentTarget.getAttribute("data-character");
      window.location.href = `personagem.html?nome=${characterName}`;
    });
  });
}

async function loadFeed() {
  const feedContainer = document.getElementById("feed-container");
  feedContainer.innerHTML =
    "<p>Carregando feed de todos os ninjas... Por favor, aguarde.</p>";

  // Lista de personagens que você quer que apareçam
  const personagensPermitidos = [
    "Nagato",
    "Konan",
    "Itachi Uchiha",
    "Kisame Hoshigaki",
    "Deidara",
    "Sasori",
    "Hidan",
    "Kakuzu",
    "Zetsu",
    "Obito Uchiha",
    "Madara Uchiha",
    "Minato Namikaze",
    "Naruto Uzumaki",
    "Sasuke Uchiha",
    "Sakura Haruno",
    "Kakashi Hatake",
    "Kiba Inuzuka",
    "Shino Aburame",
    "Hinata Hyūga",
    "Kurenai Yūhi",
    "Rock Lee",
    "Neji Hyūga",
    "Tenten",
    "Might Guy",
    "Shikamaru Nara",
    "Chōji Akimichi",
    "Ino Yamanaka",
    "Asuma Sarutobi",
  ];

  // **ALTERAÇÃO AQUI: Chama a nova função que busca TUDO**
  const allCharacters = await fetchAllCharacters();

  if (allCharacters.length === 0) {
    feedContainer.innerHTML =
      "<p>Erro ao carregar o feed. Tente novamente mais tarde.</p>";
    return;
  }

  // Filtra a lista COMPLETA, mantendo apenas os da sua lista de permitidos
  const personagensFiltrados = allCharacters.filter((character) =>
    personagensPermitidos.includes(character.name)
  );

  // Limpa a mensagem de "Carregando..."
  feedContainer.innerHTML = "";

  // Embaralha a sua lista já filtrada
  const shuffledCharacters = personagensFiltrados.sort(
    () => 0.5 - Math.random()
  );

  shuffledCharacters.forEach((character) => {
    if (character.images && character.images.length > 0) {
      const post = createPost(character);
      feedContainer.appendChild(post);
    }
  });

  addClickListeners();
}

// Carregar o feed quando a página estiver pronta
document.addEventListener("DOMContentLoaded", loadFeed);
