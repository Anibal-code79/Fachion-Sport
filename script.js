
window.addEventListener("error", (e) => {
  console.log("ERRO JS:", e.message, "em", e.filename, "linha", e.lineno);
});
const CONFIG = {
  // "const" = constante — o valor não pode ser reatribuído
  // "CONFIG" é um objeto (conjunto de pares chave: valor)

  waNumber: "258857988000",
  // Número do WhatsApp sem + e sem espaços
  // Formato Moçambique: 258 (código do país) + número

  welcomeText: "Olá! Seja bem-vindo(a) à Fashion Sport. Como podemos ajudar?",
  // Mensagem pré-definida enviada ao abrir o WhatsApp

  instagramUrl: "https://instagram.com/fashionsport",
  // URL do perfil de Instagram

  facebookUrl: "https://facebook.com/fashionsport",
  // URL da página de Facebook

  email: "contato@fashionsport.com",
  // Endereço de email de contacto

  currencySuffix: " MZN",
  // Sufixo da moeda adicionado após os preços (Metical Moçambicano)
};

const categories = {
  // Objeto com 4 categorias numeradas de 1 a 4

  1: {
    // Categoria 1: Tênis e Chuteiras
    name: "Tênis / Chuteiras",
    // Nome exibido no título do modal

    desc: "Modelos para futebol, futsal e treino. Escolha o estilo e o tamanho ideal.",
    // Descrição exibida abaixo do título

    items: [101, 102, 103, 104, 105, 106],
    // Array com os IDs dos produtos desta categoria
    // Estes IDs correspondem às chaves do objeto "products" abaixo
  },

  2: {
    name: "Camisetas de Clubes",
    desc: "Camisetas para jogo e lifestyle. Informe o time, tamanho e modelo.",
    items: [201, 202, 203, 204, 205, 206, 207, 208, 209],
    // 9 produtos nesta categoria
  },

  3: {
    name: "Luvas Esportivas",
    desc: "Mais proteção e aderência. Opções para goleiro e treino.",
    items: [301, 302, 303, 304, 305, 306],
  },

  4: {
    name: "Acessórios",
    desc: "Complete o seu kit: bolsas, meias, garrafas e outros itens.",
    items: [401, 402, 403, 404, 405, 406],
  },
};


/* =========================
   3) PRODUTOS
   Base de dados de todos os produtos.
   Cada produto tem: nome, preço, descrição e array de imagens.
========================= */
const products = {
  // Objeto com todos os produtos indexados por ID numérico

  // ===== CATEGORIA 1: TÊNIS / CHUTEIRAS =====

  101: {
    // ID 101 — pertence à categoria 1 (começa com 1)
    name: "Chuteiras F50",
    price: 2800.00,     // preço como número decimal
    desc: "Chuteira para campo com boa tração, conforto e estabilidade.",
    images: [
      "tenis6.jpg",   // primeira imagem (exibida por padrão)
      "tenis6.jpg",   // segunda imagem (miniatura)
    ],
    featured: true
  },

  102: {
    name: "Chuteira Futsal Grip",
    price: 1400.99,
    desc: "Ideal para futsal, sola aderente e ajuste confortável.",
    images: ["tenis4.jpg", "tenis4.jpg"],
  },

  103: {
    name: "Tênis Campo Pro",
    price: 1730.00,
    desc: "Tênis leve para treinos e corridas curtas. Amortecimento confortável.",
    images: ["tenis5.jpg", "tenis5.jpg"],
  },

  104: {
    name: "Tênis Corrida Urban",
    price: 1900.00,
    desc: "Bom para dia a dia e corrida leve, design moderno.",
    images: ["tenis1.jpg", "tenis1.jpg"],
  },

  105: {
    name: "Tênis Dario Viseu",
    price: 2300.00,
    desc: "Bom para dia a dia e corrida leve, design moderno.",
    images: ["tenis.3.jpg", "tenis.3.jpg"],
  },

  106: {
    name: "Tênis Training Flex",
    price: 2455.00,
    desc: "Bom para dia a dia e corrida leve, design moderno.",
    images: ["tenis2.jpg", "tenis2.jpg"],
  },

  // ===== CATEGORIA 2: CAMISETAS =====

  201: {
    name: "Camiseta (Real Betis)",
    price: 1250.00,
    desc: "Modelo clássico para torcer e sair. Confortável e estilosa.",
    images: ["betis.jpg", "betis.jpg"],
  },

  202: {
    name: "Camiseta (Real Madrid)",
    price: 790.00,
    desc: "Modelo alternativo, tecido confortável e visual moderno.",
    images: ["cluberel.jpg", "cluberel.jpg"],
  },

  203: {
    name: "Camiseta (Bayerni de Munich)",
    price: 1150.00,
    desc: "Respirável e leve para treino e uso diário.",
    images: ["bayen.jpg", "bayen.jpg"],
  },

  204: {
    name: "Camiseta(Barcelona)",
    price: 1090.00,
    desc: "Estilo sporty para cada dia, confortável e versátil. Com tecido original de qualidade.",
    images: ["clubebar.jpg", "clubebar.jpg"],
    featured: true
  },

  205: {
    name: "Camiseta (AL Nasser)",
    price: 1290.00,
    desc: "Estilo sporty para o dia a dia, confortável e versátil.",
    images: ["alnasser.jpg", "alnasser.jpg"],
  },

  206: {
    name: "Camiseta (SL.Argentina)",
    price: 1400.00,
    desc: "Estilo sporty para o dia a dia, confortável e versátil.",
    images: ["argentina.jpg", "argentina.jpg"],
  },

  207: {
    name: "Camiseta (AT.Madrid)",
    price: 1350.00,
    desc: "Estilo sporty para o dia a dia, confortável e versátil.",
    images: ["Atletico.jpg", "Atletico.jpg"],
  },

  208: {
    name: "Camiseta Clube (PSG)",
    price: 1200.00,
    desc: "Estilo sporty para o dia a dia, confortável e versátil.",
    images: ["PSG.jpg", "PSG.jpg"],
  },

  209: {
    name: "Camiseta (AC Millan)",
    price: 1090.00,
    desc: "Estilo sporty para o dia a dia, confortável e versátil.",
    images: ["Milan.jpg", "Milan.jpg"],
  },

  // ===== CATEGORIA 3: LUVAS =====

  301: {
    name: "Luvas de Goleiro Classic",
    price: 799.00,
    desc: "Aderência e conforto para jogos e treinos.",
    images: ["luvas7.jpg", "luvas7.jpg"],
  },

  302: {
    name: "Luvas Grip Pro",
    price: 690.00,
    desc: "Grip melhorado e ajuste firme para maior segurança do jogador.",
    images: ["luvas6.jpg", "luvas6.jpg"],
    featured: true
  },

  303: {
    name: "Luvas Treino",
    price: 480.00,
    desc: "Proteção para treinos intensos e conforto no uso.",
    images: ["luvas 4.jpg", "luvas 4.jpg"],
  },

  304: {
    name: "Luvas Leves",
    price: 340.00,
    desc: "Modelo leve para uso casual/treino leve.",
    images: ["luvas5.jpg", "luvas5.jpg"],
  },

  305: {
    // ATENÇÃO: este ID 305 substitui o anterior — em JavaScript,
    // se duas chaves são iguais num objeto, a segunda sobrescreve a primeira
    name: "Luvas Compridas MOC",
    price: 360.00,
    desc: "Modelo leve para uso casual/treino leve.",
    images: ["luvas2.jpg", "luvas2.jpg"],
  },

  306: {
    name: "Luvas Simples Casuais",
    price: 300.00,
    desc: "Modelo leve para uso casual/treino leve.",
    images: ["luvas3.jpg", "luvas3.jpg"],
  },

  // ===== CATEGORIA 4: ACESSÓRIOS =====

  401: {
    name: "Bola de Campo Futbooll",
    price: 500.00,
    desc: "Espaço ideal para treino e dia a dia. Compartimentos práticos.",
    images: ["fotsal.jpg", "bola.jpg"],
    // aqui as 2 imagens são DIFERENTES — a miniatura mostra outra perspectiva
  },

  402: {
    name: "Mochila Esportiva",
    price: 400.00,
    desc: "Espaço ideal para treino e dia a dia. Compartimentos práticos.",
    images: ["bolsa2.jpg", "bolsa2.jpg"],
    featured: true
  },

  403: {
    name: "Protecao dos Joelhos",
    price: 200.00,
    desc: "Hidratação sempre à mão. Boa para treino e trabalho.",
    images: ["acessorio2.jpg", "joelhos.jpg"],
  },

  404: {
    name: "Fitas Esportivas",
    price: 60.00,
    desc: "Conforto e respirabilidade para o dia a dia e treino.",
    images: ["fitas.jpg", "fitas.jpg"],
  },

  405: {
    name: "Bolsa de Treino",
    price: 270.00,
    desc: "Bolsa resistente com espaço para roupa e acessórios.",
    images: ["bolsa.jpg", "bolsa.jpg"],
  },

  406: {
    name: "Apitos de Campo",
    price: 160.00,
    desc: "Bolsa resistente com espaço para roupa e acessórios.",
    images: ["apito.jpg", "apito.jpg"],
  },
};
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function money(value) {
  return value.toFixed(2).replace(".", ",") + CONFIG.currencySuffix;
}

