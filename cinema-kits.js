const cinemaKits = [
    {
        id: "matrix-code-login",
        filter: "sci-fi",
        size: "wide",
        type: "Login",
        title: "Login Chuva de Código",
        reference: "Referência: Matrix",
        description: "Tela de acesso com chuva digital, inputs neon e botão de entrada hacker.",
        html: `<form class="matrix-login" onsubmit="event.preventDefault()">
    <div class="matrix-rain"><span>010101</span><span>110011</span><span>001101</span></div>
    <small>ACESSO AO SISTEMA</small>
    <h3>Escolha sua rota</h3>
    <input placeholder="Usuário">
    <input type="password" placeholder="Senha">
    <button>Entrar na rede</button>
</form>`
    },
    {
        id: "jurassic-card",
        filter: "aventura",
        size: "",
        type: "Card",
        title: "Card Ilha Perdida",
        reference: "Referência: Jurassic Park",
        description: "Card com âmbar, folhas e sensação de parque pré-histórico premium.",
        html: `<article class="jurassic-card">
    <span>EXPEDIÇÃO 93</span>
    <h3>Ilha Perdida</h3>
    <p>Explore uma área selvagem com criaturas antigas e mapa de segurança.</p>
    <button>Ver dossiê</button>
</article>`
    },
    {
        id: "space-saga-navbar",
        filter: "sci-fi",
        size: "wide",
        type: "Navbar",
        title: "Navbar Saga Estelar",
        reference: "Referência: Star Wars",
        description: "Menu espacial com brilho azul, divisão de missões e botão de navegação.",
        html: `<nav class="space-saga-nav">
    <strong>GALACTIC</strong>
    <a href="#">Ordens</a>
    <a href="#">Planetas</a>
    <a href="#">Frotas</a>
    <a href="#">Arquivo</a>
    <button>Hiperespaço</button>
</nav>`
    },
    {
        id: "wizard-hero",
        filter: "fantasia",
        size: "full",
        type: "Hero",
        title: "Hero Escola de Magia",
        reference: "Referência: Harry Potter",
        description: "Hero com castelo, cartas, brilho dourado e chamada de aventura mágica.",
        html: `<section class="wizard-hero">
    <div>
        <span>CARTA RECEBIDA</span>
        <h2>Entre na escola onde a magia desperta</h2>
        <p>Uma seção inicial com atmosfera de fantasia, portal luminoso e chamada cinematográfica.</p>
        <button>Começar jornada</button>
    </div>
    <div class="wizard-orb">✦</div>
</section>`
    },
    {
        id: "bat-dashboard",
        filter: "acao",
        size: "full",
        type: "Dashboard",
        title: "Dashboard Cidade Sombria",
        reference: "Referência: Batman",
        description: "Painel escuro com mapa urbano, alertas e métricas de vigilância.",
        html: `<section class="bat-dashboard">
    <div class="bat-top">
        <div><small>CENTRAL NOTURNA</small><h3>Gotham Monitor</h3></div>
        <span>ALERTA MÉDIO</span>
    </div>
    <div class="bat-grid">
        <article><b>24</b><p>Ocorrências</p></article>
        <article><b>08</b><p>Setores</p></article>
        <article><b>91%</b><p>Rastreamento</p></article>
    </div>
    <div class="bat-map"><i></i><i></i><i></i><i></i></div>
</section>`
    },
    {
        id: "ring-card",
        filter: "fantasia",
        size: "",
        type: "Card",
        title: "Card Anel Antigo",
        reference: "Referência: O Senhor dos Anéis",
        description: "Card medieval com círculo dourado, runas falsas e clima de missão épica.",
        html: `<article class="ring-card">
    <div class="ring-mark">○</div>
    <small>MISSÃO ÉPICA</small>
    <h3>O Anel Antigo</h3>
    <p>Um componente com textura de pergaminho escuro e detalhes dourados.</p>
</article>`
    },
    {
        id: "pirate-footer",
        filter: "aventura",
        size: "wide",
        type: "Footer",
        title: "Footer Navio Pirata",
        reference: "Referência: Piratas do Caribe",
        description: "Rodapé com mapa, bússola e links como se fossem rotas marítimas.",
        html: `<footer class="pirate-footer">
    <strong>BLACK COMPASS</strong>
    <div>
        <a href="#">Rotas</a>
        <a href="#">Tesouros</a>
        <a href="#">Tripulação</a>
        <a href="#">Contato</a>
    </div>
    <p>© 2026 Interface Kits • navegue com estilo</p>
</footer>`
    },
    {
        id: "horror-vhs-card",
        filter: "terror",
        size: "",
        type: "Card",
        title: "Card Fita Assombrada",
        reference: "Referência: O Chamado",
        description: "Card com ruído VHS, borda fria e estética de fita encontrada.",
        html: `<article class="vhs-card">
    <span>PLAY 00:07</span>
    <h3>Fita Encontrada</h3>
    <p>Visual sombrio com glitch leve, scanlines e suspense.</p>
</article>`
    },
    {
        id: "shark-button",
        filter: "terror",
        size: "",
        type: "Botão",
        title: "Botão Mar Profundo",
        reference: "Referência: Tubarão",
        description: "Botão azul escuro com onda animada e tensão de oceano profundo.",
        html: `<button class="shark-btn"><span>Entrar na água</span></button>`
    },
    {
        id: "dream-hero",
        filter: "sci-fi",
        size: "full",
        type: "Hero",
        title: "Hero Cidade Dobrável",
        reference: "Referência: A Origem",
        description: "Hero com perspectiva quebrada, blocos inclinados e visual de sonho arquitetônico.",
        html: `<section class="dream-hero">
    <div class="dream-copy">
        <span>NÍVEL 04</span>
        <h2>A cidade dobra quando o sonho começa</h2>
        <p>Uma composição moderna para projetos com narrativa, tecnologia e suspense.</p>
        <button>Entrar no sonho</button>
    </div>
    <div class="dream-city"><i></i><i></i><i></i><i></i></div>
</section>`
    },
    {
        id: "delorean-timeline",
        filter: "sci-fi",
        size: "wide",
        type: "Timeline",
        title: "Timeline Viagem no Tempo",
        reference: "Referência: De Volta para o Futuro",
        description: "Linha do tempo com neon, faíscas e cards para etapas de projeto.",
        html: `<section class="time-road">
    <h3>Linha temporal</h3>
    <div><span>1985</span><span>2015</span><span>1955</span><span>FUTURO</span></div>
</section>`
    },
    {
        id: "stream-site",
        filter: "streaming",
        size: "full",
        type: "Site completo",
        title: "Site Pronto CineVerse Plus",
        reference: "Referência: plataformas de streaming",
        description: "Página completa com hero, trilhos de filmes, cards de destaque e CTA de assinatura.",
        html: `<section class="cineverse-site">
    <nav>
        <strong>CINEVERSE+</strong>
        <a href="#">Filmes</a>
        <a href="#">Séries</a>
        <a href="#">Originais</a>
        <button>Entrar</button>
    </nav>
    <header>
        <span>Estreia da semana</span>
        <h2>Histórias gigantes para telas pequenas.</h2>
        <p>Template completo para catálogo de filmes, séries, trailers e lançamentos.</p>
        <button>Assinar agora</button>
    </header>
    <div class="movie-row">
        <article>NEON WAR</article>
        <article>DEEP SEA</article>
        <article>DREAM CITY</article>
        <article>OLD KINGDOM</article>
    </div>
</section>`
    }
];

