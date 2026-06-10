const kits = [
    {
        id: 'boss-btn', category: 'Botões', title: 'Botão Boss Fight', size: 'normal', theme: 'game',
        html: `<button class="boss-btn">Iniciar batalha</button>`,
        js: `// Este botão não precisa de JavaScript obrigatório.\ndocument.querySelector('.boss-btn')?.addEventListener('click', () => {\n    console.log('Batalha iniciada');\n});`
    },
    {
        id: 'liquid-btn', category: 'Botões', title: 'Botão Liquid Glow', size: 'normal', theme: 'future',
        html: `<button class="liquid-btn"><span>Enviar projeto</span></button>`,
        js: `// Efeito visual feito somente com CSS.`
    },
    {
        id: 'store-nav', category: 'Navbars', title: 'Navbar Loja Premium', size: 'wide', theme: 'luxo',
        html: `<nav class="store-nav">
    <strong>AURUM</strong>
    <div class="store-nav-links">
        <a href="#">Coleção</a>
        <a href="#">Masculino</a>
        <a href="#">Feminino</a>
        <a href="#">Sale</a>
    </div>
    <div class="store-nav-actions">
        <button>Login</button>
        <button>Carrinho</button>
    </div>
</nav>`,
        js: `document.querySelectorAll('.store-nav a').forEach((link) => {\n    link.addEventListener('click', (event) => event.preventDefault());\n});`
    },
    {
        id: 'holo-nav', category: 'Navbars', title: 'Navbar Hologram', size: 'wide', theme: 'future',
        html: `<nav class="holo-nav">
    <strong>HOLO UI</strong>
    <a href="#">Sistemas</a>
    <a href="#">Painéis</a>
    <a href="#">IA</a>
    <a href="#">Contato</a>
    <button>Acessar</button>
</nav>`,
        js: `// Navbar pronta para usar. Troque os hrefs pelos links reais.`
    },
    {
        id: 'game-hero', category: 'Heroes', title: 'Hero Game Portal', size: 'full', theme: 'game',
        html: `<section class="game-hero">
    <div class="scanlines"></div>
    <div class="game-hero-content">
        <span>Novo servidor aberto</span>
        <h2>Entre no modo lendário</h2>
        <p>Hero com aura roxa, efeito futurista e CTA chamativo para landing pages de games.</p>
        <button>Jogar agora</button>
    </div>
    <div class="game-orb"></div>
</section>`,
        js: `document.querySelector('.game-hero button')?.addEventListener('click', () => {\n    alert('Começando agora!');\n});`
    },
    {
        id: 'bento-grid', category: 'Grids', title: 'Grid Bento Startup', size: 'full', theme: 'future',
        html: `<section class="bento-grid">
    <article class="bento-card big"><span>01</span><h3>Dashboard inteligente</h3><p>Área grande para destacar o recurso principal.</p></article>
    <article class="bento-card"><span>02</span><h3>Automação</h3></article>
    <article class="bento-card"><span>03</span><h3>Relatórios</h3></article>
    <article class="bento-card wide"><span>04</span><h3>Integração completa</h3><p>Bloco horizontal para texto maior.</p></article>
</section>`,
        js: `// Grid 100% CSS. Não precisa de JS.`
    },
    {
        id: 'pro-input', category: 'Inputs', title: 'Input Floating Label', size: 'normal', theme: 'future',
        html: `<label class="pro-input">
    <input type="email" placeholder=" ">
    <span>Email profissional</span>
</label>`,
        js: `document.querySelector('.pro-input input')?.addEventListener('input', (event) => {\n    console.log(event.target.value);\n});`
    },
    {
        id: 'search-input-kit', category: 'Inputs', title: 'Busca com Botão', size: 'normal', theme: 'luxo',
        html: `<form class="search-input-kit">
    <input type="search" placeholder="Buscar produtos...">
    <button>Buscar</button>
</form>`,
        js: `document.querySelector('.search-input-kit')?.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const value = event.currentTarget.querySelector('input').value;\n    console.log('Busca:', value);\n});`
    },
    {
        id: 'product-card', category: 'Cards', title: 'Card Produto Premium', size: 'normal', theme: 'luxo',
        html: `<article class="product-card">
    <div class="product-card-image"></div>
    <span>Novo</span>
    <h3>Essence Jacket</h3>
    <p>Jaqueta premium com visual minimalista.</p>
    <div class="product-card-bottom"><strong>R$ 349</strong><button>Comprar</button></div>
</article>`,
        js: `document.querySelector('.product-card button')?.addEventListener('click', () => {\n    console.log('Produto adicionado ao carrinho');\n});`
    },
    {
        id: 'profile-card', category: 'Cards', title: 'Card Perfil Social', size: 'normal', theme: 'music',
        html: `<article class="profile-card">
    <div class="profile-avatar"></div>
    <h3>Blocki Studio</h3>
    <p>Designer front-end criando interfaces modernas.</p>
    <div><span>UI</span><span>CSS</span><span>JS</span></div>
    <button>Seguir</button>
</article>`,
        js: `document.querySelector('.profile-card button')?.addEventListener('click', (event) => {\n    event.target.textContent = 'Seguindo';\n});`
    },
    {
        id: 'split-login', category: 'Login/Cadastro', title: 'Login Split Premium', size: 'wide', theme: 'future',
        html: `<section class="split-login">
    <div class="split-login-brand">
        <span>Interface Kits</span>
        <h2>Entre e continue criando.</h2>
        <p>Layout dividido para login, cadastro ou área do cliente.</p>
    </div>
    <form class="split-login-form">
        <h3>Acessar conta</h3>
        <label>Email<input type="email" placeholder="seu@email.com"></label>
        <label>Senha<input type="password" placeholder="••••••••"></label>
        <button>Entrar</button>
        <a href="#">Criar nova conta</a>
    </form>
</section>`,
        js: `document.querySelector('.split-login-form')?.addEventListener('submit', (event) => {\n    event.preventDefault();\n    alert('Login enviado!');\n});`
    },
    {
        id: 'register-card', category: 'Login/Cadastro', title: 'Cadastro Glass', size: 'wide', theme: 'music',
        html: `<form class="register-card">
    <span>Comece grátis</span>
    <h3>Criar cadastro</h3>
    <div class="register-row"><input placeholder="Nome"><input placeholder="Sobrenome"></div>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Senha">
    <button>Cadastrar</button>
</form>`,
        js: `document.querySelector('.register-card')?.addEventListener('submit', (event) => {\n    event.preventDefault();\n    console.log('Cadastro criado');\n});`
    },
    {
        id: 'analytics-dashboard', category: 'Dashboards', title: 'Dashboard Analytics Pro', size: 'full', theme: 'future',
        html: `<section class="analytics-dashboard">
    <aside>
        <strong>Core</strong>
        <a>Overview</a><a>Vendas</a><a>Usuários</a><a>Config</a>
    </aside>
    <main>
        <header><div><span>Dashboard</span><h3>Analytics Pro</h3></div><button>Exportar</button></header>
        <div class="metric-grid">
            <article><span>Receita</span><strong>R$ 48K</strong></article>
            <article><span>Pedidos</span><strong>1.204</strong></article>
            <article><span>Conversão</span><strong>8.7%</strong></article>
        </div>
        <div class="chart-bars"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    </main>
</section>`,
        js: `document.querySelector('.analytics-dashboard header button')?.addEventListener('click', () => {\n    alert('Relatório exportado!');\n});`
    },
    {
        id: 'store-dashboard', category: 'Dashboards', title: 'Dashboard Loja', size: 'full', theme: 'luxo',
        html: `<section class="store-dashboard">
    <header><h3>Loja Premium</h3><button>Novo produto</button></header>
    <div class="store-dash-grid">
        <article><span>Vendas hoje</span><strong>R$ 6.890</strong></article>
        <article><span>Carrinhos</span><strong>38</strong></article>
        <article><span>Estoque baixo</span><strong>12</strong></article>
    </div>
    <div class="store-table">
        <div><b>Produto</b><b>Status</b><b>Valor</b></div>
        <div><span>Essence Jacket</span><span>Ativo</span><span>R$ 349</span></div>
        <div><span>Black Sneaker</span><span>Ativo</span><span>R$ 289</span></div>
    </div>
</section>`,
        js: `document.querySelector('.store-dashboard button')?.addEventListener('click', () => {\n    alert('Abrir cadastro de produto');\n});`
    },
    {
        id: 'footer-mega', category: 'Footers', title: 'Footer Mega Columns', size: 'wide', theme: 'future',
        html: `<footer class="footer-mega">
    <div><strong>Interface Kits</strong><p>Componentes modernos para acelerar seus projetos.</p></div>
    <nav><b>Produto</b><a>Kits</a><a>Sites</a><a>Templates</a></nav>
    <nav><b>Suporte</b><a>Contato</a><a>Ajuda</a><a>Docs</a></nav>
    <form><b>Newsletter</b><input placeholder="Seu email"><button>Enviar</button></form>
</footer>`,
        js: `document.querySelector('.footer-mega form')?.addEventListener('submit', (event) => {\n    event.preventDefault();\n    alert('Email cadastrado!');\n});`
    },
    {
        id: 'footer-vinyl', category: 'Footers', title: 'Footer Vinyl Music', size: 'wide', theme: 'music',
        html: `<footer class="footer-vinyl">
    <div class="vinyl-disc"></div>
    <div><h3>PULSE RECORDS</h3><p>Shows, artistas e experiências sonoras.</p><a>Artistas</a><a>Álbuns</a><a>Eventos</a></div>
</footer>`,
        js: `// Footer animado feito com CSS.`
    },
    {
        id: 'aurum-site', category: 'Sites completos', title: 'Site Completo Aurum', size: 'full', theme: 'luxo',
        html: `<section class="aurum-site">
    <nav><strong>AURUM</strong><a>Coleção</a><a>Atelier</a><a>Editorial</a><button>Reservar</button></nav>
    <header><span>Luxury edition</span><h2>Uma experiência digital premium.</h2><p>Template completo para marca de luxo, moda, joias, arquitetura ou produtos exclusivos.</p><button>Ver coleção</button></header>
    <div class="aurum-grid"><article>01</article><article>02</article><article>03</article></div>
    <footer>© AURUM — Luxury digital experience</footer>
</section>`,
        js: `document.querySelector('.aurum-site header button')?.addEventListener('click', () => {\n    alert('Coleção aberta!');\n});`
    },
    {
        id: 'saas-site', category: 'Sites completos', title: 'Site Completo SaaS', size: 'full', theme: 'future',
        html: `<section class="saas-site">
    <nav><strong>FlowOS</strong><a>Recursos</a><a>Preços</a><a>Clientes</a><button>Teste grátis</button></nav>
    <header><span>Software inteligente</span><h2>Controle tudo em um painel moderno.</h2><p>Landing completa com hero, métricas, cards e chamada para ação.</p><button>Começar agora</button></header>
    <div class="saas-cards"><article>Automação</article><article>Relatórios</article><article>Integrações</article></div>
    <footer>FlowOS © Todos os direitos reservados</footer>
</section>`,
        js: `document.querySelector('.saas-site header button')?.addEventListener('click', () => {\n    alert('Iniciando teste grátis!');\n});`
    }
];

