const animeFilterButtons = document.querySelectorAll(".anime-filter");
const animeKits = document.querySelectorAll(".anime-kit");

let animeCssCache = "";

async function getAnimeCss() {
    if (animeCssCache) {
        return animeCssCache;
    }

    const fallbackElement = document.getElementById("animeCssFallback");

    try {
        const response = await fetch("anime-kits.css", { cache: "no-store" });

        if (!response.ok) {
            throw new Error("Não foi possível carregar o CSS.");
        }

        animeCssCache = await response.text();
        return animeCssCache;
    } catch (error) {
        if (fallbackElement) {
            animeCssCache = fallbackElement.textContent.trim();
            return animeCssCache;
        }

        return "/* Copie também o arquivo anime-kits.css para usar este kit. */";
    }
}

function cleanHtml(html) {
    return html
        .replaceAll(' data-preview=""', "")
        .replaceAll(" data-preview", "")
        .replace(/\s{2,}/g, " ")
        .replace(/> </g, ">\n<")
        .trim();
}

async function copyText(text, button, successText = "Copiado!") {
    const originalText = button.textContent;

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.setAttribute("readonly", "");
            textarea.style.position = "fixed";
            textarea.style.left = "-9999px";
            textarea.style.top = "0";
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();

            const ok = document.execCommand("copy");
            textarea.remove();

            if (!ok) {
                throw new Error("Falha ao copiar.");
            }
        }

        button.textContent = successText;
        button.classList.add("copied");
    } catch (error) {
        button.textContent = "Selecione e copie";
        console.error(error);
        alert("Não consegui copiar automaticamente. Abra pelo Live Server ou copie manualmente.");
    }

    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove("copied");
    }, 1300);
}

function getKitHtml(kit) {
    const preview = kit.querySelector("[data-preview]");
    return cleanHtml(preview.innerHTML);
}

async function getCompleteKit(kit) {
    const html = getKitHtml(kit);
    const css = await getAnimeCss();

    return `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kit copiado</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Bangers&family=Zen+Dots&family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
${css}
    </style>
</head>
<body>
${html}

<script>
document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => event.preventDefault());
});
<\/script>
</body>
</html>`;
}

document.querySelectorAll("[data-copy-html]").forEach((button) => {
    button.addEventListener("click", () => {
        const kit = button.closest(".anime-kit");
        copyText(getKitHtml(kit), button, "HTML copiado!");
    });
});

document.querySelectorAll("[data-copy-css]").forEach((button) => {
    button.addEventListener("click", async () => {
        const css = await getAnimeCss();
        copyText(css, button, "CSS copiado!");
    });
});

document.querySelectorAll("[data-copy-all]").forEach((button) => {
    button.addEventListener("click", async () => {
        const kit = button.closest(".anime-kit");
        const complete = await getCompleteKit(kit);
        copyText(complete, button, "Tudo copiado!");
    });
});

document.querySelectorAll("[data-copy-css-base]").forEach((button) => {
    button.addEventListener("click", async () => {
        const css = await getAnimeCss();
        copyText(css, button, "CSS copiado!");
    });
});

document.querySelectorAll(".anime-preview a").forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
});

document.querySelectorAll(".anime-preview form").forEach((form) => {
    form.addEventListener("submit", (event) => event.preventDefault());
});

animeFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        animeFilterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        animeKits.forEach((kit) => {
            const show = filter === "all" || kit.dataset.theme === filter;
            kit.style.display = show ? "" : "none";
        });
    });
});