const cinemaCssSource = `:root {
    --cinema-red: #ff1744;
    --cinema-gold: #f5c542;
    --cinema-blue: #00d4ff;
    --cinema-purple: #8b5cf6;
    --cinema-green: #00ff88;
    --cinema-bg: #080b14;
    --cinema-card: rgba(255, 255, 255, .06);
    --cinema-border: rgba(255, 255, 255, .13);
}

.cinema-hero {
    position: relative;
    padding: 92px 0 54px;
    overflow: hidden;
}

.cinema-hero::before {
    content: "";
    position: absolute;
    inset: 24px 0 auto auto;
    width: 280px;
    height: 280px;
    background: radial-gradient(circle, rgba(255, 23, 68, .24), transparent 68%);
    filter: blur(4px);
    pointer-events: none;
}

.cinema-hero h1 {
    max-width: 1060px;
    margin: 18px 0;
    font-family: 'Bebas Neue', 'Inter', sans-serif;
    font-size: clamp(56px, 9vw, 124px);
    line-height: .84;
    letter-spacing: .025em;
    background: linear-gradient(135deg, #ffffff 0%, #f5c542 34%, #ff1744 64%, #8b5cf6 100%);
    -webkit-background-clip: text;
    color: transparent;
    filter: drop-shadow(0 18px 35px rgba(0, 0, 0, .32));
}

.cinema-hero p {
    max-width: 820px;
    color: #c5cedd;
    line-height: 1.75;
    font-size: 18px;
}

.cinema-toolbar {
    position: sticky;
    top: 76px;
    z-index: 15;
    padding: 14px 0 20px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    background: linear-gradient(180deg, #080b14 70%, rgba(8, 11, 20, .22));
    backdrop-filter: blur(16px);
}

.movie-filter {
    border: 1px solid rgba(255, 255, 255, .14);
    background: rgba(255, 255, 255, .07);
    color: white;
    border-radius: 999px;
    padding: 11px 15px;
    font-weight: 900;
    cursor: pointer;
    transition: .25s ease;
}

.movie-filter:hover,
.movie-filter.active {
    color: #080b14;
    background: linear-gradient(135deg, #fff, #f5c542);
    box-shadow: 0 12px 32px rgba(245, 197, 66, .18);
}

.cinema-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
    padding-bottom: 80px;
}

.cinema-kit {
    position: relative;
    padding: 18px;
    overflow: hidden;
    border-radius: 30px;
    border: 1px solid var(--cinema-border);
    background:
        radial-gradient(circle at 20% 0, rgba(255, 23, 68, .13), transparent 30%),
        radial-gradient(circle at 90% 10%, rgba(0, 212, 255, .12), transparent 28%),
        var(--cinema-card);
    box-shadow: 0 28px 86px rgba(0, 0, 0, .3);
    backdrop-filter: blur(18px);
}

.cinema-kit::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, .1), transparent 28%, transparent 70%, rgba(255, 255, 255, .04));
    pointer-events: none;
}

.cinema-kit.wide {
    grid-column: span 2;
}

.cinema-kit.full {
    grid-column: 1 / -1;
}

.cinema-kit-head {
    position: relative;
    z-index: 2;
    align-items: flex-start;
    gap: 18px;
}

.cinema-kit-head span {
    display: inline-block;
    margin-bottom: 8px;
    color: var(--cinema-gold);
    font-size: 12px;
    font-weight: 950;
    letter-spacing: .12em;
    text-transform: uppercase;
}

.cinema-kit-head h3 {
    margin: 0;
    font-size: clamp(26px, 4vw, 44px);
    letter-spacing: -.04em;
}

.cinema-kit-head p {
    max-width: 760px;
    margin: 8px 0 0;
    color: #b9c2d2;
    line-height: 1.6;
}

.cinema-kit-head strong {
    padding: 9px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, .09);
    border: 1px solid rgba(255, 255, 255, .13);
    color: #fff;
    white-space: nowrap;
}

.cinema-preview {
    position: relative;
    z-index: 2;
    min-height: 280px;
    margin: 18px 0;
    padding: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, .12);
    background:
        linear-gradient(135deg, rgba(255, 255, 255, .06), rgba(255, 255, 255, .025)),
        #090b13;
}

.theme-sci-fi {
    background:
        linear-gradient(rgba(0, 212, 255, .1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(139, 92, 246, .1) 1px, transparent 1px),
        radial-gradient(circle at 20% 20%, rgba(0, 212, 255, .2), transparent 28%),
        #020617;
    background-size: 32px 32px, 32px 32px, auto, auto;
}

.theme-aventura {
    background:
        radial-gradient(circle at 70% 18%, rgba(245, 197, 66, .28), transparent 24%),
        linear-gradient(135deg, #1c1917, #064e3b);
}

.theme-fantasia {
    background:
        radial-gradient(circle at 50% 40%, rgba(245, 197, 66, .22), transparent 34%),
        linear-gradient(135deg, #120b04, #111827);
}

.theme-terror {
    background:
        repeating-linear-gradient(0deg, rgba(255, 255, 255, .045) 0 1px, transparent 1px 5px),
        radial-gradient(circle at center, rgba(255, 23, 68, .18), transparent 38%),
        #050505;
}

.theme-acao {
    background:
        linear-gradient(135deg, rgba(245, 197, 66, .08), transparent),
        repeating-linear-gradient(90deg, rgba(255, 255, 255, .04) 0 2px, transparent 2px 70px),
        #050505;
}

.theme-streaming {
    background:
        radial-gradient(circle at 18% 0, rgba(255, 23, 68, .24), transparent 30%),
        radial-gradient(circle at 90% 50%, rgba(139, 92, 246, .18), transparent 30%),
        #090909;
}

.cinema-kit pre {
    display: none;
}

.copy-row {
    position: relative;
    z-index: 2;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

/* MATRIX */
.matrix-login {
    position: relative;
    width: min(430px, 100%);
    padding: 32px;
    overflow: hidden;
    border-radius: 28px;
    background: rgba(0, 10, 3, .9);
    border: 1px solid rgba(0, 255, 136, .35);
    box-shadow: 0 0 45px rgba(0, 255, 136, .15), inset 0 0 70px rgba(0, 255, 136, .06);
}

.matrix-rain {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-around;
    opacity: .25;
    pointer-events: none;
}

.matrix-rain span {
    writing-mode: vertical-rl;
    color: var(--cinema-green);
    font-family: 'Orbitron', sans-serif;
    animation: codeDrop 3s linear infinite;
}

.matrix-rain span:nth-child(2) { animation-delay: .8s; }
.matrix-rain span:nth-child(3) { animation-delay: 1.4s; }

.matrix-login small,
.matrix-login h3,
.matrix-login input,
.matrix-login button {
    position: relative;
    z-index: 2;
}

.matrix-login small {
    color: var(--cinema-green);
    font-weight: 950;
    letter-spacing: .16em;
}

.matrix-login h3 {
    margin: 10px 0 18px;
    color: white;
    font-size: 34px;
}

.matrix-login input {
    width: 100%;
    margin: 8px 0;
    padding: 14px;
    border: 1px solid rgba(0, 255, 136, .22);
    border-radius: 14px;
    background: rgba(0, 255, 136, .08);
    color: white;
    outline: 0;
}

.matrix-login button,
.wizard-hero button,
.dream-hero button,
.cineverse-site button {
    border: 0;
    border-radius: 999px;
    padding: 14px 18px;
    color: white;
    font-weight: 950;
    cursor: pointer;
}

.matrix-login button {
    width: 100%;
    margin-top: 12px;
    background: linear-gradient(135deg, #00ff88, #047857);
    color: #001b0d;
}

/* JURASSIC */
.jurassic-card {
    width: 300px;
    min-height: 250px;
    padding: 26px;
    border-radius: 24px;
    background:
        radial-gradient(circle at 75% 20%, rgba(245, 197, 66, .35), transparent 24%),
        linear-gradient(135deg, rgba(4, 120, 87, .9), rgba(20, 83, 45, .95));
    border: 1px solid rgba(245, 197, 66, .32);
    box-shadow: 0 25px 60px rgba(0, 0, 0, .35);
}

.jurassic-card span,
.ring-card small {
    color: var(--cinema-gold);
    font-weight: 950;
    letter-spacing: .12em;
}

.jurassic-card h3,
.ring-card h3,
.vhs-card h3 {
    margin: 20px 0 10px;
    font-size: 34px;
    color: white;
}

.jurassic-card p,
.ring-card p,
.vhs-card p {
    color: #d8e2d5;
    line-height: 1.55;
}

.jurassic-card button {
    margin-top: 16px;
    border: 0;
    border-radius: 14px;
    padding: 12px 16px;
    background: var(--cinema-gold);
    color: #1c1917;
    font-weight: 950;
}

/* SPACE SAGA */
.space-saga-nav {
    width: min(920px, 100%);
    display: flex;
    align-items: center;
    gap: 22px;
    padding: 18px 24px;
    border-radius: 24px;
    background: rgba(3, 7, 18, .78);
    border: 1px solid rgba(0, 212, 255, .35);
    box-shadow: 0 0 55px rgba(0, 212, 255, .14);
    backdrop-filter: blur(16px);
}

.space-saga-nav strong {
    margin-right: auto;
    color: var(--cinema-blue);
    font-family: 'Orbitron', sans-serif;
    font-size: 22px;
}

.space-saga-nav a,
.cineverse-site a,
.pirate-footer a {
    color: white;
    text-decoration: none;
    font-weight: 900;
}

.space-saga-nav button {
    border: 0;
    border-radius: 999px;
    padding: 12px 18px;
    background: linear-gradient(135deg, #00d4ff, #8b5cf6);
    color: white;
    font-weight: 950;
}

/* WIZARD */
.wizard-hero {
    width: 100%;
    min-height: 430px;
    display: grid;
    grid-template-columns: 1fr .55fr;
    gap: 26px;
    align-items: center;
    padding: 46px;
    border-radius: 26px;
    background:
        linear-gradient(90deg, rgba(0, 0, 0, .94), rgba(0, 0, 0, .35)),
        radial-gradient(circle at 78% 42%, rgba(245, 197, 66, .35), transparent 30%),
        #120b04;
    box-shadow: inset 0 0 80px rgba(245, 197, 66, .1);
}

.wizard-hero span,
.dream-hero span,
.cineverse-site header span {
    color: var(--cinema-gold);
    font-weight: 950;
    letter-spacing: .14em;
    text-transform: uppercase;
}

.wizard-hero h2,
.dream-hero h2,
.cineverse-site h2 {
    max-width: 740px;
    margin: 12px 0;
    font-family: 'Cinzel', serif;
    font-size: clamp(40px, 7vw, 82px);
    line-height: .9;
    color: white;
}

.wizard-hero p,
.dream-hero p,
.cineverse-site p {
    max-width: 560px;
    color: #d6d3d1;
    line-height: 1.65;
}

.wizard-hero button {
    margin-top: 20px;
    background: var(--cinema-gold);
    color: #1c1917;
}

.wizard-orb {
    height: 250px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: var(--cinema-gold);
    font-size: 92px;
    border: 2px solid rgba(245, 197, 66, .35);
    box-shadow: 0 0 60px rgba(245, 197, 66, .25), inset 0 0 50px rgba(245, 197, 66, .12);
    animation: floatSpell 3s ease-in-out infinite;
}

/* BAT DASHBOARD */
.bat-dashboard {
    width: min(850px, 100%);
    padding: 28px;
    border-radius: 28px;
    background: linear-gradient(135deg, rgba(0, 0, 0, .95), rgba(28, 25, 23, .9));
    border: 1px solid rgba(245, 197, 66, .22);
    box-shadow: 0 30px 80px rgba(0, 0, 0, .45);
}

.bat-top,
.bat-grid {
    display: flex;
    justify-content: space-between;
    gap: 16px;
}

.bat-top small {
    color: var(--cinema-gold);
    font-weight: 950;
}

.bat-top h3 {
    margin: 5px 0 0;
    color: white;
    font-size: 34px;
}

.bat-top span {
    align-self: start;
    padding: 10px 12px;
    border-radius: 999px;
    background: rgba(245, 197, 66, .12);
    color: var(--cinema-gold);
    font-weight: 950;
}

.bat-grid {
    margin: 22px 0;
}

.bat-grid article {
    flex: 1;
    padding: 18px;
    border-radius: 18px;
    background: rgba(255, 255, 255, .07);
}

.bat-grid b {
    display: block;
    color: white;
    font-size: 34px;
}

.bat-grid p {
    color: #a8a29e;
}

.bat-map {
    height: 150px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.bat-map i {
    border-radius: 16px;
    background:
        linear-gradient(rgba(245, 197, 66, .1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(245, 197, 66, .1) 1px, transparent 1px),
        rgba(255, 255, 255, .05);
    background-size: 20px 20px;
}

/* RING */
.ring-card {
    position: relative;
    width: 300px;
    min-height: 260px;
    padding: 26px;
    overflow: hidden;
    border-radius: 24px;
    background: linear-gradient(135deg, #17120a, #050505);
    border: 1px solid rgba(245, 197, 66, .28);
}

.ring-mark {
    position: absolute;
    right: -28px;
    top: -35px;
    color: rgba(245, 197, 66, .22);
    font-size: 170px;
    line-height: 1;
}

/* PIRATE */
.pirate-footer {
    width: min(760px, 100%);
    padding: 34px;
    text-align: center;
    border-radius: 24px;
    background:
        radial-gradient(circle at 50% 0, rgba(245, 197, 66, .2), transparent 30%),
        repeating-linear-gradient(135deg, rgba(245, 197, 66, .06) 0 2px, transparent 2px 26px),
        #17120a;
    border: 1px solid rgba(245, 197, 66, .25);
}

.pirate-footer strong {
    color: var(--cinema-gold);
    font-family: 'Cinzel', serif;
    font-size: 32px;
    letter-spacing: .16em;
}

.pirate-footer div {
    margin: 22px 0;
    display: flex;
    justify-content: center;
    gap: 22px;
    flex-wrap: wrap;
}

.pirate-footer p {
    color: #c8b99b;
}

/* VHS */
.vhs-card {
    position: relative;
    width: 300px;
    min-height: 250px;
    padding: 26px;
    overflow: hidden;
    border-radius: 22px;
    background: #050505;
    border: 1px solid rgba(255, 255, 255, .12);
    box-shadow: 0 0 35px rgba(0, 212, 255, .12);
    animation: vhsShake 3s infinite;
}

.vhs-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(0deg, rgba(255, 255, 255, .07) 0 1px, transparent 1px 5px);
    opacity: .35;
}

.vhs-card span,
.vhs-card h3,
.vhs-card p {
    position: relative;
    z-index: 2;
}

.vhs-card span {
    color: #93c5fd;
    font-weight: 950;
}

/* SHARK */
.shark-btn {
    position: relative;
    overflow: hidden;
    border: 0;
    border-radius: 999px;
    padding: 17px 34px;
    background: linear-gradient(135deg, #082f49, #020617);
    color: white;
    font-weight: 950;
    letter-spacing: .08em;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 18px 50px rgba(14, 165, 233, .22);
}

.shark-btn::before {
    content: "";
    position: absolute;
    inset: auto -20% -65% -20%;
    height: 95%;
    background: radial-gradient(circle at 50% 0, rgba(56, 189, 248, .55), transparent 55%);
    animation: waveMove 1.8s ease-in-out infinite;
}

.shark-btn span {
    position: relative;
    z-index: 2;
}

/* DREAM */
.dream-hero {
    width: 100%;
    min-height: 430px;
    display: grid;
    grid-template-columns: 1fr .85fr;
    gap: 30px;
    align-items: center;
    padding: 46px;
    border-radius: 26px;
    background: linear-gradient(135deg, #020617, #111827 45%, #1e1b4b);
}

.dream-hero h2 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: .03em;
}

.dream-hero button {
    margin-top: 20px;
    background: linear-gradient(135deg, #00d4ff, #8b5cf6);
}

.dream-city {
    height: 260px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    transform: perspective(700px) rotateX(18deg) rotateZ(-6deg);
}

.dream-city i {
    display: block;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(0, 212, 255, .65), rgba(139, 92, 246, .12));
    box-shadow: 0 0 28px rgba(0, 212, 255, .22);
}

.dream-city i:nth-child(1) { height: 65%; align-self: end; }
.dream-city i:nth-child(2) { height: 95%; align-self: end; }
.dream-city i:nth-child(3) { height: 78%; align-self: end; }
.dream-city i:nth-child(4) { height: 55%; align-self: end; }

/* TIME ROAD */
.time-road {
    width: min(760px, 100%);
    padding: 30px;
    border-radius: 26px;
    background: linear-gradient(135deg, #020617, #111827);
    border: 1px solid rgba(0, 212, 255, .26);
}

.time-road h3 {
    margin-bottom: 24px;
    color: white;
    font-family: 'Orbitron', sans-serif;
    font-size: 28px;
}

.time-road div {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

.time-road div::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #f5c542, #ff1744);
    box-shadow: 0 0 20px rgba(0, 212, 255, .6);
}

.time-road span {
    position: relative;
    z-index: 2;
    padding: 14px;
    border-radius: 16px;
    text-align: center;
    background: #020617;
    border: 1px solid rgba(255, 255, 255, .15);
    color: white;
    font-weight: 950;
}

/* SITE COMPLETO */
.cineverse-site {
    width: 100%;
    min-height: 720px;
    overflow: hidden;
    border-radius: 28px;
    background:
        radial-gradient(circle at 70% 12%, rgba(255, 23, 68, .28), transparent 30%),
        linear-gradient(135deg, #090909, #111827);
}

.cineverse-site nav {
    display: flex;
    align-items: center;
    gap: 22px;
    padding: 24px 34px;
    background: rgba(255, 255, 255, .06);
    backdrop-filter: blur(14px);
}

.cineverse-site nav strong {
    margin-right: auto;
    color: var(--cinema-red);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 34px;
    letter-spacing: .08em;
}

.cineverse-site nav button,
.cineverse-site header button {
    background: var(--cinema-red);
}

.cineverse-site header {
    padding: 84px 34px 58px;
    text-align: center;
}

.cineverse-site h2 {
    max-width: 920px;
    margin: 14px auto;
    font-family: 'Bebas Neue', sans-serif;
}

.cineverse-site p {
    margin: 0 auto 24px;
}

.movie-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    padding: 0 34px 34px;
}

.movie-row article {
    min-height: 220px;
    display: grid;
    place-items: end start;
    padding: 22px;
    border-radius: 24px;
    background:
        linear-gradient(180deg, transparent, rgba(0, 0, 0, .82)),
        radial-gradient(circle at top, rgba(255, 23, 68, .3), transparent 42%),
        #111;
    color: white;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 30px;
    letter-spacing: .08em;
}

@keyframes codeDrop {
    from { transform: translateY(-100%); }
    to { transform: translateY(100%); }
}

@keyframes floatSpell {
    50% { transform: translateY(-14px) scale(1.04); }
}

@keyframes vhsShake {
    0%, 100% { transform: translate(0); }
    94% { transform: translate(0); }
    96% { transform: translate(3px, -1px); }
    98% { transform: translate(-2px, 1px); }
}

@keyframes waveMove {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-14px); }
}

@media (max-width: 980px) {
    .cinema-grid,
    .cinema-kit.wide,
    .cinema-kit.full {
        grid-template-columns: 1fr;
        grid-column: auto;
    }

    .cinema-preview {
        padding: 18px;
    }

    .space-saga-nav,
    .wizard-hero,
    .bat-top,
    .bat-grid,
    .dream-hero,
    .cineverse-site nav,
    .movie-row {
        grid-template-columns: 1fr;
        flex-direction: column;
        text-align: center;
    }

    .space-saga-nav strong,
    .cineverse-site nav strong {
        margin-right: 0;
    }

    .wizard-orb {
        height: 190px;
    }

    .time-road div {
        grid-template-columns: 1fr;
    }

    .time-road div::before {
        display: none;
    }
}

@media (max-width: 560px) {
    .cinema-hero {
        padding-top: 62px;
    }

    .cinema-kit {
        padding: 14px;
        border-radius: 24px;
    }

    .cinema-preview {
        min-height: 240px;
    }

    .wizard-hero,
    .dream-hero {
        padding: 28px;
    }
}
`;
const cinemaComponentJs = `document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());
});

document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => event.preventDefault());
});`;