const categories = ['Todos', ...new Set(kits.map((kit) => kit.category))];
const cssBlocks = {
    "boss-btn": "/* KIT:boss-btn START */\n.boss-btn {\n    position: relative;\n    padding: 18px 34px;\n    border: 3px solid #fff;\n    background: linear-gradient(135deg, #8b5cf6, #ff2bd6);\n    color: white;\n    text-transform: uppercase;\n    font-weight: 950;\n    cursor: pointer;\n    box-shadow: 8px 8px 0 #000, 0 0 40px rgba(255, 43, 214, .35);\n    clip-path: polygon(8% 0, 100% 0, 92% 100%, 0 100%);\n    transition: .25s ease;\n}\n.boss-btn:hover {\n    transform: translate(-4px, -4px);\n    box-shadow: 14px 14px 0 #000, 0 0 60px rgba(255, 43, 214, .55);\n}\n/* KIT:boss-btn END */",
    "liquid-btn": "/* KIT:liquid-btn START */\n.liquid-btn {\n    position: relative;\n    isolation: isolate;\n    overflow: hidden;\n    border: 0;\n    border-radius: 999px;\n    padding: 18px 34px;\n    background: #020617;\n    color: white;\n    font-weight: 950;\n    box-shadow: 0 0 0 1px rgba(6, 247, 255, .35), 0 20px 60px rgba(6, 247, 255, .18);\n}\n.liquid-btn::before {\n    content: \"\";\n    position: absolute;\n    inset: -60%;\n    z-index: -1;\n    background: conic-gradient(from 90deg, #06f7ff, #8b5cf6, #ff2bd6, #06f7ff);\n    animation: liquidSpin 3s linear infinite;\n}\n.liquid-btn::after {\n    content: \"\";\n    position: absolute;\n    inset: 3px;\n    z-index: -1;\n    border-radius: inherit;\n    background: #020617;\n}\n@keyframes liquidSpin { to { transform: rotate(360deg); } }\n/* KIT:liquid-btn END */",
    "store-nav": "/* KIT:store-nav START */\n.store-nav {\n    width: min(960px, 100%);\n    display: flex;\n    align-items: center;\n    gap: 22px;\n    padding: 18px 22px;\n    border-radius: 24px;\n    background: rgba(255, 255, 255, .94);\n    color: #111827;\n    box-shadow: 0 24px 70px rgba(0, 0, 0, .25);\n}\n.store-nav strong {\n    margin-right: auto;\n    color: #9a7418;\n    font-family: Cinzel, serif;\n    font-size: 28px;\n}\n.store-nav-links,\n.store-nav-actions {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n}\n.store-nav a {\n    color: #111827;\n    font-weight: 900;\n}\n.store-nav button {\n    border: 0;\n    border-radius: 999px;\n    padding: 12px 16px;\n    background: #111827;\n    color: white;\n    font-weight: 950;\n}\n/* KIT:store-nav END */",
    "holo-nav": "/* KIT:holo-nav START */\n.holo-nav {\n    width: min(920px, 100%);\n    display: flex;\n    align-items: center;\n    gap: 22px;\n    padding: 18px 24px;\n    border-radius: 24px;\n    background: rgba(2, 6, 23, .72);\n    border: 1px solid rgba(6, 247, 255, .35);\n    backdrop-filter: blur(18px);\n    box-shadow: 0 0 45px rgba(6, 247, 255, .14);\n}\n.holo-nav strong {\n    margin-right: auto;\n    color: #06f7ff;\n    font-family: Orbitron, sans-serif;\n}\n.holo-nav a {\n    color: white;\n    font-weight: 900;\n}\n.holo-nav button {\n    border: 0;\n    border-radius: 999px;\n    padding: 12px 18px;\n    color: white;\n    background: linear-gradient(135deg, #06f7ff, #8b5cf6);\n    font-weight: 950;\n}\n/* KIT:holo-nav END */",
    "game-hero": "/* KIT:game-hero START */\n.game-hero {\n    width: 100%;\n    min-height: 470px;\n    position: relative;\n    overflow: hidden;\n    border-radius: 30px;\n    display: grid;\n    grid-template-columns: 1fr .7fr;\n    align-items: center;\n    gap: 28px;\n    padding: 50px;\n    background: radial-gradient(circle at 73% 45%, rgba(139, 92, 246, .48), transparent 24%), radial-gradient(circle at 76% 45%, rgba(255, 43, 214, .35), transparent 34%), linear-gradient(135deg, #080012, #020617);\n}\n.scanlines {\n    position: absolute;\n    inset: 0;\n    background: repeating-linear-gradient(0deg, rgba(255,255,255,.055) 0 1px, transparent 1px 5px);\n    pointer-events: none;\n}\n.game-hero-content {\n    position: relative;\n    z-index: 2;\n}\n.game-hero span {\n    color: #ff2bd6;\n    font-weight: 950;\n    text-transform: uppercase;\n    letter-spacing: .14em;\n}\n.game-hero h2 {\n    margin: 12px 0;\n    font-size: clamp(44px, 7vw, 88px);\n    line-height: .88;\n    letter-spacing: -.06em;\n}\n.game-hero p {\n    max-width: 560px;\n    color: #dbeafe;\n    line-height: 1.65;\n}\n.game-hero button {\n    margin-top: 22px;\n    border: 0;\n    border-radius: 999px;\n    padding: 14px 20px;\n    color: white;\n    background: linear-gradient(135deg, #8b5cf6, #ff2bd6);\n    font-weight: 950;\n}\n.game-orb {\n    width: min(260px, 100%);\n    aspect-ratio: 1;\n    border-radius: 50%;\n    background: radial-gradient(circle at 35% 35%, #fff, transparent 10%), radial-gradient(circle, #ff2bd6, #8b5cf6, transparent 65%);\n    box-shadow: 0 0 60px rgba(255, 43, 214, .55);\n    animation: orbFloat 3s ease-in-out infinite;\n}\n@keyframes orbFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-18px); } }\n/* KIT:game-hero END */",
    "bento-grid": "/* KIT:bento-grid START */\n.bento-grid {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1.4fr 1fr 1fr;\n    gap: 16px;\n}\n.bento-card {\n    min-height: 170px;\n    padding: 24px;\n    border-radius: 24px;\n    background: rgba(255,255,255,.10);\n    border: 1px solid rgba(255,255,255,.16);\n    color: white;\n    box-shadow: inset 0 0 30px rgba(6,247,255,.04);\n}\n.bento-card.big {\n    grid-row: span 2;\n    min-height: 356px;\n    background: linear-gradient(135deg, rgba(6,247,255,.18), rgba(139,92,246,.18));\n}\n.bento-card.wide {\n    grid-column: span 2;\n}\n.bento-card span {\n    color: #06f7ff;\n    font-weight: 950;\n}\n.bento-card h3 {\n    margin-top: 14px;\n    font-size: 28px;\n}\n.bento-card p {\n    margin-top: 10px;\n    color: #cbd5e1;\n    line-height: 1.6;\n}\n/* KIT:bento-grid END */",
    "pro-input": "/* KIT:pro-input START */\n.pro-input {\n    position: relative;\n    width: min(390px, 100%);\n    display: block;\n}\n.pro-input input {\n    width: 100%;\n    border: 1px solid rgba(6, 247, 255, .35);\n    border-radius: 18px;\n    padding: 24px 18px 12px;\n    background: rgba(2, 6, 23, .82);\n    color: white;\n    outline: 0;\n    font-size: 16px;\n    transition: .2s ease;\n}\n.pro-input span {\n    position: absolute;\n    left: 18px;\n    top: 17px;\n    color: #94a3b8;\n    pointer-events: none;\n    transition: .2s ease;\n}\n.pro-input input:focus,\n.pro-input input:not(:placeholder-shown) {\n    border-color: #06f7ff;\n    box-shadow: 0 0 30px rgba(6, 247, 255, .13);\n}\n.pro-input input:focus + span,\n.pro-input input:not(:placeholder-shown) + span {\n    top: 7px;\n    font-size: 12px;\n    color: #06f7ff;\n}\n/* KIT:pro-input END */",
    "search-input-kit": "/* KIT:search-input-kit START */\n.search-input-kit {\n    width: min(520px, 100%);\n    display: flex;\n    gap: 10px;\n    padding: 10px;\n    border-radius: 999px;\n    background: rgba(255,255,255,.94);\n    box-shadow: 0 22px 60px rgba(0,0,0,.25);\n}\n.search-input-kit input {\n    flex: 1;\n    min-width: 0;\n    border: 0;\n    outline: 0;\n    padding: 0 14px;\n    background: transparent;\n    color: #111827;\n    font-size: 16px;\n}\n.search-input-kit button {\n    border: 0;\n    border-radius: 999px;\n    padding: 13px 18px;\n    background: #111827;\n    color: white;\n    font-weight: 950;\n}\n/* KIT:search-input-kit END */",
    "product-card": "/* KIT:product-card START */\n.product-card {\n    width: min(330px, 100%);\n    padding: 16px;\n    border-radius: 28px;\n    background: rgba(255,255,255,.96);\n    color: #111827;\n    box-shadow: 0 30px 70px rgba(0,0,0,.28);\n}\n.product-card-image {\n    height: 180px;\n    border-radius: 22px;\n    background: linear-gradient(135deg, #111827, #d4af37);\n}\n.product-card span {\n    display: inline-flex;\n    margin-top: 14px;\n    padding: 7px 10px;\n    border-radius: 999px;\n    background: #fef3c7;\n    color: #8a5c00;\n    font-weight: 900;\n}\n.product-card h3 {\n    margin: 12px 0 6px;\n    font-size: 26px;\n}\n.product-card p {\n    color: #64748b;\n    line-height: 1.5;\n}\n.product-card-bottom {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    margin-top: 16px;\n}\n.product-card-bottom strong {\n    font-size: 24px;\n}\n.product-card-bottom button {\n    border: 0;\n    border-radius: 14px;\n    padding: 12px 14px;\n    background: #111827;\n    color: white;\n    font-weight: 950;\n}\n/* KIT:product-card END */",
    "profile-card": "/* KIT:profile-card START */\n.profile-card {\n    width: min(330px, 100%);\n    padding: 28px;\n    border-radius: 30px;\n    background: linear-gradient(135deg, rgba(255,43,214,.26), rgba(6,247,255,.18));\n    border: 1px solid rgba(255,255,255,.18);\n    color: white;\n    text-align: center;\n    backdrop-filter: blur(18px);\n}\n.profile-avatar {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 16px;\n    border-radius: 50%;\n    background: radial-gradient(circle at 35% 35%, white, #06f7ff 35%, #8b5cf6 70%);\n    box-shadow: 0 0 40px rgba(6,247,255,.25);\n}\n.profile-card h3 {\n    font-size: 26px;\n}\n.profile-card p {\n    margin: 10px 0 16px;\n    color: #e2e8f0;\n    line-height: 1.5;\n}\n.profile-card div:last-of-type {\n    display: flex;\n    justify-content: center;\n    gap: 8px;\n    flex-wrap: wrap;\n}\n.profile-card span {\n    padding: 8px 11px;\n    border-radius: 999px;\n    background: rgba(255,255,255,.12);\n    font-weight: 900;\n}\n.profile-card button {\n    width: 100%;\n    margin-top: 16px;\n    border: 0;\n    border-radius: 14px;\n    padding: 13px;\n    background: white;\n    color: #111827;\n    font-weight: 950;\n}\n/* KIT:profile-card END */",
    "split-login": "/* KIT:split-login START */\n.split-login {\n    width: min(900px, 100%);\n    min-height: 500px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border-radius: 32px;\n    overflow: hidden;\n    background: #020617;\n    border: 1px solid rgba(255,255,255,.14);\n    box-shadow: 0 30px 90px rgba(0,0,0,.35);\n}\n.split-login-brand {\n    padding: 44px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    background: radial-gradient(circle at top, rgba(6,247,255,.25), transparent 32%), linear-gradient(135deg, #111827, #020617);\n}\n.split-login-brand span {\n    color: #06f7ff;\n    text-transform: uppercase;\n    letter-spacing: .14em;\n    font-weight: 950;\n}\n.split-login-brand h2 {\n    margin: 14px 0;\n    font-size: 44px;\n    line-height: 1;\n}\n.split-login-brand p {\n    color: #cbd5e1;\n    line-height: 1.6;\n}\n.split-login-form {\n    padding: 44px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 14px;\n    background: white;\n    color: #111827;\n}\n.split-login-form h3 {\n    font-size: 30px;\n}\n.split-login-form label {\n    display: grid;\n    gap: 7px;\n    color: #475569;\n    font-weight: 900;\n}\n.split-login-form input {\n    border: 1px solid #dbe3ef;\n    border-radius: 14px;\n    padding: 15px;\n    outline: 0;\n}\n.split-login-form input:focus {\n    border-color: #8b5cf6;\n    box-shadow: 0 0 0 4px rgba(139,92,246,.12);\n}\n.split-login-form button {\n    border: 0;\n    border-radius: 14px;\n    padding: 15px;\n    background: #111827;\n    color: white;\n    font-weight: 950;\n}\n.split-login-form a {\n    color: #8b5cf6;\n    font-weight: 900;\n    text-align: center;\n}\n/* KIT:split-login END */",
    "register-card": "/* KIT:register-card START */\n.register-card {\n    width: min(600px, 100%);\n    padding: 36px;\n    border-radius: 30px;\n    background: rgba(255,255,255,.10);\n    border: 1px solid rgba(255,255,255,.18);\n    color: white;\n    backdrop-filter: blur(18px);\n    box-shadow: 0 28px 80px rgba(0,0,0,.28);\n}\n.register-card span {\n    color: #ff2bd6;\n    text-transform: uppercase;\n    letter-spacing: .14em;\n    font-weight: 950;\n}\n.register-card h3 {\n    margin: 10px 0 18px;\n    font-size: 34px;\n}\n.register-card input {\n    width: 100%;\n    margin-bottom: 12px;\n    border: 1px solid rgba(255,255,255,.16);\n    border-radius: 14px;\n    padding: 15px;\n    background: rgba(255,255,255,.10);\n    color: white;\n    outline: 0;\n}\n.register-card input::placeholder { color: #cbd5e1; }\n.register-row {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n}\n.register-card button {\n    width: 100%;\n    border: 0;\n    border-radius: 14px;\n    padding: 15px;\n    background: linear-gradient(135deg, #8b5cf6, #ff2bd6);\n    color: white;\n    font-weight: 950;\n}\n/* KIT:register-card END */",
    "analytics-dashboard": "/* KIT:analytics-dashboard START */\n.analytics-dashboard {\n    width: 100%;\n    min-height: 560px;\n    display: grid;\n    grid-template-columns: 230px 1fr;\n    border-radius: 30px;\n    overflow: hidden;\n    background: rgba(2,6,23,.84);\n    border: 1px solid rgba(6,247,255,.28);\n    color: white;\n}\n.analytics-dashboard aside {\n    padding: 26px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    background: rgba(255,255,255,.06);\n}\n.analytics-dashboard aside strong {\n    margin-bottom: 16px;\n    color: #06f7ff;\n    font-family: Orbitron, sans-serif;\n    font-size: 26px;\n}\n.analytics-dashboard aside a {\n    padding: 14px;\n    border-radius: 14px;\n    background: rgba(255,255,255,.08);\n    font-weight: 900;\n}\n.analytics-dashboard main {\n    width: 100%;\n    padding: 28px;\n}\n.analytics-dashboard header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n}\n.analytics-dashboard header span {\n    color: #94a3b8;\n    font-weight: 900;\n}\n.analytics-dashboard h3 {\n    font-size: 34px;\n}\n.analytics-dashboard header button {\n    border: 0;\n    border-radius: 14px;\n    padding: 13px 16px;\n    background: #06f7ff;\n    color: #020617;\n    font-weight: 950;\n}\n.metric-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 14px;\n    margin: 24px 0;\n}\n.metric-grid article {\n    padding: 22px;\n    border-radius: 20px;\n    background: rgba(255,255,255,.08);\n}\n.metric-grid span { color: #94a3b8; font-weight: 900; }\n.metric-grid strong {\n    display: block;\n    margin-top: 8px;\n    font-size: 32px;\n}\n.chart-bars {\n    height: 240px;\n    display: flex;\n    align-items: end;\n    gap: 14px;\n    padding: 22px;\n    border-radius: 20px;\n    background: rgba(6,247,255,.07);\n}\n.chart-bars span {\n    flex: 1;\n    border-radius: 14px 14px 0 0;\n    background: linear-gradient(180deg, #06f7ff, rgba(6,247,255,.12));\n}\n.chart-bars span:nth-child(1) { height: 35%; }\n.chart-bars span:nth-child(2) { height: 70%; }\n.chart-bars span:nth-child(3) { height: 50%; }\n.chart-bars span:nth-child(4) { height: 90%; }\n.chart-bars span:nth-child(5) { height: 64%; }\n.chart-bars span:nth-child(6) { height: 78%; }\n/* KIT:analytics-dashboard END */",
    "store-dashboard": "/* KIT:store-dashboard START */\n.store-dashboard {\n    width: 100%;\n    padding: 30px;\n    border-radius: 30px;\n    background: rgba(255,255,255,.94);\n    color: #111827;\n    box-shadow: 0 30px 90px rgba(0,0,0,.3);\n}\n.store-dashboard header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n    margin-bottom: 20px;\n}\n.store-dashboard h3 {\n    font-family: Cinzel, serif;\n    font-size: 34px;\n    color: #9a7418;\n}\n.store-dashboard button {\n    border: 0;\n    border-radius: 14px;\n    padding: 13px 16px;\n    background: #111827;\n    color: white;\n    font-weight: 950;\n}\n.store-dash-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 14px;\n}\n.store-dash-grid article {\n    padding: 20px;\n    border-radius: 20px;\n    background: #f1f5f9;\n}\n.store-dash-grid span {\n    color: #64748b;\n    font-weight: 900;\n}\n.store-dash-grid strong {\n    display: block;\n    margin-top: 8px;\n    font-size: 30px;\n}\n.store-table {\n    margin-top: 18px;\n    border: 1px solid #e2e8f0;\n    border-radius: 20px;\n    overflow: hidden;\n}\n.store-table div {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 10px;\n    padding: 15px;\n    border-bottom: 1px solid #e2e8f0;\n}\n.store-table div:last-child { border-bottom: 0; }\n.store-table div:first-child {\n    background: #111827;\n    color: white;\n}\n/* KIT:store-dashboard END */",
    "footer-mega": "/* KIT:footer-mega START */\n.footer-mega {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1.3fr .8fr .8fr 1fr;\n    gap: 24px;\n    padding: 34px;\n    border-radius: 28px;\n    background: rgba(2,6,23,.84);\n    border: 1px solid rgba(6,247,255,.24);\n    color: white;\n}\n.footer-mega strong {\n    display: block;\n    margin-bottom: 10px;\n    color: #06f7ff;\n    font-size: 28px;\n}\n.footer-mega p,\n.footer-mega a {\n    color: #cbd5e1;\n    line-height: 1.7;\n}\n.footer-mega nav,\n.footer-mega form {\n    display: flex;\n    flex-direction: column;\n    gap: 9px;\n}\n.footer-mega b {\n    color: white;\n}\n.footer-mega input {\n    border: 1px solid rgba(255,255,255,.16);\n    border-radius: 14px;\n    padding: 13px;\n    background: rgba(255,255,255,.08);\n    color: white;\n    outline: 0;\n}\n.footer-mega button {\n    border: 0;\n    border-radius: 14px;\n    padding: 13px;\n    background: #06f7ff;\n    color: #020617;\n    font-weight: 950;\n}\n/* KIT:footer-mega END */",
    "footer-vinyl": "/* KIT:footer-vinyl START */\n.footer-vinyl {\n    width: min(760px, 100%);\n    display: flex;\n    align-items: center;\n    gap: 28px;\n    padding: 30px;\n    border-radius: 28px;\n    background: rgba(0,0,0,.55);\n    border: 1px solid rgba(255,255,255,.14);\n    color: white;\n}\n.vinyl-disc {\n    width: 120px;\n    height: 120px;\n    flex: 0 0 120px;\n    border-radius: 50%;\n    background: radial-gradient(circle, #ff2bd6 0 12%, #111 13% 18%, #000 19% 100%);\n    box-shadow: 0 0 35px rgba(255,43,214,.28);\n    animation: vinylSpin 4s linear infinite;\n}\n.footer-vinyl h3 {\n    color: #ff2bd6;\n    font-size: 30px;\n}\n.footer-vinyl p {\n    color: #e2e8f0;\n    margin: 6px 0 12px;\n}\n.footer-vinyl a {\n    display: inline-flex;\n    margin: 0 14px 0 0;\n    color: white;\n    font-weight: 900;\n}\n@keyframes vinylSpin { to { transform: rotate(360deg); } }\n/* KIT:footer-vinyl END */",
    "aurum-site": "/* KIT:aurum-site START */\n.aurum-site {\n    width: 100%;\n    min-height: 760px;\n    overflow: hidden;\n    border-radius: 28px;\n    background: radial-gradient(circle at 80% 10%, rgba(212,175,55,.24), transparent 28%), linear-gradient(135deg, #050505, #16120a);\n    color: white;\n}\n.aurum-site nav {\n    display: flex;\n    align-items: center;\n    gap: 22px;\n    padding: 24px 34px;\n    background: rgba(255,255,255,.06);\n    backdrop-filter: blur(14px);\n}\n.aurum-site nav strong {\n    margin-right: auto;\n    color: #d4af37;\n    font-family: Cinzel, serif;\n    font-size: 28px;\n}\n.aurum-site nav a {\n    color: white;\n    font-weight: 900;\n}\n.aurum-site nav button,\n.aurum-site header button {\n    border: 1px solid #d4af37;\n    border-radius: 999px;\n    padding: 13px 19px;\n    background: transparent;\n    color: #d4af37;\n    font-weight: 950;\n}\n.aurum-site header {\n    padding: 90px 34px 58px;\n    text-align: center;\n}\n.aurum-site header span {\n    color: #d4af37;\n    text-transform: uppercase;\n    letter-spacing: .16em;\n    font-weight: 950;\n}\n.aurum-site header h2 {\n    max-width: 900px;\n    margin: 16px auto;\n    font-family: Cinzel, serif;\n    font-size: clamp(46px, 8vw, 92px);\n    line-height: .92;\n}\n.aurum-site header p {\n    max-width: 640px;\n    margin: 0 auto 24px;\n    color: #d6d3d1;\n}\n.aurum-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 18px;\n    padding: 0 34px 34px;\n}\n.aurum-grid article {\n    min-height: 220px;\n    display: grid;\n    place-items: end start;\n    padding: 24px;\n    border-radius: 24px;\n    border: 1px solid rgba(212,175,55,.24);\n    background: rgba(255,255,255,.07);\n    color: #d4af37;\n    font-family: Cinzel, serif;\n    font-size: 40px;\n}\n.aurum-site footer {\n    padding: 24px;\n    text-align: center;\n    color: #d6d3d1;\n    background: rgba(0,0,0,.20);\n}\n/* KIT:aurum-site END */",
    "saas-site": "/* KIT:saas-site START */\n.saas-site {\n    width: 100%;\n    min-height: 760px;\n    overflow: hidden;\n    border-radius: 28px;\n    background: radial-gradient(circle at 20% 20%, rgba(6,247,255,.20), transparent 30%), linear-gradient(135deg, #020617, #111827);\n    color: white;\n}\n.saas-site nav {\n    display: flex;\n    align-items: center;\n    gap: 22px;\n    padding: 24px 34px;\n    background: rgba(255,255,255,.06);\n}\n.saas-site nav strong {\n    margin-right: auto;\n    color: #06f7ff;\n    font-size: 28px;\n}\n.saas-site nav a {\n    font-weight: 900;\n}\n.saas-site nav button,\n.saas-site header button {\n    border: 0;\n    border-radius: 999px;\n    padding: 13px 19px;\n    background: #06f7ff;\n    color: #020617;\n    font-weight: 950;\n}\n.saas-site header {\n    padding: 88px 34px 50px;\n    text-align: center;\n}\n.saas-site header span {\n    color: #06f7ff;\n    text-transform: uppercase;\n    letter-spacing: .16em;\n    font-weight: 950;\n}\n.saas-site header h2 {\n    max-width: 900px;\n    margin: 16px auto;\n    font-size: clamp(48px, 8vw, 96px);\n    line-height: .9;\n    letter-spacing: -.07em;\n}\n.saas-site header p {\n    max-width: 660px;\n    margin: 0 auto 24px;\n    color: #cbd5e1;\n    line-height: 1.6;\n}\n.saas-cards {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 18px;\n    padding: 0 34px 38px;\n}\n.saas-cards article {\n    min-height: 190px;\n    padding: 24px;\n    border-radius: 24px;\n    background: rgba(255,255,255,.09);\n    border: 1px solid rgba(255,255,255,.14);\n    font-size: 24px;\n    font-weight: 950;\n}\n.saas-site footer {\n    padding: 24px;\n    text-align: center;\n    background: rgba(0,0,0,.18);\n    color: #cbd5e1;\n}\n/* KIT:saas-site END */"
};