function waLink(text) {
  return `https://wa.me/${CONFIG.waNumber}?text=${encodeURIComponent(text)}`;
}

function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add("active");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(modalEl) {

  if (!modalEl) return;
  modalEl.classList.remove("active");
  modalEl.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function closeAllModals() {
  closeModal($("#product-modal"));    
  closeModal($("#category-modal"));    
  closeModal($("#cart-modal"));       
  closeModal($("#search-modal"));
}

function setupContactLinks() {

  const wa   = $("#wa-contact-link");  
  const ig   = $("#ig-contact-link");   
  const fb   = $("#fb-contact-link");  
  const mail = $("#mail-contact-link");  

  if (wa) wa.href = waLink(CONFIG.welcomeText);
  if (ig) ig.href = CONFIG.instagramUrl;

  if (fb) fb.href = CONFIG.facebookUrl;

  if (mail) {
    mail.href =
      `mailto:${CONFIG.email}` +
      `?subject=${encodeURIComponent("Contato - Fashion Sport")}` +
      `&body=${encodeURIComponent("Olá Fashion Sport! Preciso de ajuda com...")}`;
  }

  // Botão "Fale conosco" no Hero
  const talkBtn = $("#talkBtn");
  if (talkBtn) {
    talkBtn.addEventListener("click", () => {
      // addEventListener("click", ...) registra uma função que corre ao clicar

      window.open(waLink(CONFIG.welcomeText), "_blank", "noopener");
    });
  }
}


let cart = JSON.parse(localStorage.getItem("cart")) || [];
function saveCart() {
  // Guarda o carrinho no localStorage para persistir entre sessões

  localStorage.setItem("cart", JSON.stringify(cart));
}

function cartCount() {
  // Devolve o número TOTAL de itens no carrinho (soma das quantidades)

  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal() {
  // Devolve o valor total do carrinho (preço × quantidade de cada item)

  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  // Multiplicamos preço × quantidade e somamos tudo
}

function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function categoryOfProduct(productId) {
  const catId = Object.keys(categories).find((id) =>
    categories[id].items.includes(Number(productId))
  );
  return catId ? categories[catId].name : "";
}

/* ── 3) DESENHAR OS RESULTADOS ─────────────────────── */
function renderSearchResults(query) {
  const box = document.getElementById("searchResults");
  if (!box) return;

  const q = normalizeText(query.trim());

  // Sem texto: mostra só uma dica (os chips ficam visíveis em cima)
  if (q.length < 2) {
    box.innerHTML = `<div class="search-empty">Escreve pelo menos 2 letras para pesquisar.</div>`;
    return;
  }

  // Object.entries dá pares [id, produto]; filter fica com os que batem.
  // Pesquisamos no nome, na descrição e no nome da categoria.
  const results = Object.entries(products)
    .filter(([id, p]) => {
      const haystack = normalizeText(`${p.name} ${p.desc} ${categoryOfProduct(id)}`);
      return haystack.includes(q);
    })
    .slice(0, 8); // máximo 8 resultados, para a lista não ficar enorme

  if (results.length === 0) {
    box.innerHTML = `<div class="search-empty">Nenhum produto encontrado para "<strong>${query.trim()}</strong>".</div>`;
    return;
  }

  // data-search-product guarda o id para sabermos qual abrir ao clicar
  box.innerHTML =
    `<div class="search-label">${results.length} resultado(s)</div>` +
    results
      .map(([id, p]) => `
        <button class="search-item" type="button" data-search-product="${id}">
          <img src="${p.images[0]}" alt="${p.name}">
          <div class="search-item-info">
            <div class="search-item-name">${p.name}</div>
            <div class="search-item-cat">${categoryOfProduct(id)}</div>
          </div>
          <div class="search-item-price">${money(p.price)}</div>
        </button>`)
      .join("");
}

function openSearch() {
  openModal(document.getElementById("search-modal"));
  const input = document.getElementById("searchInput");
  input.value = "";
  renderSearchResults("");
  // Pequeno atraso: espera o modal ficar visível antes de focar
  setTimeout(() => input.focus(), 60);
}

function closeSearch() {
  closeModal(document.getElementById("search-modal"));
}

/* ── 5) LIGAR TUDO ─────────────────────────────────── */
function setupSearch() {
  const modal    = document.getElementById("search-modal");
  const toggle   = document.getElementById("searchToggleBtn");
  const input    = document.getElementById("searchInput");
  const closeBtn = document.getElementById("closeSearchBtn");
  const results  = document.getElementById("searchResults");
  const chips    = document.getElementById("searchChips");

  // Se algum elemento não existir, avisa na consola (F12) em vez de falhar calado
  if (!modal || !toggle || !input || !results || !chips) {
    console.warn("Pesquisa: falta algum elemento no HTML (search-modal, searchToggleBtn, searchInput...).");
    return;
  }

  // Chips: um por categoria, gerados a partir do objeto "categories"
  chips.innerHTML = Object.entries(categories)
    .map(([id, c]) => `<button class="search-chip" type="button" data-search-cat="${id}">${c.name}</button>`)
    .join("");

  // Clicar na lupa abre o modal
  toggle.addEventListener("click", openSearch);

  // Botão Esc e clique no fundo escuro fecham
  closeBtn.addEventListener("click", closeSearch);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSearch(); // só se clicou no fundo, não no painel
  });

  // Cada letra digitada atualiza os resultados em tempo real
  input.addEventListener("input", () => renderSearchResults(input.value));

  // Enter abre o primeiro resultado
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const first = results.querySelector("[data-search-product]");
      if (first) first.click();
    }
  });

  // Clique num resultado: fecha a pesquisa e abre o produto
  results.addEventListener("click", (e) => {
    const item = e.target.closest("[data-search-product]");
    if (!item) return;
    closeSearch();
    renderProductModal(Number(item.dataset.searchProduct));
  });

  // Clique num chip: fecha a pesquisa e abre a categoria
  chips.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-search-cat]");
    if (!chip) return;
    closeSearch();
    openCategoryModal(Number(chip.dataset.searchCat));
  });

  // Teclado: Esc fecha; "/" abre (como no GitHub), exceto se já estiver a escrever
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) closeSearch();

    const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName);
    if (e.key === "/" && !typing) {
      e.preventDefault();
      openSearch();
    }
  });
}

