import { abrirModalComentarios } from './script-comentario.js';

// A URL base da API continua a mesma
const API_URL = "https://dattebayo-api.onrender.com/characters";

// ==================================================================
// NOVO: ESTRUTURA DE DADOS PARA POSTS PRÉ-DEFINIDOS
// Substituímos os arrays randomImages e randomCaptions por este.
// Este é o seu novo painel de controle: adicione ou edite os posts aqui.
// ==================================================================
const postsPredefinidos = [
  {
    characterName: "Nagato",
    postImage: "https://i.redd.it/xnfk14urtmab1.jpg",
    postCaption: '"Nunca desista", não é mesmo? Parece que a situação atual discorda um pouco. Mas continue tentando, garoto. Sua luta fútil só torna a minha lição ainda mais... memorável. 😊<br>#Persistência #Futilidade #LiçõesDaVida'
  },
  {
    characterName: "Konan",
    postImage: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/03/konan_and_naruto.jpg",
    postCaption: "Este buquê é a minha fé e a minha promessa. A Vontade do Fogo que você carrega é real. Volto para casa sabendo que o sonho de Yahiko e Nagato está em boas mãos.<br>#Confiança #Promessa #Akatsuki"
  },
  {
    characterName: "Itachi Uchiha",
    postImage: "https://ilovecinema.com.br/wp-content/uploads/2025/06/ab4d7fdd08967e565fad7d1b095c4d1a.webp ",
    postCaption: "A verdadeira paz exige os maiores sacrifícios. Um caminho solitário sob o olhar da lua, para que outros possam ver o amanhecer.<br>#Paz #Sacrifício #Akatsuki"
  },
  {
    characterName: "Kisame Hoshigaki",
    postImage: "https://animerant.com.br/wp-content/uploads/2023/11/8-kisame-with-shark-blade-sameha-1.webp",
    postCaption: 'Me chamam de "Besta Sem Cauda" por um motivo. A quantidade de chakra que possuo é mais do que suficiente para afogar qualquer um que cruzar o meu caminho. 😏💧<br>#SeteEspadachinsDaNévoa #JutsuPrisãoDeÁgua #Poder'
  },
  {
    characterName: "Deidara",
    postImage: "https://i.pinimg.com/736x/15/64/d9/1564d9c329586d3f3064110a7dac5331.jpg",
    postCaption: "Pronto para mostrar ao mundo o que é a beleza efêmera. Minhas criações estão ansiosas para... estourar. Quem quer ser o primeiro a apreciar minha obra-prima? Heh. 😏<br>#ObraPrima #Explosão #DeidaraSenpai"
  },
  {
    characterName: "Sasori",
    postImage: "https://criticalhits.com.br/wp-content/uploads/2020/08/naruto-sasori-quiz-910x636.jpg",
    postCaption: "Cada fio, cada junta, cada movimento... todos sob o meu controle absoluto. Eu não crio meros bonecos, eu crio obras de arte que transcendem a vida e a morte.<br>#MestreDasMarionetes #SasoriDaAreiaVermelha #Perfeição"
  },
  {
    characterName: "Hidan",
    postImage: "https://i.pinimg.com/originals/73/a2/3c/73a23cebe79e3f6f64825554c825e180.jpg",
    postCaption: "Qual o problema? Parece assustado? Reze para o seu deus inútil, porque o meu está exigindo sua alma! PREPARE-SE PARA A DOR! HAHAHAHA!<br>#ReligiãoVerdadeira #Imortal #Akatsuki"
  },
  {
    characterName: "Kakuzu",
    postImage: "https://i.pinimg.com/736x/01/45/32/014532c434d9acc45bb27c3516cdb1ad.jpg",
    postCaption: "Outra recompensa coletada. Outro trabalho bem executado. No fim, a única coisa em que se pode confiar neste mundo é no peso do dinheiro em suas mãos. O resto é irrelevante.<br>#Negócios #Recompensa #Akatsuki"
  },
  {
    characterName: "Zetsu",
    postImage: "https://imgix.ranker.com/list_img_v2/14093/2914093/original/2914093?fit=crop&fm=pjpg&q=80&dpr=1&w=1200&h=630",
    postCaption: "<br>Preto: A história é longa, tecida com mentiras. Estamos aqui apenas para garantir que ela chegue à sua conclusão... a verdadeira conclusão.<br>Branco: Ele quer dizer que gostamos de ver o circo pegar fogo! É divertido!<br>#História #Vontade #Manipulação"
  },
  {
    characterName: "Obito Uchiha",
    postImage: "https://m.media-amazon.com/images/I/81nJzlDSyqL._UF1000,1000_QL80_.jpg",
    postCaption: "Tobi, Madara, um ninguém... Estas máscaras quebradas não importam mais. Meu nome não importa. A única coisa que importa é apagar este inferno chamado realidade e criar um mundo novo.<br>#Ninguém #Máscaras #MugenTsukuyomi"
  },
  {
    characterName: "Madara Uchiha",
    postImage: "https://i.redd.it/xivysfxd4kk51.jpg",
    postCaption: "Hmm... tantos rostos insignificantes reunidos. Que incômodo. Já que insistem em se opor... vocês preferem ser esmagados por meus clones com ou sem Susanoo? <br>#PoderAbsoluto #Desespero #Uchiha"
  },
  {
    characterName: "Minato Namikaze",
    postImage: "https://criticalhits.com.br/wp-content/uploads/2021/11/minato-namikaze-naruto-shippuden-quiz.jpg",
    postCaption: "Ser Hokage significa carregar a vontade de todos nos ombros e estar pronto para agir no instante em que for necessário. Minha família é a vila inteira. 🍃<br>#YondaimeHokage #VontadeDoFogo #Proteção"
  },
  {
    characterName: "Naruto Uzumaki",
    postImage: "https://images.steamusercontent.com/ugc/961969524134142987/1ACE4C89FAF16A78607C76E2A2128117A68EF634/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    postCaption: "Pai... Ero-sennin... a vista daqui de cima é incrível. Espero que estejam orgulhosos. Agora é a minha vez de garantir que a próxima geração tenha um lugar seguro para chamar de lar.<br>#SétimoHokage #Legado #VontadeDoFogo"
  },
  {
    characterName: "Sasuke Uchiha",
    postImage: "https://i.ytimg.com/vi/-PVBJ4mf-xo/maxresdefault.jpg",
    postCaption: "As ameaças à paz ainda existem. E eu também.<br>#Susanoo #Vigilância #NãoSubestime"
  },
  {
    characterName: "Sakura Haruno",
    postImage: "https://64.media.tumblr.com/0137011a53208d98458a9858ba0b82eb/b43b677c1d49ef38-fd/s500x750/0b59668b23f83c67e12c886c755012cd998a8121.gifv",
    postCaption: "Força não é só sobre poder, mas também sobre curar. Treinamento com a mestra Tsunade finalizado. 💪🌸<br>#ForçaDeCemHomens #NinjaMédica #FlorDeCerejeira"
  },
  {
    characterName: "Kakashi Hatake",
    postImage: "https://criticalhits.com.br/wp-content/uploads/2021/12/kakshi-livro-naruto-1200x911-1-910x691.jpg",
    postCaption: "Me perdi no caminho da vida... e acabei encontrando um bom livro.<br>#JardimDosAmassos #MePerdiNoCaminhoDaVida #NinjaCopiador #SextoHokage"
  },
  {
    characterName: "Kiba Inuzuka",
    postImage: "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img61a2bcfcf19ef7.88807397.jpg?lastEdited=1638055171&w=600&h=600&f=webp",
    postCaption: "Heh, achei essa aqui no fundo do baú! Desde essa época a gente já sabia que seria a dupla mais irada de Konoha! Certo, Akamaru? AUUUU! 🐾😎<br>#TBT #MelhoresAmigos #ClãInuzuka"
  },
  {
    characterName: "Shino Aburame",
    postImage: "https://i.pinimg.com/736x/f2/d9/e0/f2d9e02269439f83898b94e36158109d.jpg",
    postCaption: "Meus companheiros kikaichū e eu compartilhamos um vínculo simbiótico. Eles são minha família e meu ninjutsu. Portanto, a localização exata deles é... confidencial. Por favor, não perguntem onde eu os guardo. A lógica por trás disso é clara.<br>#ClãAburame #Kikaichu #NinjutsuSecreto"
  },
  {
    characterName: "Hinata Hyūga",
    postImage: "https://pa1.aminoapps.com/6480/a081fdaf9abf38c8e3c3a8c10afc10d6ab16ca48_hq.gif",
    postCaption: "O Byakugan... despertou na Himawari! Estou tão orgulhosa do poder que ela carrega. Ela tem o sangue do clã Hyuga correndo forte! (Naruto-kun está se recuperando... eu acho 😅).<br>#FamíliaUzumaki #HerançaHyuga #PequenaGirassol"
  },
  {
    characterName: "Kurenai Yūhi",
    postImage: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/Asuma-Sarutobi-And-Kurenai-Yuhi.jpg",
    postCaption: "Um fim de tarde tranquilo em Konoha. A melhor companhia para colocar os pensamentos em ordem depois de um dia de missões. ❤️🍃<br>#Paz #Companheirismo #Konoha"
  },
  {
    characterName: "Rock Lee",
    postImage: "https://i.pinimg.com/originals/98/ec/be/98ecbe2b65844da42558613e91d902e5.gif",
    postCaption: "A sua defesa pode ser de areia, mas a minha determinação e o Poder da Juventude são inabaláveis! Cada golpe é a prova de que o trabalho duro e a paixão podem superar qualquer talento natural! Guy-sensei, esta é a nossa filosofia em ação! 💪💚🔥<br>#PoderDaJuventude #TrabalhoDuro #SuperandoLimites #Konoha #ExameChunin"
  },
  {
    characterName: "Neji Hyūga",
    postImage: "https://i.pinimg.com/736x/ed/13/91/ed13918a3e20ee41529986e16e3fba00.jpg",
    postCaption: "Perdoe a minha arrogância e as palavras duras daquele dia, Hinata-sama. Eu estava cego pelo meu próprio destino, mas você... você nunca desistiu. Foi a primeira a me mostrar o que é a verdadeira força.<br>#Hyuga #Superação #Laços"
  },
  {
    characterName: "Tenten",
    postImage: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/12/TentenVTemari.jpg",
    postCaption: "Nota para mim mesma: da próxima vez que for lutar contra uma kunoichi da Areia, levar um leque um pouco maior. E talvez um furacão reserva. Alguém tem um? 😅<br>#DiaRuim #Estratégia #Konoha"
  },
  {
    characterName: "Might Guy",
    postImage: "https://criticalhits.com.br/wp-content/uploads/2019/09/guy-cadeira-de-rodas.jpg",
    postCaption: "O corpo pode ter seus limites, mas a CHAMA DA JUVENTUDE queima mais forte do que nunca! 🔥 E você aí, meu eterno rival Kakashi! Acha que uma cadeira de rodas vai me impedir de te desafiar?! Nossa próxima prova de juventude será uma corrida épica: quem dá mais voltas em Konoha nesta belezinha?! O perdedor paga o lámen! Prepare-se para sentir o poder da minha... mobilidade aprimorada! ISSO! 💪😉🏁<br>#PoderDaJuventude #RivalEterno #NovoDesafio #ChamaDaJuventude #Konoha"
  },
  {
    characterName: "Shikamaru Nara",
    postImage: "https://pa1.aminoapps.com/7268/d23455079083d70cbc68b95cfbb3acd9fe5e4d1ar1-480-226_00.gif",
    postCaption: 'Ei, Naruto... da próxima vez que você tiver uma ideia "brilhante" que gera três pilhas de relatórios, lembre-se de quem vai ter que ler tudo. Que problemático... 🤦‍♂️<br>#CulpaDoHokage #TrabalhoEmEquipe #Amizade'
  },
  {
    characterName: "Chōji Akimichi",
    postImage: "https://i.redd.it/1avr1dtajv5e1.jpeg",
    postCaption: "Achei essa foto antiga! Heh... acho que eu já estava pensando em qual churrascaria a gente ia depois do treino. O último pedaço de carne é sempre o mais importante! Certo, Shikamaru?<br>#TBT #ComidaÉVida #Time10"
  },
  {
    characterName: "Ino Yamanaka",
    postImage: "https://criticalhits.com.br/wp-content/uploads/2019/01/Ino-Yamanaka-At-Her-Family-Flower-Shop-In-Naruto.jpg",
    postCaption: "Heh, achei essa relíquia! Algumas coisas nunca mudam... a flor mais bonita da loja sempre fui eu! Brincadeirinha... ou não!<br>#TBT #FloresYamanaka #BelezaNatural"
  },
  {
    characterName: "Asuma Sarutobi",
    postImage: "https://wallpaper.forfun.com/fetch/d9/d9c74e1f09e2b9a97c8bae0b98082fcb.jpeg",
    postCaption: "Às vezes, é preciso apagar o cigarro e resolver as coisas. Ino, Shika, Chōji, fiquem atrás de mim. O trabalho do sensei é abrir o caminho para vocês.<br>#Time10 #Sensei #Dever"
  }

];