const allCssText = "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --bg: #070914;\n    --panel: #111827;\n    --soft: rgba(255, 255, 255, .075);\n    --line: rgba(255, 255, 255, .13);\n    --text: #f8fafc;\n    --muted: #94a3b8;\n    --purple: #8b5cf6;\n    --cyan: #06f7ff;\n    --pink: #ff2bd6;\n    --gold: #d4af37;\n    --green: #4ade80;\n    --red: #ff2f4f;\n}\n\nbody {\n    min-height: 100vh;\n    background:\n        radial-gradient(circle at top left, rgba(139, 92, 246, .18), transparent 32%),\n        radial-gradient(circle at top right, rgba(6, 247, 255, .10), transparent 30%),\n        var(--bg);\n    color: var(--text);\n    font-family: Inter, Arial, sans-serif;\n}\n\na { color: inherit; text-decoration: none; }\nbutton { font-family: inherit; cursor: pointer; }\n\n.topbar {\n    position: sticky;\n    top: 0;\n    z-index: 50;\n    min-height: 76px;\n    padding: 16px 5%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 20px;\n    background: rgba(7, 9, 20, .82);\n    border-bottom: 1px solid var(--line);\n    backdrop-filter: blur(18px);\n}\n\n.logo {\n    font-size: 24px;\n    font-weight: 950;\n    letter-spacing: -.05em;\n}\n\n.logo span { color: var(--cyan); }\n\n.nav {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-wrap: wrap;\n}\n\n.nav a {\n    padding: 10px 13px;\n    border-radius: 999px;\n    color: #cbd5e1;\n    font-weight: 800;\n    font-size: 14px;\n}\n\n.nav a:hover,\n.nav a.active {\n    background: rgba(255, 255, 255, .10);\n    color: white;\n}\n\n.back-home {\n    position: fixed;\n    right: 22px;\n    bottom: 22px;\n    z-index: 60;\n    padding: 13px 18px;\n    border-radius: 999px;\n    background: linear-gradient(135deg, var(--purple), var(--cyan));\n    color: white;\n    font-weight: 950;\n    box-shadow: 0 18px 50px rgba(0, 0, 0, .35);\n}\n\nmain {\n    width: min(1440px, 92%);\n    margin: 0 auto;\n}\n\n.mega-hero {\n    padding: 84px 0 42px;\n}\n\n.pill {\n    display: inline-flex;\n    padding: 10px 14px;\n    border: 1px solid rgba(6, 247, 255, .35);\n    border-radius: 999px;\n    color: var(--cyan);\n    font-weight: 950;\n    background: rgba(6, 247, 255, .07);\n}\n\n.mega-hero h1 {\n    max-width: 1120px;\n    margin: 18px 0;\n    font-size: clamp(42px, 7vw, 96px);\n    line-height: .9;\n    letter-spacing: -.07em;\n    background: linear-gradient(135deg, #fff, var(--cyan), var(--pink), var(--gold));\n    -webkit-background-clip: text;\n    color: transparent;\n}\n\n.mega-hero p {\n    max-width: 820px;\n    color: #cbd5e1;\n    font-size: 18px;\n    line-height: 1.65;\n}\n\n.hero-actions {\n    display: flex;\n    gap: 12px;\n    flex-wrap: wrap;\n    margin-top: 24px;\n}\n\n.hero-actions a,\n.hero-actions button {\n    border: 1px solid var(--line);\n    border-radius: 999px;\n    padding: 14px 18px;\n    background: rgba(255, 255, 255, .08);\n    color: white;\n    font-weight: 950;\n}\n\n.hero-actions .primary-action {\n    background: linear-gradient(135deg, var(--purple), var(--pink));\n    border: 0;\n}\n\n.toolbar {\n    position: sticky;\n    top: 76px;\n    z-index: 45;\n    padding: 14px 0 18px;\n    display: grid;\n    grid-template-columns: 1fr minmax(240px, 380px);\n    gap: 12px;\n    background: linear-gradient(180deg, var(--bg) 70%, rgba(7, 9, 20, .25));\n}\n\n.filters {\n    display: flex;\n    gap: 8px;\n    flex-wrap: wrap;\n}\n\n.filter-btn,\n.search-input {\n    border: 1px solid var(--line);\n    background: rgba(255, 255, 255, .075);\n    color: white;\n    border-radius: 999px;\n    padding: 12px 15px;\n    font-weight: 900;\n    outline: 0;\n}\n\n.filter-btn.active,\n.filter-btn:hover {\n    background: white;\n    color: #080b14;\n}\n\n.search-input {\n    width: 100%;\n    border-radius: 16px;\n}\n\n.kits-grid {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 24px;\n    padding: 24px 0 90px;\n}\n\n.kit-box {\n    border: 1px solid var(--line);\n    border-radius: 30px;\n    padding: 18px;\n    background:\n        radial-gradient(circle at 20% 0, rgba(139, 92, 246, .13), transparent 30%),\n        rgba(255, 255, 255, .055);\n    box-shadow: 0 24px 80px rgba(0, 0, 0, .28);\n    overflow: hidden;\n}\n\n.kit-box.wide,\n.kit-box.full { grid-column: 1 / -1; }\n\n.kit-info {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    margin-bottom: 14px;\n}\n\n.kit-info h3 {\n    font-size: 24px;\n    letter-spacing: -.04em;\n}\n\n.kit-info span,\n.kit-info small {\n    color: var(--muted);\n    text-transform: uppercase;\n    letter-spacing: .14em;\n    font-weight: 950;\n    font-size: 12px;\n}\n\n.preview-shell {\n    min-height: 310px;\n    padding: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 24px;\n    border: 1px solid var(--line);\n    overflow: auto;\n    background: #0f172a;\n}\n\n.kit-box.full .preview-shell { min-height: 520px; }\n.kit-box.wide .preview-shell { min-height: 390px; }\n\n.code-actions {\n    display: flex;\n    gap: 10px;\n    flex-wrap: wrap;\n    margin-top: 14px;\n}\n\n.code-actions button {\n    border: 0;\n    border-radius: 14px;\n    padding: 12px 14px;\n    background: #1f2937;\n    color: white;\n    font-weight: 950;\n}\n\n.code-actions button:first-child {\n    background: linear-gradient(135deg, var(--purple), var(--pink));\n}\n\n.code-actions button:hover {\n    transform: translateY(-2px);\n    filter: brightness(1.15);\n}\n\n.code-view {\n    margin-top: 12px;\n    border-radius: 16px;\n    border: 1px solid var(--line);\n    background: rgba(0, 0, 0, .22);\n    overflow: hidden;\n}\n\n.code-view summary {\n    padding: 12px 14px;\n    font-weight: 900;\n    cursor: pointer;\n}\n\n.code-view pre {\n    padding: 14px;\n    overflow: auto;\n    color: #c4b5fd;\n    font-size: 13px;\n}\n\n.toast {\n    position: fixed;\n    left: 50%;\n    bottom: 24px;\n    z-index: 90;\n    transform: translate(-50%, 30px);\n    opacity: 0;\n    padding: 13px 18px;\n    border-radius: 999px;\n    background: white;\n    color: #080b14;\n    font-weight: 950;\n    transition: .25s ease;\n}\n\n.toast.show {\n    opacity: 1;\n    transform: translate(-50%, 0);\n}\n\n.empty-message {\n    color: var(--muted);\n    font-weight: 900;\n}\n\n.game-bg {\n    background: radial-gradient(circle at center, rgba(139,92,246,.28), transparent 30%), #080012;\n}\n.future-bg {\n    background:\n        linear-gradient(rgba(6,247,255,.08) 1px, transparent 1px),\n        linear-gradient(90deg, rgba(6,247,255,.08) 1px, transparent 1px),\n        radial-gradient(circle at 70% 20%, rgba(6,247,255,.20), transparent 25%),\n        #020617;\n    background-size: 34px 34px, 34px 34px, auto, auto;\n}\n.luxo-bg {\n    background: radial-gradient(circle at 80% 20%, rgba(212,175,55,.20), transparent 28%), linear-gradient(135deg, #050505, #16120a);\n}\n.music-bg {\n    background: radial-gradient(circle at 35% 35%, rgba(255,43,214,.24), transparent 20%), radial-gradient(circle at 70% 55%, rgba(6,247,255,.18), transparent 24%), #090014;\n}\n\n/* KIT:boss-btn START */\n.boss-btn {\n    position: relative;\n    padding: 18px 34px;\n    border: 3px solid #fff;\n    background: linear-gradient(135deg, #8b5cf6, #ff2bd6);\n    color: white;\n    text-transform: uppercase;\n    font-weight: 950;\n    cursor: pointer;\n    box-shadow: 8px 8px 0 #000, 0 0 40px rgba(255, 43, 214, .35);\n    clip-path: polygon(8% 0, 100% 0, 92% 100%, 0 100%);\n    transition: .25s ease;\n}\n.boss-btn:hover {\n    transform: translate(-4px, -4px);\n    box-shadow: 14px 14px 0 #000, 0 0 60px rgba(255, 43, 214, .55);\n}\n/* KIT:boss-btn END */\n\n/* KIT:liquid-btn START */\n.liquid-btn {\n    position: relative;\n    isolation: isolate;\n    overflow: hidden;\n    border: 0;\n    border-radius: 999px;\n    padding: 18px 34px;\n    background: #020617;\n    color: white;\n    font-weight: 950;\n    box-shadow: 0 0 0 1px rgba(6, 247, 255, .35), 0 20px 60px rgba(6, 247, 255, .18);\n}\n.liquid-btn::before {\n    content: \"\";\n    position: absolute;\n    inset: -60%;\n    z-index: -1;\n    background: conic-gradient(from 90deg, #06f7ff, #8b5cf6, #ff2bd6, #06f7ff);\n    animation: liquidSpin 3s linear infinite;\n}\n.liquid-btn::after {\n    content: \"\";\n    position: absolute;\n    inset: 3px;\n    z-index: -1;\n    border-radius: inherit;\n    background: #020617;\n}\n@keyframes liquidSpin { to { transform: rotate(360deg); } }\n/* KIT:liquid-btn END */\n\n/* KIT:store-nav START */\n.store-nav {\n    width: min(960px, 100%);\n    display: flex;\n    align-items: center;\n    gap: 22px;\n    padding: 18px 22px;\n    border-radius: 24px;\n    background: rgba(255, 255, 255, .94);\n    color: #111827;\n    box-shadow: 0 24px 70px rgba(0, 0, 0, .25);\n}\n.store-nav strong {\n    margin-right: auto;\n    color: #9a7418;\n    font-family: Cinzel, serif;\n    font-size: 28px;\n}\n.store-nav-links,\n.store-nav-actions {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n}\n.store-nav a {\n    color: #111827;\n    font-weight: 900;\n}\n.store-nav button {\n    border: 0;\n    border-radius: 999px;\n    padding: 12px 16px;\n    background: #111827;\n    color: white;\n    font-weight: 950;\n}\n/* KIT:store-nav END */\n\n/* KIT:holo-nav START */\n.holo-nav {\n    width: min(920px, 100%);\n    display: flex;\n    align-items: center;\n    gap: 22px;\n    padding: 18px 24px;\n    border-radius: 24px;\n    background: rgba(2, 6, 23, .72);\n    border: 1px solid rgba(6, 247, 255, .35);\n    backdrop-filter: blur(18px);\n    box-shadow: 0 0 45px rgba(6, 247, 255, .14);\n}\n.holo-nav strong {\n    margin-right: auto;\n    color: #06f7ff;\n    font-family: Orbitron, sans-serif;\n}\n.holo-nav a {\n    color: white;\n    font-weight: 900;\n}\n.holo-nav button {\n    border: 0;\n    border-radius: 999px;\n    padding: 12px 18px;\n    color: white;\n    background: linear-gradient(135deg, #06f7ff, #8b5cf6);\n    font-weight: 950;\n}\n/* KIT:holo-nav END */\n\n/* KIT:game-hero START */\n.game-hero {\n    width: 100%;\n    min-height: 470px;\n    position: relative;\n    overflow: hidden;\n    border-radius: 30px;\n    display: grid;\n    grid-template-columns: 1fr .7fr;\n    align-items: center;\n    gap: 28px;\n    padding: 50px;\n    background: radial-gradient(circle at 73% 45%, rgba(139, 92, 246, .48), transparent 24%), radial-gradient(circle at 76% 45%, rgba(255, 43, 214, .35), transparent 34%), linear-gradient(135deg, #080012, #020617);\n}\n.scanlines {\n    position: absolute;\n    inset: 0;\n    background: repeating-linear-gradient(0deg, rgba(255,255,255,.055) 0 1px, transparent 1px 5px);\n    pointer-events: none;\n}\n.game-hero-content {\n    position: relative;\n    z-index: 2;\n}\n.game-hero span {\n    color: #ff2bd6;\n    font-weight: 950;\n    text-transform: uppercase;\n    letter-spacing: .14em;\n}\n.game-hero h2 {\n    margin: 12px 0;\n    font-size: clamp(44px, 7vw, 88px);\n    line-height: .88;\n    letter-spacing: -.06em;\n}\n.game-hero p {\n    max-width: 560px;\n    color: #dbeafe;\n    line-height: 1.65;\n}\n.game-hero button {\n    margin-top: 22px;\n    border: 0;\n    border-radius: 999px;\n    padding: 14px 20px;\n    color: white;\n    background: linear-gradient(135deg, #8b5cf6, #ff2bd6);\n    font-weight: 950;\n}\n.game-orb {\n    width: min(260px, 100%);\n    aspect-ratio: 1;\n    border-radius: 50%;\n    background: radial-gradient(circle at 35% 35%, #fff, transparent 10%), radial-gradient(circle, #ff2bd6, #8b5cf6, transparent 65%);\n    box-shadow: 0 0 60px rgba(255, 43, 214, .55);\n    animation: orbFloat 3s ease-in-out infinite;\n}\n@keyframes orbFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-18px); } }\n/* KIT:game-hero END */\n\n/* KIT:bento-grid START */\n.bento-grid {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1.4fr 1fr 1fr;\n    gap: 16px;\n}\n.bento-card {\n    min-height: 170px;\n    padding: 24px;\n    border-radius: 24px;\n    background: rgba(255,255,255,.10);\n    border: 1px solid rgba(255,255,255,.16);\n    color: white;\n    box-shadow: inset 0 0 30px rgba(6,247,255,.04);\n}\n.bento-card.big {\n    grid-row: span 2;\n    min-height: 356px;\n    background: linear-gradient(135deg, rgba(6,247,255,.18), rgba(139,92,246,.18));\n}\n.bento-card.wide {\n    grid-column: span 2;\n}\n.bento-card span {\n    color: #06f7ff;\n    font-weight: 950;\n}\n.bento-card h3 {\n    margin-top: 14px;\n    font-size: 28px;\n}\n.bento-card p {\n    margin-top: 10px;\n    color: #cbd5e1;\n    line-height: 1.6;\n}\n/* KIT:bento-grid END */\n\n/* KIT:pro-input START */\n.pro-input {\n    position: relative;\n    width: min(390px, 100%);\n    display: block;\n}\n.pro-input input {\n    width: 100%;\n    border: 1px solid rgba(6, 247, 255, .35);\n    border-radius: 18px;\n    padding: 24px 18px 12px;\n    background: rgba(2, 6, 23, .82);\n    color: white;\n    outline: 0;\n    font-size: 16px;\n    transition: .2s ease;\n}\n.pro-input span {\n    position: absolute;\n    left: 18px;\n    top: 17px;\n    color: #94a3b8;\n    pointer-events: none;\n    transition: .2s ease;\n}\n.pro-input input:focus,\n.pro-input input:not(:placeholder-shown) {\n    border-color: #06f7ff;\n    box-shadow: 0 0 30px rgba(6, 247, 255, .13);\n}\n.pro-input input:focus + span,\n.pro-input input:not(:placeholder-shown) + span {\n    top: 7px;\n    font-size: 12px;\n    color: #06f7ff;\n}\n/* KIT:pro-input END */\n\n/* KIT:search-input-kit START */\n.search-input-kit {\n    width: min(520px, 100%);\n    display: flex;\n    gap: 10px;\n    padding: 10px;\n    border-radius: 999px;\n    background: rgba(255,255,255,.94);\n    box-shadow: 0 22px 60px rgba(0,0,0,.25);\n}\n.search-input-kit input {\n    flex: 1;\n    min-width: 0;\n    border: 0;\n    outline: 0;\n    padding: 0 14px;\n    background: transparent;\n    color: #111827;\n    font-size: 16px;\n}\n.search-input-kit button {\n    border: 0;\n    border-radius: 999px;\n    padding: 13px 18px;\n    background: #111827;\n    color: white;\n    font-weight: 950;\n}\n/* KIT:search-input-kit END */\n\n/* KIT:product-card START */\n.product-card {\n    width: min(330px, 100%);\n    padding: 16px;\n    border-radius: 28px;\n    background: rgba(255,255,255,.96);\n    color: #111827;\n    box-shadow: 0 30px 70px rgba(0,0,0,.28);\n}\n.product-card-image {\n    height: 180px;\n    border-radius: 22px;\n    background: linear-gradient(135deg, #111827, #d4af37);\n}\n.product-card span {\n    display: inline-flex;\n    margin-top: 14px;\n    padding: 7px 10px;\n    border-radius: 999px;\n    background: #fef3c7;\n    color: #8a5c00;\n    font-weight: 900;\n}\n.product-card h3 {\n    margin: 12px 0 6px;\n    font-size: 26px;\n}\n.product-card p {\n    color: #64748b;\n    line-height: 1.5;\n}\n.product-card-bottom {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    margin-top: 16px;\n}\n.product-card-bottom strong {\n    font-size: 24px;\n}\n.product-card-bottom button {\n    border: 0;\n    border-radius: 14px;\n    padding: 12px 14px;\n    background: #111827;\n    color: white;\n    font-weight: 950;\n}\n/* KIT:product-card END */\n\n/* KIT:profile-card START */\n.profile-card {\n    width: min(330px, 100%);\n    padding: 28px;\n    border-radius: 30px;\n    background: linear-gradient(135deg, rgba(255,43,214,.26), rgba(6,247,255,.18));\n    border: 1px solid rgba(255,255,255,.18);\n    color: white;\n    text-align: center;\n    backdrop-filter: blur(18px);\n}\n.profile-avatar {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 16px;\n    border-radius: 50%;\n    background: radial-gradient(circle at 35% 35%, white, #06f7ff 35%, #8b5cf6 70%);\n    box-shadow: 0 0 40px rgba(6,247,255,.25);\n}\n.profile-card h3 {\n    font-size: 26px;\n}\n.profile-card p {\n    margin: 10px 0 16px;\n    color: #e2e8f0;\n    line-height: 1.5;\n}\n.profile-card div:last-of-type {\n    display: flex;\n    justify-content: center;\n    gap: 8px;\n    flex-wrap: wrap;\n}\n.profile-card span {\n    padding: 8px 11px;\n    border-radius: 999px;\n    background: rgba(255,255,255,.12);\n    font-weight: 900;\n}\n.profile-card button {\n    width: 100%;\n    margin-top: 16px;\n    border: 0;\n    border-radius: 14px;\n    padding: 13px;\n    background: white;\n    color: #111827;\n    font-weight: 950;\n}\n/* KIT:profile-card END */\n\n/* KIT:split-login START */\n.split-login {\n    width: min(900px, 100%);\n    min-height: 500px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border-radius: 32px;\n    overflow: hidden;\n    background: #020617;\n    border: 1px solid rgba(255,255,255,.14);\n    box-shadow: 0 30px 90px rgba(0,0,0,.35);\n}\n.split-login-brand {\n    padding: 44px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    background: radial-gradient(circle at top, rgba(6,247,255,.25), transparent 32%), linear-gradient(135deg, #111827, #020617);\n}\n.split-login-brand span {\n    color: #06f7ff;\n    text-transform: uppercase;\n    letter-spacing: .14em;\n    font-weight: 950;\n}\n.split-login-brand h2 {\n    margin: 14px 0;\n    font-size: 44px;\n    line-height: 1;\n}\n.split-login-brand p {\n    color: #cbd5e1;\n    line-height: 1.6;\n}\n.split-login-form {\n    padding: 44px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 14px;\n    background: white;\n    color: #111827;\n}\n.split-login-form h3 {\n    font-size: 30px;\n}\n.split-login-form label {\n    display: grid;\n    gap: 7px;\n    color: #475569;\n    font-weight: 900;\n}\n.split-login-form input {\n    border: 1px solid #dbe3ef;\n    border-radius: 14px;\n    padding: 15px;\n    outline: 0;\n}\n.split-login-form input:focus {\n    border-color: #8b5cf6;\n    box-shadow: 0 0 0 4px rgba(139,92,246,.12);\n}\n.split-login-form button {\n    border: 0;\n    border-radius: 14px;\n    padding: 15px;\n    background: #111827;\n    color: white;\n    font-weight: 950;\n}\n.split-login-form a {\n    color: #8b5cf6;\n    font-weight: 900;\n    text-align: center;\n}\n/* KIT:split-login END */\n\n/* KIT:register-card START */\n.register-card {\n    width: min(600px, 100%);\n    padding: 36px;\n    border-radius: 30px;\n    background: rgba(255,255,255,.10);\n    border: 1px solid rgba(255,255,255,.18);\n    color: white;\n    backdrop-filter: blur(18px);\n    box-shadow: 0 28px 80px rgba(0,0,0,.28);\n}\n.register-card span {\n    color: #ff2bd6;\n    text-transform: uppercase;\n    letter-spacing: .14em;\n    font-weight: 950;\n}\n.register-card h3 {\n    margin: 10px 0 18px;\n    font-size: 34px;\n}\n.register-card input {\n    width: 100%;\n    margin-bottom: 12px;\n    border: 1px solid rgba(255,255,255,.16);\n    border-radius: 14px;\n    padding: 15px;\n    background: rgba(255,255,255,.10);\n    color: white;\n    outline: 0;\n}\n.register-card input::placeholder { color: #cbd5e1; }\n.register-row {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n}\n.register-card button {\n    width: 100%;\n    border: 0;\n    border-radius: 14px;\n    padding: 15px;\n    background: linear-gradient(135deg, #8b5cf6, #ff2bd6);\n    color: white;\n    font-weight: 950;\n}\n/* KIT:register-card END */\n\n/* KIT:analytics-dashboard START */\n.analytics-dashboard {\n    width: 100%;\n    min-height: 560px;\n    display: grid;\n    grid-template-columns: 230px 1fr;\n    border-radius: 30px;\n    overflow: hidden;\n    background: rgba(2,6,23,.84);\n    border: 1px solid rgba(6,247,255,.28);\n    color: white;\n}\n.analytics-dashboard aside {\n    padding: 26px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    background: rgba(255,255,255,.06);\n}\n.analytics-dashboard aside strong {\n    margin-bottom: 16px;\n    color: #06f7ff;\n    font-family: Orbitron, sans-serif;\n    font-size: 26px;\n}\n.analytics-dashboard aside a {\n    padding: 14px;\n    border-radius: 14px;\n    background: rgba(255,255,255,.08);\n    font-weight: 900;\n}\n.analytics-dashboard main {\n    width: 100%;\n    padding: 28px;\n}\n.analytics-dashboard header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n}\n.analytics-dashboard header span {\n    color: #94a3b8;\n    font-weight: 900;\n}\n.analytics-dashboard h3 {\n    font-size: 34px;\n}\n.analytics-dashboard header button {\n    border: 0;\n    border-radius: 14px;\n    padding: 13px 16px;\n    background: #06f7ff;\n    color: #020617;\n    font-weight: 950;\n}\n.metric-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 14px;\n    margin: 24px 0;\n}\n.metric-grid article {\n    padding: 22px;\n    border-radius: 20px;\n    background: rgba(255,255,255,.08);\n}\n.metric-grid span { color: #94a3b8; font-weight: 900; }\n.metric-grid strong {\n    display: block;\n    margin-top: 8px;\n    font-size: 32px;\n}\n.chart-bars {\n    height: 240px;\n    display: flex;\n    align-items: end;\n    gap: 14px;\n    padding: 22px;\n    border-radius: 20px;\n    background: rgba(6,247,255,.07);\n}\n.chart-bars span {\n    flex: 1;\n    border-radius: 14px 14px 0 0;\n    background: linear-gradient(180deg, #06f7ff, rgba(6,247,255,.12));\n}\n.chart-bars span:nth-child(1) { height: 35%; }\n.chart-bars span:nth-child(2) { height: 70%; }\n.chart-bars span:nth-child(3) { height: 50%; }\n.chart-bars span:nth-child(4) { height: 90%; }\n.chart-bars span:nth-child(5) { height: 64%; }\n.chart-bars span:nth-child(6) { height: 78%; }\n/* KIT:analytics-dashboard END */\n\n/* KIT:store-dashboard START */\n.store-dashboard {\n    width: 100%;\n    padding: 30px;\n    border-radius: 30px;\n    background: rgba(255,255,255,.94);\n    color: #111827;\n    box-shadow: 0 30px 90px rgba(0,0,0,.3);\n}\n.store-dashboard header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n    margin-bottom: 20px;\n}\n.store-dashboard h3 {\n    font-family: Cinzel, serif;\n    font-size: 34px;\n    color: #9a7418;\n}\n.store-dashboard button {\n    border: 0;\n    border-radius: 14px;\n    padding: 13px 16px;\n    background: #111827;\n    color: white;\n    font-weight: 950;\n}\n.store-dash-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 14px;\n}\n.store-dash-grid article {\n    padding: 20px;\n    border-radius: 20px;\n    background: #f1f5f9;\n}\n.store-dash-grid span {\n    color: #64748b;\n    font-weight: 900;\n}\n.store-dash-grid strong {\n    display: block;\n    margin-top: 8px;\n    font-size: 30px;\n}\n.store-table {\n    margin-top: 18px;\n    border: 1px solid #e2e8f0;\n    border-radius: 20px;\n    overflow: hidden;\n}\n.store-table div {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 10px;\n    padding: 15px;\n    border-bottom: 1px solid #e2e8f0;\n}\n.store-table div:last-child { border-bottom: 0; }\n.store-table div:first-child {\n    background: #111827;\n    color: white;\n}\n/* KIT:store-dashboard END */\n\n/* KIT:footer-mega START */\n.footer-mega {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1.3fr .8fr .8fr 1fr;\n    gap: 24px;\n    padding: 34px;\n    border-radius: 28px;\n    background: rgba(2,6,23,.84);\n    border: 1px solid rgba(6,247,255,.24);\n    color: white;\n}\n.footer-mega strong {\n    display: block;\n    margin-bottom: 10px;\n    color: #06f7ff;\n    font-size: 28px;\n}\n.footer-mega p,\n.footer-mega a {\n    color: #cbd5e1;\n    line-height: 1.7;\n}\n.footer-mega nav,\n.footer-mega form {\n    display: flex;\n    flex-direction: column;\n    gap: 9px;\n}\n.footer-mega b {\n    color: white;\n}\n.footer-mega input {\n    border: 1px solid rgba(255,255,255,.16);\n    border-radius: 14px;\n    padding: 13px;\n    background: rgba(255,255,255,.08);\n    color: white;\n    outline: 0;\n}\n.footer-mega button {\n    border: 0;\n    border-radius: 14px;\n    padding: 13px;\n    background: #06f7ff;\n    color: #020617;\n    font-weight: 950;\n}\n/* KIT:footer-mega END */\n\n/* KIT:footer-vinyl START */\n.footer-vinyl {\n    width: min(760px, 100%);\n    display: flex;\n    align-items: center;\n    gap: 28px;\n    padding: 30px;\n    border-radius: 28px;\n    background: rgba(0,0,0,.55);\n    border: 1px solid rgba(255,255,255,.14);\n    color: white;\n}\n.vinyl-disc {\n    width: 120px;\n    height: 120px;\n    flex: 0 0 120px;\n    border-radius: 50%;\n    background: radial-gradient(circle, #ff2bd6 0 12%, #111 13% 18%, #000 19% 100%);\n    box-shadow: 0 0 35px rgba(255,43,214,.28);\n    animation: vinylSpin 4s linear infinite;\n}\n.footer-vinyl h3 {\n    color: #ff2bd6;\n    font-size: 30px;\n}\n.footer-vinyl p {\n    color: #e2e8f0;\n    margin: 6px 0 12px;\n}\n.footer-vinyl a {\n    display: inline-flex;\n    margin: 0 14px 0 0;\n    color: white;\n    font-weight: 900;\n}\n@keyframes vinylSpin { to { transform: rotate(360deg); } }\n/* KIT:footer-vinyl END */\n\n/* KIT:aurum-site START */\n.aurum-site {\n    width: 100%;\n    min-height: 760px;\n    overflow: hidden;\n    border-radius: 28px;\n    background: radial-gradient(circle at 80% 10%, rgba(212,175,55,.24), transparent 28%), linear-gradient(135deg, #050505, #16120a);\n    color: white;\n}\n.aurum-site nav {\n    display: flex;\n    align-items: center;\n    gap: 22px;\n    padding: 24px 34px;\n    background: rgba(255,255,255,.06);\n    backdrop-filter: blur(14px);\n}\n.aurum-site nav strong {\n    margin-right: auto;\n    color: #d4af37;\n    font-family: Cinzel, serif;\n    font-size: 28px;\n}\n.aurum-site nav a {\n    color: white;\n    font-weight: 900;\n}\n.aurum-site nav button,\n.aurum-site header button {\n    border: 1px solid #d4af37;\n    border-radius: 999px;\n    padding: 13px 19px;\n    background: transparent;\n    color: #d4af37;\n    font-weight: 950;\n}\n.aurum-site header {\n    padding: 90px 34px 58px;\n    text-align: center;\n}\n.aurum-site header span {\n    color: #d4af37;\n    text-transform: uppercase;\n    letter-spacing: .16em;\n    font-weight: 950;\n}\n.aurum-site header h2 {\n    max-width: 900px;\n    margin: 16px auto;\n    font-family: Cinzel, serif;\n    font-size: clamp(46px, 8vw, 92px);\n    line-height: .92;\n}\n.aurum-site header p {\n    max-width: 640px;\n    margin: 0 auto 24px;\n    color: #d6d3d1;\n}\n.aurum-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 18px;\n    padding: 0 34px 34px;\n}\n.aurum-grid article {\n    min-height: 220px;\n    display: grid;\n    place-items: end start;\n    padding: 24px;\n    border-radius: 24px;\n    border: 1px solid rgba(212,175,55,.24);\n    background: rgba(255,255,255,.07);\n    color: #d4af37;\n    font-family: Cinzel, serif;\n    font-size: 40px;\n}\n.aurum-site footer {\n    padding: 24px;\n    text-align: center;\n    color: #d6d3d1;\n    background: rgba(0,0,0,.20);\n}\n/* KIT:aurum-site END */\n\n/* KIT:saas-site START */\n.saas-site {\n    width: 100%;\n    min-height: 760px;\n    overflow: hidden;\n    border-radius: 28px;\n    background: radial-gradient(circle at 20% 20%, rgba(6,247,255,.20), transparent 30%), linear-gradient(135deg, #020617, #111827);\n    color: white;\n}\n.saas-site nav {\n    display: flex;\n    align-items: center;\n    gap: 22px;\n    padding: 24px 34px;\n    background: rgba(255,255,255,.06);\n}\n.saas-site nav strong {\n    margin-right: auto;\n    color: #06f7ff;\n    font-size: 28px;\n}\n.saas-site nav a {\n    font-weight: 900;\n}\n.saas-site nav button,\n.saas-site header button {\n    border: 0;\n    border-radius: 999px;\n    padding: 13px 19px;\n    background: #06f7ff;\n    color: #020617;\n    font-weight: 950;\n}\n.saas-site header {\n    padding: 88px 34px 50px;\n    text-align: center;\n}\n.saas-site header span {\n    color: #06f7ff;\n    text-transform: uppercase;\n    letter-spacing: .16em;\n    font-weight: 950;\n}\n.saas-site header h2 {\n    max-width: 900px;\n    margin: 16px auto;\n    font-size: clamp(48px, 8vw, 96px);\n    line-height: .9;\n    letter-spacing: -.07em;\n}\n.saas-site header p {\n    max-width: 660px;\n    margin: 0 auto 24px;\n    color: #cbd5e1;\n    line-height: 1.6;\n}\n.saas-cards {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 18px;\n    padding: 0 34px 38px;\n}\n.saas-cards article {\n    min-height: 190px;\n    padding: 24px;\n    border-radius: 24px;\n    background: rgba(255,255,255,.09);\n    border: 1px solid rgba(255,255,255,.14);\n    font-size: 24px;\n    font-weight: 950;\n}\n.saas-site footer {\n    padding: 24px;\n    text-align: center;\n    background: rgba(0,0,0,.18);\n    color: #cbd5e1;\n}\n/* KIT:saas-site END */\n\n@media (max-width: 950px) {\n    .toolbar,\n    .kits-grid {\n        grid-template-columns: 1fr;\n    }\n\n    .kit-box.wide,\n    .kit-box.full {\n        grid-column: auto;\n    }\n\n    .store-nav,\n    .holo-nav,\n    .footer-vinyl,\n    .aurum-site nav,\n    .saas-site nav {\n        flex-direction: column;\n        text-align: center;\n    }\n\n    .store-nav strong,\n    .holo-nav strong,\n    .aurum-site nav strong,\n    .saas-site nav strong {\n        margin-right: 0;\n    }\n\n    .game-hero,\n    .split-login,\n    .analytics-dashboard,\n    .bento-grid {\n        grid-template-columns: 1fr;\n    }\n\n    .metric-grid,\n    .store-dash-grid,\n    .footer-mega,\n    .aurum-grid,\n    .saas-cards,\n    .register-row {\n        grid-template-columns: 1fr;\n    }\n}\n\n@media (max-width: 620px) {\n    main { width: 94%; }\n    .topbar { align-items: flex-start; flex-direction: column; }\n    .preview-shell { padding: 16px; }\n    .game-hero, .split-login-brand, .split-login-form { padding: 28px; }\n    .mega-hero h1 { font-size: 42px; }\n}\n";

