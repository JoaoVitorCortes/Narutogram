document.addEventListener("DOMContentLoaded", () => {
  // --- ELEMENTOS DO DOM ---
  const viewContatos = document.getElementById("view-contatos");
  const viewChat = document.getElementById("view-chat");
  const listaContatosContainer = document.getElementById("lista-contatos");
  const formChat = document.getElementById("form-chat");
  const chatInput = document.getElementById("chat-input");
  const chatJanela = document.getElementById("chat-janela");
  const chatHeaderNome = document.getElementById("chat-header-nome");
  const chatHeaderImg = document.getElementById("chat-header-img");

  // --- DADOS ---
  const contatosDisponiveis = [
    { name: "Nagato", image: "" }, { name: "Konan", image: "" },
    { name: "Itachi Uchiha", image: "" }, { name: "Kisame Hoshigaki", image: "" },
    { name: "Deidara", image: ""}, { name: "Sasori", image: ""},
    { name: "Hidan", image: ""}, { name: "Kakuzu", image: ""},
    { name: "Zetsu", image: ""}, { name: "Obito Uchiha", image: ""},
    { name: "Madara Uchiha", image: ""}, { name: "Minato Namikaze", image: ""},
    { name: "Naruto Uzumaki", image: "" }, { name: "Sasuke Uchiha", image: "" },
    { name: "Sakura Haruno", image: "" }, { name: "Kakashi Hatake", image: "" },
    { name: "Kiba Inuzuka", image: ""}, { name: "Shino Aburame", image: ""},
    { name: "Hinata Hyūga", image: ""}, { name: "Kurenai Yūhi", image: ""},
    { name: "Rock Lee", image: ""}, { name: "Neji Hyūga", image: ""},
    { name: "Tenten", image: ""}, { name: "Might Guy", image: ""},
    { name: "Shikamaru Nara", image: ""}, { name: "Chōji Akimichi", image: ""},
    { name: "Ino Yamanaka", image: ""}, { name: "Asuma Sarutobi", image: ""},
  ];
  const API_URL = "https://dattebayo-api.onrender.com/characters";
  
  // --- FUNÇÕES ---

  // OTIMIZADO: Busca todas as imagens em paralelo para ser mais rápido
  async function buscarImagensDosContatos() {
    console.log("Buscando imagens para contatos...");
    
    const promessas = contatosDisponiveis.map(contato => 
      fetch(`${API_URL}?name=${encodeURIComponent(contato.name)}`)
        .then(res => res.json())
        .then(data => {
          if (data.characters && data.characters[0] && data.characters[0].images.length > 0) {
            contato.image = data.characters[0].images[0];
          }
        }).catch(err => console.error(`Falha ao buscar ${contato.name}`, err))
    );

    await Promise.all(promessas); // Espera todas as buscas terminarem
    console.log("Imagens dos contatos carregadas.");
  }

  function popularListaDeContatos() {
    listaContatosContainer.innerHTML = "";
    contatosDisponiveis.forEach((ninja) => {
      const item = document.createElement("div");
      item.className = "contato-item";
      item.innerHTML = `<img src="${ninja.image || 'https://placehold.co/50'}" alt="${ninja.name}"><p>${ninja.name}</p>`;
      item.addEventListener("click", () => abrirChat(ninja));
      listaContatosContainer.appendChild(item);
    });
  }

  function abrirChat(ninja) {
    viewContatos.style.display = "none";
    const imageUrl = ninja.image || 'https://placehold.co/40';
    chatHeaderNome.textContent = ninja.name;
    chatHeaderImg.src = imageUrl;
    chatJanela.innerHTML = `<div class="mensagem mensagem-recebida">Olá! Conversando com ${ninja.name}.</div>`;
    viewChat.style.display = "flex"; // Usamos flex para centralizar o conteúdo
    chatInput.focus();
  }

   function simularResposta() {
    setTimeout(() => {
        const respostas = [
            "Ero-sennin! O que te traz por aqui?",
            "Jiraiya-sama. Olá. Aconteceu algo?",
            "Hn. O que quer, Jiraiya?",
            "Olá, mestre! Veio fazer alguma 'pesquisa' por aqui? 😏",
            "Jiraiya-sama! Que surpresa! Em que posso ajudar?",
            "Ora, se não é o Sábio dos Sapos. Diga.",
            "Que problemático... Olá, Jiraiya-sama.",
            "Veio me convidar pra beber ou só está de passagem?"
        ];
        const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)];
        const msgHtml = `<div class="mensagem mensagem-recebida">${respostaAleatoria}</div>`;
        chatJanela.insertAdjacentHTML('beforeend', msgHtml);
        chatJanela.scrollTop = chatJanela.scrollHeight;
    }, 1200);
  }

  function enviarMensagem(event) {
    event.preventDefault();
    const texto = chatInput.value.trim();
    if (texto) {
      const msgHtml = `<div class="mensagem mensagem-enviada">${texto}</div>`;
      chatJanela.insertAdjacentHTML('beforeend', msgHtml);
      chatInput.value = "";
      chatJanela.scrollTop = chatJanela.scrollHeight;
      simularResposta();
    }
  }

  // OTIMIZADO: A lógica principal agora prioriza o chat direto
  async function inicializar() {
    const urlParams = new URLSearchParams(window.location.search);
    const nomePersonagem = urlParams.get('chat_com');

    // Se for um chat direto, abre ele IMEDIATAMENTE
    if (nomePersonagem) {
      const ninja = contatosDisponiveis.find(c => c.name === nomePersonagem);
      if (ninja) {
        abrirChat(ninja); // Mostra o chat com a imagem de placeholder
        await buscarImagensDosContatos(); // Busca as imagens em segundo plano
        popularListaDeContatos(); // Preenche a lista de contatos para quando o usuário voltar
        // Atualiza a imagem do chat com a imagem real que acabou de ser baixada
        if(ninja.image) chatHeaderImg.src = ninja.image; 
        return; // Encerra a função aqui
      }
    }
    
    // Se não for um chat direto, carrega tudo e mostra a lista
    viewChat.style.display = "none";
    viewContatos.style.display = "flex";
    await buscarImagensDosContatos();
    popularListaDeContatos();
  }
  
  formChat.addEventListener('submit', enviarMensagem);
  inicializar();
});