async function fetchAllCharacters() {
  console.log("Iniciando busca dos dados dos personagens...");
  try {
    const firstPageResponse = await fetch(API_URL);
    const firstPageData = await firstPageResponse.json();
    const totalPages = Math.ceil(firstPageData.total / firstPageData.pageSize);

    const pagePromises = [];
    for (let i = 2; i <= totalPages; i++) {
      pagePromises.push(fetch(`${API_URL}?page=${i}`).then((res) => res.json()));
    }
    const allPagesResults = await Promise.all(pagePromises);

    let allCharacters = [...firstPageData.characters];
    allPagesResults.forEach((pageData) => {
      allCharacters = allCharacters.concat(pageData.characters);
    });

    console.log(`Busca finalizada! ${allCharacters.length} personagens carregados.`);
    return allCharacters;
  } catch (error) {
    console.error("Erro ao buscar todos os personagens:", error);
    return [];
  }
}

// ALTERADO: A função agora recebe a imagem e a legenda específicas do post
function createPost(character, postImage, postCaption) {
  const post = document.createElement("div");
  post.className = "post";

  // --- LÓGICA DE CURTIDAS ---
  const initialLikes = Math.floor(Math.random() * 1500) + 200;

  function formatLikes(num) {
    if (num >= 1000) {
      // Usamos toLocaleString para formatar com vírgula local (ex: 1,2k)
      return (num / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + 'k';
    }
    return num.toString();
  }
  const likesDisplay = formatLikes(initialLikes);
  // --- FIM DA LÓGICA DE CURTIDAS ---

  post.innerHTML = `
        <div class="post-header">
            <img src="${character.images[0] || "https://placehold.co/40"}" alt="${character.name}" class="profile-pic">
            <div class="user-info">
                <h3 class="username" data-character="${encodeURIComponent(character.name)}">${character.name}</h3>
                <span class="location">${character.personal?.affiliation?.[0] || "Vila Oculta"}</span>
            </div>
        </div>
        <div class="post-image-container">
            <img src="${postImage}" alt="Post de ${character.name}" class="post-image" data-character="${encodeURIComponent(character.name)}">
        </div>
        <div class="post-actions">
            <button class="like-btn"><i class="bi bi-hearts"></i></button>
            <button class="comment-btn"><i class="bi bi-chat-heart-fill"></i></button>
            <a href="mensagem.html?chat_com=${encodeURIComponent(character.name)}"> 
                <button><i class="bi bi-send-fill"></i></button>
            </a>
        </div>
        <div class="post-likes">
            <span class="like-count" data-likes="${initialLikes}" data-initial="${initialLikes}">${likesDisplay}</span> curtidas
        </div>
        <div class="post-caption">
            <strong>${character.name}</strong> ${postCaption}
        </div>
    `;

  return post;
}
function handleLikeClick(event) {
  const likeBtn = event.currentTarget; // O botão que foi clicado
  const post = likeBtn.closest('.post');
  const likeCountSpan = post.querySelector('.like-count');

  const isLiked = likeBtn.classList.toggle('liked');

  if (!likeCountSpan) return;

  let currentLikes = parseInt(likeCountSpan.dataset.likes, 10);
  const initialLikes = parseInt(likeCountSpan.dataset.initial, 10);

  if (initialLikes > 998) {
    return;
  }

  if (isLiked) {
    currentLikes++;
  } else {
    currentLikes--;
  }

  likeCountSpan.dataset.likes = currentLikes;
  likeCountSpan.textContent = currentLikes;
}

// ==================================================================
// FUNÇÃO DE ADICIONAR LISTENERS (AGORA CENTRALIZA TUDO)
// ==================================================================
function addClickListeners() {
  document.querySelectorAll(".username, .post-image").forEach((element) => {
    element.addEventListener("click", (e) => {
      const characterName = e.currentTarget.getAttribute("data-character");
      window.location.href = `personagem.html?nome=${characterName}`;
    });
  });

  document.querySelectorAll(".comment-btn").forEach((button) => {
    button.addEventListener("click", abrirModalComentarios);
  });

  // NOVO: Adiciona o listener para TODOS os botões de like
  document.querySelectorAll(".like-btn").forEach((button) => {
    button.addEventListener("click", handleLikeClick);
  });
}

async function loadFeed() {
  // ... (esta função continua a mesma, sem alterações) ...
  const feedContainer = document.getElementById("feed-container");
  feedContainer.innerHTML = "<p>Carregando feed com os melhores ninjas...</p>";

  const allApiCharacters = await fetchAllCharacters();
  if (allApiCharacters.length === 0) {
    feedContainer.innerHTML = "<p>Erro ao carregar o feed. Tente novamente mais tarde.</p>";
    return;
  }

  const characterDataMap = new Map(allApiCharacters.map(char => [char.name, char]));

  const postsCompletos = postsPredefinidos.map(postInfo => {
    const apiData = characterDataMap.get(postInfo.characterName);
    if (apiData) {
      return {
        character: apiData,
        postImage: postInfo.postImage,
        postCaption: postInfo.postCaption
      };
    }
    return null;
  }).filter(post => post !== null);

  feedContainer.innerHTML = "";

  const postsEmbaralhados = postsCompletos.sort(() => 0.5 - Math.random());

  postsEmbaralhados.forEach(postData => {
    const postElement = createPost(postData.character, postData.postImage, postData.postCaption);
    feedContainer.appendChild(postElement);
  });

  addClickListeners();

  // --- LÓGICA DE LOGOUT ---
    const btnLogout = document.getElementById("btn-logout");
    if (btnLogout) {
        btnLogout.addEventListener("click", () => {
            // Opcional: Limpa os dados do usuário do localStorage para um logout "completo".
            localStorage.removeItem("userData");

            // Redireciona o usuário de volta para a página de login.
            window.location.href = "index.html";
        });
    }

}

document.addEventListener("DOMContentLoaded", loadFeed);