let activeCategory = 'Todos';
const root = document.getElementById('kitsRoot');
const filters = document.getElementById('filters');
const searchInput = document.getElementById('searchInput');
const toast = document.getElementById('toast');

function escapeHtml(text) {
    return text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function showToast(text) {
    toast.textContent = text;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1300);
}

async function copyText(text, message) {
    const value = String(text || '').trim();

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(value);
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = value;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            textarea.style.top = '0';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            textarea.setSelectionRange(0, textarea.value.length);
            const success = document.execCommand('copy');
            document.body.removeChild(textarea);

            if (!success) {
                throw new Error('document.execCommand falhou');
            }
        }

        showToast(message);
    } catch (error) {
        console.error('Erro ao copiar:', error);
        showToast('Não foi possível copiar. Use Live Server.');
    }
}

function getCssBlock(id) {
    return cssBlocks[id] || '/* CSS não encontrado para este kit. */';
}

function renderFilters() {
    filters.innerHTML = categories.map((category) => `
        <button class="filter-btn ${category === activeCategory ? 'active' : ''}" data-category="${category}">${category}</button>
    `).join('');

    filters.querySelectorAll('.filter-btn').forEach((button) => {
        button.addEventListener('click', () => {
            activeCategory = button.dataset.category;
            renderFilters();
            renderKits();
        });
    });
}