/* ── 2) HEADER MUDA AO FAZER SCROLL ─────────────── */
function setupHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;

  // IntersectionObserver é mais eficiente que ouvir "scroll" (não bloqueia o main thread)
  // Observa um ponto invisível no topo da página
  const sentinel = document.createElement("div");
  // createElement cria um elemento HTML dinamicamente (sem estar no HTML)
  sentinel.style.cssText = "position:absolute;top:0;height:1px;width:1px;pointer-events:none;";
  // cssText define múltiplos estilos de uma vez como string
  document.body.prepend(sentinel);
  // .prepend() insere como PRIMEIRO filho do body

  const observer = new IntersectionObserver(
    ([entry]) => {
      // Desestruturação: [entry] pega o primeiro (e único) item do array entries
      header.classList.toggle("scrolled", !entry.isIntersecting);
      // Se o sentinel NÃO está visível (saiu do viewport), adiciona .scrolled
      // Se está visível (estamos no topo), remove .scrolled
    },
    { threshold: 0 }
    // threshold: 0 = dispara assim que 1px sai/entra do viewport
  );

  observer.observe(sentinel);
}
function setupMobileMenu() {
  const btn  = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileMenu");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = btn.classList.toggle("open");
    // Alterna classe "open" no botão (para a animação X)

    menu.classList.toggle("open", isOpen);
    // Adiciona/remove "open" no menu drawer

    menu.setAttribute("aria-hidden", String(!isOpen));
  });

  // Fechar menu ao clicar fora
  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      btn.classList.remove("open");
      menu.classList.remove("open");
      menu.setAttribute("aria-hidden", "true");
    }
  });
}

function closeMobileMenu() {
  const btn  = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileMenu");
  if (btn)  btn.classList.remove("open");
  if (menu) { menu.classList.remove("open"); menu.setAttribute("aria-hidden", "true"); }
}

function updateCartCountUI() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;

  const count = cartCount(); // função já existe no script.js original

  badge.textContent = count > 99 ? "99+" : count;
  if (count > 0) {
    badge.classList.add("visible");

    badge.classList.remove("pop");    
    void badge.offsetWidth;           
    badge.classList.add("pop");        
  } else {
    badge.classList.remove("visible", "pop");
    // Esconde o badge quando carrinho está vazio
  }
}

function addToCart(productId, qty) {

  const p = products[productId];
  if (!p) return;
  const existing = cart.find((i) => i.id === productId);

  if (existing) existing.qty += qty;
  else cart.push({ id: productId, name: p.name, price: p.price, qty });
  saveCart();
  updateCartCountUI();
}

function removeFromCart(productId) {
  cart = cart.filter((i) => i.id !== productId);
 

  saveCart();
  updateCartCountUI();
  renderCart();
}

function updateCartQty(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  // Encontra o item pelo ID

  if (!item) return;
  // Sai se não encontrar

  const nextQty = item.qty + delta;
  // Calcula a nova quantidade

  if (nextQty <= 0) {
    removeFromCart(productId);
    // Se a nova quantidade for 0 ou menos, remove o produto
    return;
  }

  item.qty = nextQty;
  // Atualiza a quantidade

  saveCart();
  updateCartCountUI();
  renderCart();
}

function clearCart() {
  // Esvazia completamente o carrinho

  cart = [];
  // Reinicia o array para vazio

  saveCart();
  updateCartCountUI();
  renderCart();
}

let currentQty = 1;
// Variável global que guarda a quantidade selecionada no modal do produto

