const $ = (id) => document.getElementById(id);
const value = (id) => $(id)?.value || '';

const sitePresets = {
    saas: ['SaaS Pro', 'Software que acelera seu crescimento', 'Organize vendas, clientes e projetos em uma plataforma moderna.'],
    loja: ['Blocki Store', 'Venda mais com uma loja premium', 'Template completo com vitrine, produtos, formulário e footer.'],
    streetwear: ['NØVX Wear', 'Streetwear premium para marcas fortes', 'Visual editorial, cards de coleção e chamada para compra.'],
    agro: ['Agro Nexus', 'Tecnologia para o campo', 'Site moderno para insumos, máquinas, sementes e atendimento rural.'],
    pet: ['Pet Care', 'Tudo para o seu pet em um só lugar', 'Layout amigável para produtos, serviços e agendamento.'],
    portfolio: ['Blocki Studio', 'Mostre seus projetos com impacto', 'Portfólio premium com serviços, cases e contato.'],
    dashboard: ['Admin Suite', 'Painel completo para sua operação', 'Template com métricas, cards, gráficos visuais e ações.'],
    restaurante: ['Sabor Prime', 'Experiência gastronômica premium', 'Cardápio, reserva, destaques e contato em um layout elegante.'],
    academia: ['Fit Core', 'Treine melhor todos os dias', 'Site para planos, aulas, professores e matrícula.'],
    agencia: ['Vision Agency', 'Criatividade que vira resultado', 'Landing completa para serviços, cases, depoimentos e formulário.'],
    curso: ['Learn Hub', 'Venda cursos online com presença profissional', 'Hero, benefícios, módulos e captura de leads.'],
    clinica: ['Clínica Vital', 'Saúde, cuidado e confiança', 'Layout para especialidades, equipe, agendamento e contato.']
};

function getBackground(style, bg, accent) {
    if (style === 'solid') {
        return bg;
    }

    if (style === 'glass') {
        return `radial-gradient(circle at top left, ${accent}66, transparent 38%), ${bg}`;
    }

    if (style === 'editorial') {
        return `linear-gradient(90deg, ${bg} 0%, ${bg} 48%, ${accent} 48%, ${accent} 100%)`;
    }

    return `linear-gradient(135deg, ${bg}, ${accent})`;
}

function renderSite() {
    const name = value('sName');
    const title = value('sTitle');
    const desc = value('sDesc');
    const cta = value('sCta');
    const type = value('sType');
    const bg = value('sBg');
    const text = value('sText');
    const accent = value('sAccent');
    const radius = value('sRadius');
    const background = getBackground(value('sStyle'), bg, accent);

    const html = `
<section class="site-ready" style="background: ${background}; color: ${text}; border-radius: ${radius}px;">
    <nav class="site-ready-navbar">
        <strong>${name}</strong>

        <div>
            <a href="#">Início</a>
            <a href="#">Serviços</a>
            <a href="#">Produtos</a>
            <a href="#">Contato</a>
        </div>

        <button>${cta}</button>
    </nav>

    <header class="site-ready-hero">
        <span>${type.toUpperCase()}</span>
        <h1>${title}</h1>
        <p>${desc}</p>

        <div class="site-ready-actions">
            <button>${cta}</button>
            <a href="#">Ver detalhes</a>
        </div>
    </header>

    <section class="site-ready-grid">
        <article>
            <small>01</small>
            <h3>Visual premium</h3>
            <p>Design moderno e preparado para responsividade.</p>
        </article>

        <article>
            <small>02</small>
            <h3>Componentes prontos</h3>
            <p>Navbar, hero, cards, formulário e footer integrados.</p>
        </article>

        <article>
            <small>03</small>
            <h3>Código copiável</h3>
            <p>Use o template como base para projetos reais.</p>
        </article>
    </section>

    <section class="site-ready-showcase">
        <div>
            <h2>Seção de destaque</h2>
            <p>Apresente produtos, serviços, planos ou diferenciais com uma área maior.</p>
        </div>

        <div class="site-ready-card">
            <strong>+24%</strong>
            <span>crescimento visual</span>
        </div>
    </section>

    <form class="site-ready-form" onsubmit="event.preventDefault(); alert('Contato enviado!');">
        <input placeholder="Seu nome">
        <input placeholder="Seu e-mail">
        <button>Enviar</button>
    </form>

    <footer class="site-ready-footer">
        © ${name} • Template completo criado no Interface Kits
    </footer>
</section>`;

    $('sitePreview').innerHTML = html;
    $('sCode').textContent = html;
}

function applyPreset(type) {
    const preset = sitePresets[type];

    if (!preset) {
        return;
    }

    $('sName').value = preset[0];
    $('sTitle').value = preset[1];
    $('sDesc').value = preset[2];
}

document.querySelectorAll('input, textarea, select').forEach((element) => {
    element.addEventListener('input', renderSite);
    element.addEventListener('change', () => {
        if (element.id === 'sType') {
            applyPreset(element.value);
        }

        renderSite();
    });
});

$('randomSite').addEventListener('click', () => {
    const types = Object.keys(sitePresets);
    const colors = [
        ['#0f172a', '#ffffff', '#7c3aed'],
        ['#052e16', '#ecfdf5', '#22c55e'],
        ['#09090b', '#fef3c7', '#d4af37'],
        ['#111827', '#f9fafb', '#06b6d4'],
        ['#431407', '#fff7ed', '#fb923c']
    ];

    const type = types[Math.floor(Math.random() * types.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    $('sType').value = type;
    applyPreset(type);

    $('sBg').value = color[0];
    $('sText').value = color[1];
    $('sAccent').value = color[2];
    $('sStyle').value = ['gradient', 'solid', 'glass', 'editorial'][Math.floor(Math.random() * 4)];
    $('sRadius').value = String(18 + Math.floor(Math.random() * 24));

    renderSite();
});

renderSite();