function renderKits() {
    const search = searchInput.value.toLowerCase();
    const filtered = kits.filter((kit) => {
        const matchCategory = activeCategory === 'Todos' || kit.category === activeCategory;
        const matchSearch = kit.title.toLowerCase().includes(search) || kit.category.toLowerCase().includes(search) || kit.theme.toLowerCase().includes(search);
        return matchCategory && matchSearch;
    });

    root.innerHTML = filtered.map((kit) => `
        <article class="kit-box ${kit.size}" data-id="${kit.id}">
            <div class="kit-info">
                <div><h3>${kit.title}</h3><span>${kit.category}</span></div>
                <small>${kit.theme}</small>
            </div>
            <div class="preview-shell ${kit.theme}-bg">${kit.html}</div>
            <div class="code-actions">
                <button data-copy="html">Copiar HTML</button>
                <button data-copy="css">Copiar CSS</button>
                <button data-copy="js">Copiar JS</button>
                <button data-copy="full">Copiar tudo</button>
            </div>
            <details class="code-view">
                <summary>Ver código HTML</summary>
                <pre>${escapeHtml(kit.html)}</pre>
            </details>
        </article>
    `).join('') || '<p class="empty-message">Nenhum kit encontrado.</p>';
}

root.addEventListener('click', (event) => {
    const button = event.target.closest('[data-copy]');
    if (!button) return;

    const box = button.closest('.kit-box');
    const kit = kits.find((item) => item.id === box.dataset.id);
    const cssBlock = getCssBlock(kit.id);
    const type = button.dataset.copy;

    if (type === 'html') copyText(kit.html, 'HTML copiado!');
    if (type === 'css') copyText(cssBlock, 'CSS copiado!');
    if (type === 'js') copyText(kit.js, 'JS copiado!');
    if (type === 'full') {
        const full = `<!-- HTML -->\n${kit.html}\n\n/* CSS */\n${cssBlock}\n\n// JS\n${kit.js}`;
        copyText(full, 'Código completo copiado!');
    }
});

searchInput.addEventListener('input', renderKits);

document.getElementById('copyAllCss').addEventListener('click', () => {
    copyText(allCssText, 'CSS completo copiado!');
});

renderFilters();
renderKits();