function renderProductModal(productId) {
  // Cria e exibe o conteúdo do modal de detalhes de um produto

  const p = products[productId];
  // Busca os dados do produto

  if (!p) return;
  // Sai se o produto não existir

  currentQty = 1;
  // Reseta a quantidade para 1 sempre que um novo produto é aberto

  // Gera o HTML das miniaturas dinamicamente
  const thumbsHTML = p.images
    .map((img, idx) => {
      // .map() percorre o array e transforma cada item em HTML
      // img = caminho da imagem, idx = índice (0, 1, 2...)

      const activeClass = idx === 0 ? "active" : "";
      // Operador ternário: se é a primeira imagem, adiciona classe "active"
      // (a primeira miniatura começa selecionada)

      return `<img class="thumb ${activeClass}" data-thumb-index="${idx}" src="${img}" alt="${p.name} imagem ${idx + 1}">`;
      // Template literal que cria o HTML de cada miniatura
      // data-thumb-index armazena o índice para saber qual imagem mostrar ao clicar
    })
    .join("");
    // .join("") une todos os strings do array num único string (sem separador)

  // Insere o HTML completo do modal de produto
  $("#product-detail-content").innerHTML = `
    <div class="gallery">
      <div class="gallery-main">
        <img id="main-image" src="${p.images[0]}" alt="${p.name}">
      </div>
      <div class="gallery-thumbs">
        ${thumbsHTML}
      </div>
    </div>

    <div class="detail-content">
      <h2 id="product-title">${p.name}</h2>
      <div class="detail-price">${money(p.price)}</div>
      <p class="detail-desc">${p.desc}</p>

      <div class="add-to-cart">
        <div class="qty-select">
          <button class="qty-btn" id="qtyMinus" type="button">-</button>
          <span id="qty">1</span>
          <button class="qty-btn" id="qtyPlus" type="button">+</button>
        </div>
        <button class="btn btn-primary" id="addToCartBtn" type="button">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  `;
  // .innerHTML permite escrever HTML diretamente dentro do elemento
  // Usamos template literals (``) para misturar texto e variáveis (${})

  // Eventos: trocar imagem ao clicar numa miniatura
  $$("#product-detail-content .thumb").forEach((thumb) => {
    // Seleciona todas as miniaturas dentro do modal
    // .forEach() percorre cada uma e aplica a função

    thumb.addEventListener("click", () => {
      // Ao clicar numa miniatura...

      const idx = Number(thumb.dataset.thumbIndex);
      // .dataset acessa os atributos "data-*" do elemento
      // Number() converte string para número

      $("#main-image").src = p.images[idx];
      // Troca a imagem principal para a imagem correspondente ao índice

      $$("#product-detail-content .thumb").forEach((t) => t.classList.remove("active"));
      // Remove "active" de TODAS as miniaturas

      thumb.classList.add("active");
      // Adiciona "active" apenas à miniatura clicada (fica com borda colorida)
    });
  });

  // Evento: diminuir quantidade
  $("#qtyMinus").addEventListener("click", () => {
    currentQty = Math.max(1, currentQty - 1);
    // Math.max(1, ...) garante que a quantidade nunca fica abaixo de 1

    $("#qty").textContent = currentQty;
    // Atualiza o número visível
  });

  // Evento: aumentar quantidade
  $("#qtyPlus").addEventListener("click", () => {
    currentQty += 1;
    // "+=" é abreviação de currentQty = currentQty + 1

    $("#qty").textContent = currentQty;
  });

  // Evento: adicionar ao carrinho
  $("#addToCartBtn").addEventListener("click", () => {
    addToCart(productId, currentQty);
    // Adiciona o produto com a quantidade selecionada

    closeModal($("#product-modal"));
    // Fecha o modal do produto

    openCart();
    // Abre o carrinho para o utilizador ver o produto adicionado
  });

  openModal($("#product-modal"));
  // Abre o modal do produto (depois de tudo estar preparado)
}
function openCategoryModal(categoryId) {
  // Abre o modal com a galeria de produtos de uma categoria

  const cat = categories[categoryId];
  // Busca os dados da categoria pelo ID

  if (!cat) return;
  // Sai se a categoria não existir

  // Gera o HTML para cada produto da categoria
  const itemsHTML = cat.items
    .map((productId) => {
      // Percorre o array de IDs de produtos desta categoria

      const p = products[productId];
      // Busca os dados de cada produto

      if (!p) return "";
      // Se o produto não existir, devolve string vazia

      return `
        <div class="category-item">
          <img src="${p.images[0]}" alt="${p.name}">
          <div class="category-item-body">
            <h4>${p.name}</h4>
            <p>${money(p.price)}</p>
            <div class="category-item-actions">
              <button class="btn btn-outline" type="button" data-open-product="${productId}">
                Ver produto
              </button>
              <!-- data-open-product é lido por setupGlobalClicks() -->

              <button class="btn btn-primary" type="button" data-quick-add="${productId}">
                Adicionar
              </button>
              <!-- data-quick-add adiciona 1 unidade ao carrinho sem abrir o produto -->
            </div>
          </div>
        </div>
      `;
    })
    .join("");
    // Junta todos os cards de produtos num único string HTML

  // Insere o conteúdo no modal da categoria
  $("#category-modal-content").innerHTML = `
    <div class="category-head">
      <h2>${cat.name}</h2>
      <p>${cat.desc}</p>
    </div>
    <div class="category-items-grid">
      ${itemsHTML}
    </div>
  `;

  openModal($("#category-modal"));
  // Abre o modal depois do conteúdo estar inserido
}


/* =========================
   12) RENDERIZAR E ABRIR O CARRINHO
========================= */