function escapeHtml(code) {
    return code.replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char]));
}

function buildFullKit(kit) {
    return `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${kit.title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Cinzel:wght@500;700;900&family=Bebas+Neue&family=Orbitron:wght@500;700;900&display=swap" rel="stylesheet">
    <style>
${cinemaCssSource}
    </style>
</head>
<body>
    <main class="standalone-cinema-page">
        <section class="cinema-preview theme-${kit.filter} standalone-preview">
${kit.html}
        </section>
    </main>
    <script>
${cinemaComponentJs}
    <\/script>
</body>
</html>`;
}

function renderCinemaKits() {
    const grid = document.getElementById("kitsCinema");

    grid.innerHTML = cinemaKits.map((kit) => `
        <article class="cinema-kit ${kit.size}" data-theme="${kit.filter}">
            <div class="kit-head cinema-kit-head">
                <div>
                    <span>${kit.reference}</span>
                    <h3>${kit.title}</h3>
                    <p>${kit.description}</p>
                </div>
                <strong>${kit.type}</strong>
            </div>

            <div class="cinema-preview theme-${kit.filter}">
                ${kit.html}
            </div>

            <div class="copy-row">
                <button class="small-btn" data-copy-type="html" data-kit-id="${kit.id}">Copiar HTML</button>
                <button class="small-btn" data-copy-type="css" data-kit-id="${kit.id}">Copiar CSS</button>
                <button class="small-btn" data-copy-type="js" data-kit-id="${kit.id}">Copiar JS</button>
                <button class="small-btn copy-all-btn" data-copy-type="full" data-kit-id="${kit.id}">Copiar tudo</button>
            </div>
            <pre id="${kit.id}">${escapeHtml(kit.html)}</pre>
        </article>
    `).join("");
}

