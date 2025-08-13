document.addEventListener("DOMContentLoaded", () => {
  // --- DADOS SIMULADOS ---
  // Adicione ou remova as URLs de imagens aqui para popular os grids

  const minhasPostagensUrls = [
    "https://i.pinimg.com/564x/7a/ef/7a/7aef7af921b63719294bec6670dae200.jpg",
    "https://i.pinimg.com/474x/3d/b6/d9/3db6d9a0af4a2bbbe37f79418ae49b3d.jpg",
    "https://preview.redd.it/its-so-cute-that-all-jiraiyas-students-adopted-the-smile-of-v0-xwbe2o195lge1.jpg?width=640&crop=smart&auto=webp&s=007da27cd5d73f85391579c931162811615a4081",
    "https://i.redd.it/ueky0yi9dfrb1.jpg",
    "https://i.pinimg.com/736x/46/e1/78/46e178f77a68e203fcaab5276218d55b.jpg",
    "https://wallpapers.com/images/hd/naruto-jiraiya-and-friends-0dwahndqueayxifg.jpg",
    "https://wallpapersok.com/images/thumbnail/legendary-sannin-jiraiya-i4b91z04xncsmcfx.webp",
    "https://i.pinimg.com/736x/4c/ac/58/4cac588262dd364a0d0f68ee647f79e0.jpg",
    "https://i.pinimg.com/736x/a9/bc/a7/a9bca7f378021bd5658a9022ebaa6a9c.jpg",
    "https://preview.redd.it/can-we-all-agree-that-jiraiya-is-the-coolest-looking-kid-in-v0-ebn2tdznx1pd1.jpeg?width=640&crop=smart&auto=webp&s=2022ab894288956577c164610bbd6d9295473cf7",
    "https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/import/images/naruto02/301%EF%BD%9E400/347/C020.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxYZzMkqP8b3uWMuf1VKTPEvzmjLOfoNbkQ&s",
    "https://i1.sndcdn.com/artworks-000485336622-p6oszq-t500x500.jpg",
    "https://i1.sndcdn.com/artworks-Pl7aS4Q6eLKhD8R0-U2x0QQ-t500x500.jpg",
    "https://i.ytimg.com/vi/wue9rI8Xez0/maxresdefault.jpg"

  ];

  const postagensCurtidasUrls = [
    "https://preview.redd.it/im-the-only-one-who-dislikes-how-tsunade-basically-has-zero-v0-0u7rxqzx9v1f1.jpeg?width=640&crop=smart&auto=webp&s=ba109dea3fed37569f349e6ed0790d092723fa6d",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a05d0b14-98d7-40d8-b9dd-6b0149bdeab0/ddeh27p-2db897e5-21b7-48fb-8946-4d4d81ae32ba.jpg/v1/fill/w_640,h_1136,q_75,strp/shizune_bikini___wallpaper_for_phone_by_dp1757_ddeh27p-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzNiIsInBhdGgiOiJcL2ZcL2EwNWQwYjE0LTk4ZDctNDBkOC1iOWRkLTZiMDE0OWJkZWFiMFwvZGRlaDI3cC0yZGI4OTdlNS0yMWI3LTQ4ZmItODk0Ni00ZDRkODFhZTMyYmEuanBnIiwid2lkdGgiOiI8PTY0MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.OUg1lexAK4Fk4A9hCSuuj6DrIqZxnhE8QS8J7ibwaMY",
    "https://i.pinimg.com/1200x/62/22/ab/6222abc625204cf319cfc4a49d8c2ef7.jpg",
    "https://i.redd.it/kvk165qsjbu01.jpg",
    "https://i.pinimg.com/736x/27/63/04/2763043b0bf0e3a84e64be2e58579622.jpg",
    "https://pbs.twimg.com/profile_images/1358281814696206336/R9gL3Gx5_400x400.jpg",
    "https://criticalhits.com.br/wp-content/uploads/2024/03/jutsu-sexy-910x573.jpg",
    "https://down-br.img.susercontent.com/file/2dfde20c3099ec094fd5ebf6ea9c3158"
    
  ];

  // --- SELEÇÃO DOS ELEMENTOS ---
  const postsCountElement = document.getElementById("posts-count");
  const gridPostagens = document.getElementById("grid-postagens");
  const gridCurtidas = document.getElementById("grid-curtidas");
  const btnTabPosts = document.getElementById("btn-tab-posts");
  const btnTabCurtidas = document.getElementById("btn-tab-curtidas");

  // --- FUNÇÕES ---

  /**
   * Limpa um container e o preenche com imagens a partir de uma lista de URLs.
   * @param {HTMLElement} container - O elemento do grid a ser preenchido.
   * @param {string[]} urls - A lista de URLs de imagem.
   */
  function carregarGrid(container, urls) {
    container.innerHTML = ""; // Limpa o grid antes de adicionar novos itens
    urls.forEach(url => {
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";
      gridItem.innerHTML = `<img src="${url}" alt="Postagem do grid">`;
      container.appendChild(gridItem);
    });
  }

  // --- LÓGICA DE INICIALIZAÇÃO E EVENTOS ---

  // 1. Atualiza a contagem de posts
  postsCountElement.textContent = minhasPostagensUrls.length;

  // 2. Carrega o grid de postagens do usuário por padrão
  carregarGrid(gridPostagens, minhasPostagensUrls);

  // 3. Adiciona evento para a aba de POSTAGENS
  btnTabPosts.addEventListener("click", () => {
    // Ativa a aba
    btnTabCurtidas.classList.remove("active-tab");
    btnTabPosts.classList.add("active-tab");

    // Mostra o grid correspondente
    gridCurtidas.style.display = "none";
    gridPostagens.style.display = "grid";

    // Carrega as imagens (opcional, mas bom se os dados pudessem mudar)
    carregarGrid(gridPostagens, minhasPostagensUrls);
  });

  // 4. Adiciona evento para a aba de CURTIDAS
  btnTabCurtidas.addEventListener("click", () => {
    // Ativa a aba
    btnTabPosts.classList.remove("active-tab");
    btnTabCurtidas.classList.add("active-tab");

    // Mostra o grid correspondente
    gridPostagens.style.display = "none";
    gridCurtidas.style.display = "grid";

    // Carrega as imagens
    carregarGrid(gridCurtidas, postagensCurtidasUrls);
  });
});