function renderCart() {
  // Redesenha o HTML do carrinho com os dados atuais

  const itemsEl = $("#cart-items");    // área da lista de produtos
  const emptyEl = $("#empty-cart");    // mensagem de carrinho vazio
  const totalEl = $("#cart-total");    // linha do total

  if (!itemsEl || !emptyEl || !totalEl) return;
  // Sai se algum elemento não existir (segurança)

  if (cart.length === 0) {
    // Se o carrinho está vazio...

    itemsEl.innerHTML = "";
    // Limpa a área de itens

    emptyEl.style.display = "block";
    // Mostra a mensagem "Carrinho vazio"

    totalEl.textContent = "Total: " + money(0);
    // Total = 0
    return;
    // Para a função aqui
  }

  emptyEl.style.display = "none";
  // Esconde a mensagem de carrinho vazio

  // Gera o HTML para cada item do carrinho
  itemsEl.innerHTML = cart
    .map((item) => {
      const p = products[item.id];
      // Busca os dados completos do produto

      return `
        <div class="cart-item">
          <img src="${p?.images?.[0] || ""}" alt="${item.name}">
          <!-- p?.images?.[0] = "optional chaining" — se p ou images for undefined, não dá erro -->
          <!-- || "" = se a imagem não existir, usa string vazia -->

          <div class="cart-info" style="flex:1;">
            <h4>${item.name}</h4>
            <p>Subtotal: <strong>${money(item.price * item.qty)}</strong></p>
          </div>

          <div class="cart-qty">
            <button class="qty-btn" type="button" data-cart-minus="${item.id}">-</button>
            <!-- data-cart-minus é lido por setupGlobalClicks() para diminuir quantidade -->

            <span>${item.qty}</span>
            <!-- mostra a quantidade atual -->

            <button class="qty-btn" type="button" data-cart-plus="${item.id}">+</button>
            <!-- data-cart-plus para aumentar -->

            <button
              type="button"
              data-cart-remove="${item.id}"
              style="background:#ef4444;color:#fff;border:none;border-radius:999px;padding:10px 12px;cursor:pointer;">
              Remover
              <!-- data-cart-remove para remover o item completamente -->
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  totalEl.textContent = "Total: " + money(cartTotal());
  // Atualiza o total com o valor calculado
}

function openCart() {
  // Renderiza e abre o modal do carrinho

  renderCart();
  // Sempre redesenha antes de abrir (garante que está atualizado)

  openModal($("#cart-modal"));
}


/* =========================
   13) CHECKOUT (FINALIZAR PEDIDO VIA WHATSAPP)
========================= */

function setupCheckout() {
  const form = $("#checkout-form");
  // Seleciona o formulário de checkout

  if (!form) return;
  // Sai se o formulário não existir

  form.addEventListener("submit", (e) => {
    // "submit" dispara quando o utilizador clica no botão type="submit"

    e.preventDefault();
    // Previne o comportamento padrão do formulário (que seria recarregar a página)

    if (cart.length === 0) {
      alert("Seu carrinho está vazio.");
      // alert() mostra uma caixa de diálogo simples
      return;
    }

    const name   = $("#customer-name")?.value?.trim() || "";
    // .value = o texto digitado no campo
    // .trim() remove espaços no início e fim
    // || "" = se vazio ou undefined, usa string vazia

    const phone  = $("#customer-phone")?.value?.trim() || "";
    const method = $("#payment-method")?.value || "";
    // Para select, .value devolve o "value" da option selecionada

    if (!name || !phone || !method) {
      alert("Preencha nome, telefone e método de pagamento.");
      return;
      // Interrompe se algum campo estiver vazio
    }

    // Gera a lista de itens para a mensagem do WhatsApp
    const itemsText = cart
      .map((i) => `- ${i.name} (x${i.qty}) — ${money(i.price * i.qty)}`)
      // Formata cada item como "- Nome do produto (x2) — 1500,00 MZN"
      .join("\n");
      // "\n" = quebra de linha no texto

    // Monta a mensagem completa do pedido
    const msg =
`Olá! Quero fazer um pedido.

Itens:
${itemsText}

Total: ${money(cartTotal())}
Pagamento: ${method}
Nome: ${name}
Telefone: ${phone}

Aguardo confirmação e instruções para pagamento.`;
    // Template literal multi-linha — as quebras de linha no código refletem-se na mensagem

    window.open(waLink(msg), "_blank", "noopener");
    // Abre o WhatsApp com a mensagem do pedido numa nova aba

    clearCart();
    // Esvazia o carrinho depois de enviar

    closeModal($("#cart-modal"));
    // Fecha o modal do carrinho

    alert("Pedido preparado para envio no WhatsApp.");
    // Confirmação visual para o utilizador
  });
}

function setupCountUp() {
  // Todos os números marcados com data-count="..."
  const nums = $$("[data-count]");
  if (nums.length === 0) return;

  // Se o utilizador pediu menos animação, deixamos os valores finais e saímos
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  // Antes de observar, todos começam em 0 (no HTML ficam com o valor final
  // para quem tiver o JavaScript desligado)
  nums.forEach((el) => { el.textContent = "0"; });

  // Anima UM número de 0 até ao valor final
  function animate(el) {
    const target   = Number(el.dataset.count);  // valor final
    const duration = 1400;                      // duração em milissegundos
    const start    = performance.now();         // instante em que começou

    function tick(now) {
      // progress vai de 0 a 1 ao longo da duração
      const progress = Math.min((now - start) / duration, 1);
      // easing "ease-out": começa rápido e abranda no fim (mais natural)
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);   // continua no próximo frame
    }
    requestAnimationFrame(tick);
  }

  // Só começa a contar quando o número aparece no ecrã
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        obs.unobserve(entry.target);   // conta uma única vez
      }
    });
  }, { threshold: 0.6 });

  nums.forEach((el) => observer.observe(el));
}
function setupGlobalClicks() {

  document.addEventListener("click", (e) => {
    // Ouve TODOS os cliques no documento
    // e = evento do clique; e.target = o elemento exato que foi clicado

    // 1) Abrir categoria (botões com data-open-category)
    const btnCat = e.target.closest("[data-open-category]");
    // .closest() sobe na árvore HTML à procura do ancestral mais próximo
    // com o atributo data-open-category (funciona mesmo clicando num elemento filho)

    if (btnCat) {
      const categoryId = Number(btnCat.dataset.openCategory);
      // .dataset.openCategory lê o valor de data-open-category
      // Number() converte "1" (string) para 1 (número)

      openCategoryModal(categoryId);
      return;
      // "return" evita que o código continue a verificar outras condições
    }
   if (btnProd) {
  const productId = Number(btnProd.dataset.openProduct);

  closeModal($("#search-modal"));   // <-- NOVA LINHA

  if ($("#category-modal")?.classList.contains("active")) {
    closeModal($("#category-modal"));
  }
  renderProductModal(productId);
  return;
}

    // 3) Adicionar rapidamente ao carrinho (data-quick-add)
    const btnQuick = e.target.closest("[data-quick-add]");
    if (btnQuick) {
      const productId = Number(btnQuick.dataset.quickAdd);
      addToCart(productId, 1);
      // Adiciona 1 unidade sem abrir o modal do produto

      alert("Produto adicionado ao carrinho!");
      return;
    }

    // 4) Carrinho: diminuir quantidade (data-cart-minus)
    const btnMinus = e.target.closest("[data-cart-minus]");
    if (btnMinus) {
      updateCartQty(Number(btnMinus.dataset.cartMinus), -1);
      // -1 = diminui 1 unidade
      return;
    }

    // 5) Carrinho: aumentar quantidade (data-cart-plus)
    const btnPlus = e.target.closest("[data-cart-plus]");
    if (btnPlus) {
      updateCartQty(Number(btnPlus.dataset.cartPlus), +1);
      // +1 = aumenta 1 unidade
      return;
    }

    // 6) Carrinho: remover item (data-cart-remove)
    const btnRemove = e.target.closest("[data-cart-remove]");
    if (btnRemove) {
      removeFromCart(Number(btnRemove.dataset.cartRemove));
      return;
    }
  });
}

function setupButtons() {


  $("#searchToggleBtn")?.addEventListener("click", openSearchModal);
  $("#openCartBtn")?.addEventListener("click", openCart);
  $("#floatingCartBtn")?.addEventListener("click", openCart);
  // O botão flutuante também abre o carrinho

  // Fechar modais pelos botões ×
  $("#closeProductModalBtn")?.addEventListener("click", () => closeModal($("#product-modal")));
  $("#closeCategoryModalBtn")?.addEventListener("click", () => closeModal($("#category-modal")));
  $("#closeCartBtn")?.addEventListener("click", () => closeModal($("#cart-modal")));

  // Limpar carrinho
  $("#clearCartBtn")?.addEventListener("click", () => {
    if (confirm("Deseja limpar o carrinho?")) clearCart();
    // confirm() mostra uma caixa de diálogo com "OK" e "Cancelar"
    // Retorna true se o utilizador clicar OK
  });

  // Continuar comprando: fecha o modal do carrinho
  $("#continueShoppingBtn")?.addEventListener("click", () => closeModal($("#cart-modal")));

  // Link "Adicione produtos!" dentro da mensagem de carrinho vazio
  $("#emptyCartLink")?.addEventListener("click", () => closeModal($("#cart-modal")));

  // Clicar no logo fecha todos os modais
  $("#logoLink")?.addEventListener("click", () => closeAllModals());
  $("#openSearchBtn")?.addEventListener("click", openSearchModal);
$("#closeSearchBtn")?.addEventListener("click", () => closeModal($("#search-modal")));
}


/* =========================
   16) FECHAR AO CLICAR NO FUNDO E TECLA ESC
========================= */

function setupCloseOnBackdropAndEsc() {

  // Clicar no overlay escuro (fundo do modal, não no conteúdo)
  document.addEventListener("click", (e) => {
    // e.target = o elemento exato clicado
    // Comparamos com o modal em si (não com o .modal-content)
    // Se o utilizador clicou no fundo escuro (o próprio .modal), fecha

    if (e.target === $("#product-modal"))  closeModal($("#product-modal"));
    if (e.target === $("#category-modal")) closeModal($("#category-modal"));
    if (e.target === $("#cart-modal"))     closeModal($("#cart-modal"));
    if (e.target === $("#search-modal")) closeModal($("#search-modal"));
  });

  // Tecla ESC fecha todos os modais
  document.addEventListener("keydown", (e) => {
    // "keydown" = evento que dispara quando uma tecla é pressionada

    if (e.key === "Escape") closeAllModals();
    // e.key contém o nome da tecla pressionada
  });
}
function setupReveal() {

  const reveals = $$(".reveal");
  // Seleciona todos os elementos com a classe "reveal"

  if (reveals.length === 0) return;
  // Se não houver nenhum, sai (otimização)

  const observer = new IntersectionObserver((entries) => {
    // IntersectionObserver chama esta função quando os elementos mudam de visibilidade
    // entries = array de elementos observados que mudaram

    entries.forEach((entry) => {
      // Percorre cada entrada

      if (entry.isIntersecting) entry.target.classList.add("active");
    });

  }, { threshold: 0.15 });
  // threshold: 0.15 = o elemento precisa de estar 15% visível para disparar

  reveals.forEach((el) => observer.observe(el));
  // Regista cada elemento .reveal para ser observado
}


/* =========================
   18) CONFIGURAR FOOTER
========================= */

function setupFooter() {

  // Ano automático no copyright
  const yearEl = document.getElementById("year");
  // getElementById é ligeiramente mais rápido que querySelector para IDs

  if (yearEl) yearEl.textContent = new Date().getFullYear();
  // new Date() = data e hora atual
  // .getFullYear() = apenas o ano (ex: 2026)

  // Botão "voltar ao topo"
  const toTopBtn = document.getElementById("toTopBtn");
  if (toTopBtn) {

    window.addEventListener("scroll", () => {
      // "scroll" dispara sempre que o utilizador faz scroll

      toTopBtn.classList.toggle("show", window.scrollY > 500);
      // .toggle("show", condição) adiciona "show" se a condição for verdadeira, remove se for falsa
      // window.scrollY = pixels de scroll do topo da página
      // Se scrollou mais de 500px, mostra o botão
    });

    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Faz scroll suave até ao topo da página
    });
  }

  // Links do footer (os mesmos do contacto)
  const footerWA = document.getElementById("footer-wa");
  const footerIG = document.getElementById("footer-ig");
  const footerFB = document.getElementById("footer-fb");

  if (footerWA) footerWA.href = waLink(CONFIG.welcomeText);
  if (footerIG) footerIG.href = CONFIG.instagramUrl;
  if (footerFB) footerFB.href = CONFIG.facebookUrl;
}

function init() {
  setupContactLinks();
  setupCheckout();
  setupGlobalClicks();
  setupButtons();
  setupCloseOnBackdropAndEsc();
  setupSearch();
  setupPopularSearchButtons();
  setupSearchCategoryCards();
  setupRecentSearchActions();
  renderRecentSearches();
  renderFeaturedProducts();
  setupReveal();
  updateCartCountUI();
  setupFooter();
  setupHeaderScroll();
  setupMobileMenu();
  setupCountUp();
}
/*COMMIT #3 — JS DOS PRODUTOS EM DESTAQUE */

/* ── 1) FAVORITOS (guardados no localStorage) ───────── */
let favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];

function isFavorite(id) {
  return favoriteIds.includes(Number(id));
}

// Liga/desliga um favorito e devolve o novo estado (true = favorito)
function toggleFavorite(id) {
  id = Number(id);
  favoriteIds = isFavorite(id)
    ? favoriteIds.filter((f) => f !== id)   // já era favorito: remove
    : [...favoriteIds, id];                 // não era: adiciona ("..." copia o array antigo)
  localStorage.setItem("favorites", JSON.stringify(favoriteIds));
  return isFavorite(id);
}

/* ── 2) TOAST: aviso flutuante que desaparece sozinho ── */
// message = texto; actionLabel/onAction (opcionais) = botão dentro do aviso
function showToast(message, actionLabel, onAction) {
  // Cria a caixa que guarda os avisos (só da primeira vez)
  let box = document.getElementById("toast-box");
  if (!box) {
    box = document.createElement("div");
    box.id = "toast-box";
    box.setAttribute("aria-live", "polite");   // leitores de ecrã anunciam o aviso
    document.body.appendChild(box);
  }

  const toast = document.createElement("div");
  toast.className = "toast";

  const text = document.createElement("span");
  text.textContent = message;                  // textContent (e não innerHTML): seguro contra HTML no nome
  toast.appendChild(text);

  if (actionLabel && onAction) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "toast-action";
    btn.textContent = actionLabel;
    btn.addEventListener("click", () => { onAction(); toast.remove(); });
    toast.appendChild(btn);
  }

  box.appendChild(toast);
  // O frame seguinte faz a classe "show" disparar a transição CSS (fade + subir)
  requestAnimationFrame(() => toast.classList.add("show"));

  // Some após 3,2s: primeiro desvanece, depois remove do HTML
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ── 3) SETAS: ativa/desativa nos extremos ──────────── */
function updateFeaturedArrows() {
  const track = document.getElementById("featured-products");
  const prev  = document.getElementById("fpPrev");
  const next  = document.getElementById("fpNext");
  if (!track) return;

  const maxScroll = track.scrollWidth - track.clientWidth - 2;  // -2: tolerância de arredondamento
  if (prev) prev.disabled = track.scrollLeft <= 2;
  if (next) next.disabled = track.scrollLeft >= maxScroll;
}

/* ── 4) DESENHAR OS CARTÕES + LIGAR OS EVENTOS ──────── */
function renderFeaturedProducts() {
  const container = document.getElementById("featured-products");
  if (!container) return;

  // Só os produtos com featured: true
  const featuredItems = Object.entries(products).filter(([id, p]) => p.featured);

  if (featuredItems.length === 0) {
    container.innerHTML = `<p class="fp-empty">Nenhum produto em destaque no momento.</p>`;
    return;
  }

  // Descobre o nome da categoria de um produto (procura o id nas listas de "categories")
  const categoryName = (productId) => {
    const catId = Object.keys(categories).find((cid) =>
      categories[cid].items.includes(Number(productId))
    );
    return catId ? categories[catId].name : "";
  };

  // data-fp-open / data-fp-fav / data-fp-add: atributos PRÓPRIOS destes cartões.
  // Não usamos data-open-product/data-quick-add para não depender do listener global.
  container.innerHTML = featuredItems.map(([id, p]) => `
    <article class="fp-card">

      <button class="fp-media" type="button" data-fp-open="${id}" aria-label="Ver detalhes de ${p.name}">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        <span class="fp-badge">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>
          Destaque
        </span>
      </button>

      <button class="fp-fav ${isFavorite(id) ? "active" : ""}" type="button"
              data-fp-fav="${id}" aria-pressed="${isFavorite(id)}" aria-label="Guardar nos favoritos">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>
        </svg>
      </button>

      <div class="fp-body">
        <span class="fp-cat">${categoryName(id)}</span>
        <h3 class="fp-name">${p.name}</h3>
        <p class="fp-desc">${p.desc}</p>

        <div class="fp-price-row">
          <span class="fp-price">${money(p.price)}</span>
        </div>

        <div class="fp-actions">
          <button class="fp-btn fp-btn-ghost" type="button" data-fp-open="${id}">Ver detalhes</button>
          <button class="fp-btn fp-btn-buy" type="button" data-fp-add="${id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </article>
  `).join("");

  // ── Eventos: ligados UMA só vez (a marca data-bound evita duplicar) ──
  if (container.dataset.bound === "1") { updateFeaturedArrows(); return; }
  container.dataset.bound = "1";

  // Um único listener no contentor trata os 3 tipos de clique (event delegation)
  container.addEventListener("click", (e) => {

    // a) Ver detalhes (imagem ou botão)
    const openBtn = e.target.closest("[data-fp-open]");
    if (openBtn) {
      renderProductModal(Number(openBtn.dataset.fpOpen));
      return;
    }

    // b) Coração
    const favBtn = e.target.closest("[data-fp-fav]");
    if (favBtn) {
      const active = toggleFavorite(favBtn.dataset.fpFav);
      favBtn.classList.remove("active");     // remove e força reflow para a animação repetir
      void favBtn.offsetWidth;
      favBtn.classList.toggle("active", active);
      favBtn.setAttribute("aria-pressed", String(active));
      showToast(active ? "Adicionado aos favoritos" : "Removido dos favoritos");
      return;
    }

    // c) Adicionar ao carrinho
    const addBtn = e.target.closest("[data-fp-add]");
    if (addBtn) {
      const id = Number(addBtn.dataset.fpAdd);
      addToCart(id, 1);

      // Feedback no próprio botão: fica verde com "Adicionado" durante 1,6s
      const label = addBtn.querySelector("span");
      addBtn.classList.add("added");
      label.textContent = "Adicionado";
      setTimeout(() => {
        addBtn.classList.remove("added");
        label.textContent = "Adicionar";
      }, 1600);

      showToast(`${products[id].name} no carrinho`, "Ver carrinho", openCart);
    }
  });

  // Setas: avançam a largura de um cartão + o espaço (20px)
  const step = () => {
    const card = container.querySelector(".fp-card");
    return card ? card.offsetWidth + 20 : 300;
  };
  document.getElementById("fpPrev")?.addEventListener("click", () =>
    container.scrollBy({ left: -step(), behavior: "smooth" }));
  document.getElementById("fpNext")?.addEventListener("click", () =>
    container.scrollBy({ left: step(), behavior: "smooth" }));

  container.addEventListener("scroll", updateFeaturedArrows, { passive: true });
  window.addEventListener("resize", updateFeaturedArrows);
  updateFeaturedArrows();
}

function openSearchModal() {
  openModal($("#search-modal"));

  const input = $("#search-input");
  const defaultContent = $("#search-default-content");
  const resultsArea = $("#search-results-area");
  const results = $("#search-results");
  const info = $("#search-results-info");

  if (input) {
    input.value = "";
    input.focus();
  }

  if (defaultContent) defaultContent.style.display = "block";
  if (resultsArea) resultsArea.style.display = "none";
  if (results) results.innerHTML = "";
  if (info) info.textContent = "";
}

function renderSearchResults(foundProducts, term = "") {
  const resultsEl = $("#search-results");
  const infoEl = $("#search-results-info");

  if (!resultsEl || !infoEl) return;

  if (foundProducts.length === 0) {
    resultsEl.innerHTML = "";
    infoEl.textContent = `Nenhum produto encontrado para "${term}".`;
    return;
  }

  infoEl.textContent = `${foundProducts.length} produto(s) encontrado(s) para "${term}".`;

  resultsEl.innerHTML = foundProducts.map(([id, p]) => `
    <article class="product-card">
      <div class="product-image">
        <img src="${p.images[0]}" alt="${p.name}">
        <div class="product-overlay">
          <button class="overlay-btn" type="button" data-open-product="${id}">
            Ver detalhes
          </button>
        </div>
      </div>

      <div class="product-content">
        <div class="category">Resultado da pesquisa</div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="product-footer">
          <span class="price">${money(p.price)}</span>
          <button class="mini-link" type="button" data-quick-add="${id}">
            Comprar
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

let activeSearchCategory = "all";

function setupSearch() {
  const input = $("#search-input");
  const resultsEl = $("#search-results");
  const infoEl = $("#search-results-info");
  const defaultContent = $("#search-default-content");
  const resultsArea = $("#search-results-area");

  if (!input || !resultsEl || !infoEl) return;

  input.addEventListener("input", () => {
    const term = input.value.toLowerCase().trim();

    if (term.length === 0) {
      if (activeSearchCategory === "all") {
        defaultContent.style.display = "block";
        resultsArea.style.display = "none";
        resultsEl.innerHTML = "";
        infoEl.textContent = "";
        return;
      }

      const foundProducts = Object.entries(products).filter(([id]) => {
        return String(Math.floor(Number(id) / 100)) === activeSearchCategory;
      });

      defaultContent.style.display = "none";
      resultsArea.style.display = "block";
      renderSearchResults(foundProducts, "categoria");
      return;
    }

    let foundProducts = Object.entries(products).filter(([id, p]) => {
      const matchesText =
        p.name.toLowerCase().includes(term) ||
        p.desc.toLowerCase().includes(term);

      const matchesCategory =
        activeSearchCategory === "all" ||
        String(Math.floor(Number(id) / 100)) === activeSearchCategory;

      return matchesText && matchesCategory;
    });

    defaultContent.style.display = "none";
    resultsArea.style.display = "block";
    renderSearchResults(foundProducts, term);
  });

  $$("#search-category-filters .search-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      $$("#search-category-filters .search-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      activeSearchCategory = chip.dataset.searchCategory;

      const term = input.value.trim();

      if (term.length > 0) {
        runSearch(term);
      } else {
        if (activeSearchCategory === "all") {
          defaultContent.style.display = "block";
          resultsArea.style.display = "none";
          resultsEl.innerHTML = "";
          infoEl.textContent = "";
        } else {
          runCategorySearch(activeSearchCategory);
        }
      }
    });
  });
}