async function copyText(text, button, label = "Copiado!") {
    const finalText = String(text).trim();

    try {
        await navigator.clipboard.writeText(finalText);
    } catch (error) {
        const area = document.createElement("textarea");
        area.value = finalText;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.left = "-9999px";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
    }

    const oldText = button.textContent;
    button.textContent = label;

    setTimeout(() => {
        button.textContent = oldText;
    }, 1200);
}

function getCopyContent(type, kit) {
    if (type === "html") return kit.html;
    if (type === "css") return cinemaCssSource;
    if (type === "js") return cinemaComponentJs;
    if (type === "full") return buildFullKit(kit);
    return kit.html;
}

function setupCinemaEvents() {
    document.addEventListener("click", (event) => {
        const copyButton = event.target.closest("[data-copy-type]");

        if (copyButton) {
            const kit = cinemaKits.find((item) => item.id === copyButton.dataset.kitId);
            const type = copyButton.dataset.copyType;
            const labels = { html: "HTML copiado!", css: "CSS copiado!", js: "JS copiado!", full: "Tudo copiado!" };

            if (kit) {
                copyText(getCopyContent(type, kit), copyButton, labels[type]);
            }
        }

        const cssButton = event.target.closest("[data-copy-css]");

        if (cssButton) {
            copyText(cinemaCssSource, cssButton, "CSS copiado!");
        }

        const filterButton = event.target.closest(".movie-filter");

        if (filterButton) {
            document.querySelectorAll(".movie-filter").forEach((button) => button.classList.remove("active"));
            filterButton.classList.add("active");

            const filter = filterButton.dataset.filter;

            document.querySelectorAll(".cinema-kit").forEach((kit) => {
                kit.style.display = filter === "all" || kit.dataset.theme === filter ? "" : "none";
            });
        }
    });

    document.querySelectorAll('a[href="#"]').forEach((link) => {
        link.addEventListener("click", (event) => event.preventDefault());
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderCinemaKits();
    setupCinemaEvents();
});
