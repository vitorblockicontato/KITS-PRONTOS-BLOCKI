const body = document.body;
const cookBtn = document.getElementById("cookBtn");
const heisenbergBtn = document.getElementById("heisenbergBtn");
const smokeBtn = document.getElementById("smokeBtn");
const navSecretBtn = document.getElementById("navSecretBtn");
const labNavbarBtn = document.getElementById("labNavbarBtn");
const screenEffect = document.getElementById("screenEffect");
const secretBanner = document.getElementById("secretBanner");
const crystalCard = document.getElementById("crystalCard");
const formulaCard = document.getElementById("formulaCard");
const rvCard = document.getElementById("rvCard");
const dashStatus = document.getElementById("dashStatus");
const purityMetric = document.getElementById("purityMetric");
const batchMetric = document.getElementById("batchMetric");
const reactionMetric = document.getElementById("reactionMetric");

let typed = "";

function showBanner(text) {
    secretBanner.textContent = text;
    secretBanner.classList.add("active");

    setTimeout(() => {
        secretBanner.classList.remove("active");
    }, 1800);
}

function flash(color = "rgba(132,204,22,.35)") {
    screenEffect.style.background = color;
    screenEffect.classList.remove("active");
    void screenEffect.offsetWidth;
    screenEffect.classList.add("active");

    setTimeout(() => {
        screenEffect.classList.remove("active");
    }, 500);
}

function heisenbergMode() {
    body.classList.toggle("heisenberg-mode");
    dashStatus.textContent = body.classList.contains("heisenberg-mode")
        ? "HEISENBERG"
        : "STABLE";

    showBanner("SAY MY NAME");
    flash("rgba(132,204,22,.45)");
}

function jesseMode() {
    body.classList.toggle("jesse-mode");
    showBanner("JESSE MODE: CHEMICAL BURST");
    flash("rgba(56,189,248,.55)");

    crystalCard.classList.add("active");
    purityMetric.textContent = "99.1%";
}

function cookReaction() {
    crystalCard.classList.toggle("active");
    batchMetric.textContent = Number(batchMetric.textContent) + 1;
    reactionMetric.textContent = Number(reactionMetric.textContent) + 3;

    showBanner("COOKING...");
    flash("rgba(56,189,248,.38)");
}

function chemicalSmoke() {
    rvCard.classList.toggle("active");
    showBanner("CHEMICAL SMOKE RELEASED");
    flash("rgba(132,204,22,.28)");
}

cookBtn.addEventListener("click", cookReaction);
heisenbergBtn.addEventListener("click", heisenbergMode);
smokeBtn.addEventListener("click", chemicalSmoke);
navSecretBtn.addEventListener("click", heisenbergMode);
labNavbarBtn.addEventListener("click", heisenbergMode);

crystalCard.addEventListener("click", () => {
    crystalCard.classList.toggle("active");
    showBanner("BLUE CRYSTAL ACTIVE");
});

formulaCard.addEventListener("click", () => {
    formulaCard.classList.toggle("active");
    purityMetric.textContent = formulaCard.classList.contains("active")
        ? "95.8%"
        : "82.4%";
    showBanner("FORMULA REVEALED");
});

rvCard.addEventListener("click", chemicalSmoke);

document.querySelectorAll("[data-nav], [data-lab-nav]").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const type = item.dataset.nav || item.dataset.labNav;

        if (type === "lab" || type === "smoke") {
            chemicalSmoke();
        }

        if (type === "formula") {
            formulaCard.classList.toggle("active");
            showBanner("FORMULA OPENED");
        }

        if (type === "purity" || type === "crystal") {
            crystalCard.classList.toggle("active");
            showBanner("PURITY CHECK: 95.8%");
        }

        if (type === "empire") {
            heisenbergMode();
        }

        item.style.textShadow = "0 0 18px #84CC16";

        setTimeout(() => {
            item.style.textShadow = "";
        }, 700);
    });
});

document.addEventListener("keydown", (event) => {
    typed += event.key.toLowerCase();
    typed = typed.slice(-20);

    if (typed.includes("heisenberg")) {
        heisenbergMode();
        typed = "";
    }

    if (typed.includes("jesse")) {
        jesseMode();
        typed = "";
    }

    if (typed.includes("cook")) {
        cookReaction();
        typed = "";
    }
});