/* =========================
   20) 
   Termos de produtos em pesquisas para funcionarem no mpodal de pesquisa
========================= */


function runSearch(term) {
  const input = $("#search-input");
  const defaultContent = $("#search-default-content");
  const resultsArea = $("#search-results-area");

  if (!input) return;

  input.value = term;

  if (defaultContent) defaultContent.style.display = "none";
  if (resultsArea) resultsArea.style.display = "block";

  const normalizedTerm = term.toLowerCase().trim();

  let foundProducts = Object.entries(products).filter(([id, p]) => {
    const matchesText =
      p.name.toLowerCase().includes(normalizedTerm) ||
      p.desc.toLowerCase().includes(normalizedTerm);

    const matchesCategory =
      activeSearchCategory === "all" ||
      String(Math.floor(Number(id) / 100)) === activeSearchCategory;

    return matchesText && matchesCategory;
  });

  renderSearchResults(foundProducts, term);
  saveRecentSearch(term);
}
function setupPopularSearchButtons() {
  $$("[data-search-term]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const term = btn.dataset.searchTerm;
      runSearch(term);
    });
  });
}

/* =========================
   20) 
   PESQUISAS POR CATEGORIA.
========================= */

function runCategorySearch(categoryId) {
  const input = $("#search-input");
  const defaultContent = $("#search-default-content");
  const resultsArea = $("#search-results-area");

  activeSearchCategory = String(categoryId);

  $$("#search-category-filters .search-chip").forEach((chip) => {
    chip.classList.remove("active");
    if (chip.dataset.searchCategory === String(categoryId)) {
      chip.classList.add("active");
    }
  });

  if (input) input.value = "";

  const foundProducts = Object.entries(products).filter(([id, p]) => {
    return String(Math.floor(Number(id) / 100)) === String(categoryId);
  });

  if (defaultContent) defaultContent.style.display = "none";
  if (resultsArea) resultsArea.style.display = "block";

  const categoryNames = {
    1: "Tênis",
    2: "Camisetas",
    3: "Luvas",
    4: "Acessórios"
  };

  renderSearchResults(foundProducts, categoryNames[categoryId] || "Categoria");
}
function setupSearchCategoryCards() {
  $$("[data-search-category-card]").forEach((card) => {
    card.addEventListener("click", () => {
      const categoryId = card.dataset.searchCategoryCard;
      runCategorySearch(categoryId);
    });
  });
}


// VARIAVEL DE QUARDAR PESQUISAS RECENTES COM O LOCAL STORAGE
let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];

//FUNCAO QUE: remove duplicados; coloca a pesquisa mais recente no início
// guarda no máximo 8
// salva no localStorage
// atualiza a tela
function saveRecentSearch(term) {
  const cleanTerm = term.trim();
  if (!cleanTerm) return;

  recentSearches = recentSearches.filter((item) => item.toLowerCase() !== cleanTerm.toLowerCase());
  recentSearches.unshift(cleanTerm);

  recentSearches = recentSearches.slice(0, 8);
  localStorage.setItem("recentSearches", JSON.stringify(recentSearches));

  renderRecentSearches();
}


// FUNCAO QUE PERMITE: MostraR as pesquisas recentes como botões clicáveis.
// Quando clicar, pesquisa de novo.
function renderRecentSearches() {
  const container = $("#recent-searches");
  if (!container) return;

  if (recentSearches.length === 0) {
    container.innerHTML = `<span style="color: var(--muted);">Nenhuma pesquisa recente.</span>`;
    return;
  }

  container.innerHTML = recentSearches.map((term) => `
    <button type="button" class="search-chip soft recent-chip" data-recent-search="${term}">
      ${term}
    </button>
  `).join("");

  $$("[data-recent-search]").forEach((btn) => {
    btn.addEventListener("click", () => {
      runSearch(btn.dataset.recentSearch);
    });
  });
}

//FUNCAO PARA LIMPAR AS PESQUISAS RECENTES 

function clearRecentSearches() {
  recentSearches = [];
  localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  renderRecentSearches();
}
function setupRecentSearchActions() {
  $("#clearRecentSearchesBtn")?.addEventListener("click", () => {
    clearRecentSearches();
  });
}
document.addEventListener("DOMContentLoaded", init);
// "DOMContentLoaded" dispara quando o HTML está completamente analisado e disponível
// Garante que o init() só corre DEPOIS de todos os elementos HTML existirem
// Se o init() corresse antes, os getElementById/querySelector devolveriam null