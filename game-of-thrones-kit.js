const body = document.body;
const screenEffect = document.getElementById("screenEffect");
const secretBanner = document.getElementById("secretBanner");
const snowLayer = document.getElementById("snowLayer");

const dracarysBtn = document.getElementById("dracarysBtn");
const winterBtn = document.getElementById("winterBtn");
const throneBtn = document.getElementById("throneBtn");
const navSecretBtn = document.getElementById("navSecretBtn");
const kingdomBtn = document.getElementById("kingdomBtn");

const dragonCard = document.getElementById("dragonCard");
const wallCard = document.getElementById("wallCard");
const throneCard = document.getElementById("throneCard");
const ironThrone = document.getElementById("ironThrone");

const dashStatus = document.getElementById("dashStatus");
const houseMetric = document.getElementById("houseMetric");
const dragonMetric = document.getElementById("dragonMetric");
const wallMetric = document.getElementById("wallMetric");

let typed = "";

function showBanner(text) {
    secretBanner.textContent = text;
    secretBanner.classList.add("active");

    setTimeout(() => {
        secretBanner.classList.remove("active");
    }, 1800);
}

function flash(color = "rgba(249,115,22,.45)") {
    screenEffect.style.background = color;
    screenEffect.classList.remove("active");
    void screenEffect.offsetWidth;
    screenEffect.classList.add("active");

    setTimeout(() => {
        screenEffect.classList.remove("active");
    }, 500);
}

function dracarys() {
    body.classList.add("targaryen-mode");
    dragonCard.classList.add("active");
    dashStatus.textContent = "DRACARYS";
    dragonMetric.textContent = "03";
    showBanner("DRACARYS");
    flash("rgba(249,115,22,.60)");
}

function winter() {
    body.classList.add("winter-mode");
    wallCard.classList.add("active");
    dashStatus.textContent = "WINTER";
    wallMetric.textContent = "100%";
    showBanner("WINTER IS COMING");
    flash("rgba(147,197,253,.45)");

    for (let i = 0; i < 36; i++) {
        const flake = document.createElement("span");
        flake.className = "snowflake";
        flake.textContent = "❄";
        flake.style.left = Math.random() * 100 + "vw";
        flake.style.animationDelay = Math.random() * 1.2 + "s";
        flake.style.fontSize = 14 + Math.random() * 20 + "px";
        document.body.appendChild(flake);

        setTimeout(() => flake.remove(), 4000);
    }
}

function claimThrone() {
    ironThrone.classList.toggle("claimed");
    throneCard.classList.toggle("active");
    houseMetric.textContent = "09";
    dashStatus.textContent = "KING";
    showBanner("THE THRONE IS YOURS");
    flash("rgba(250,204,21,.45)");
}

dracarysBtn.addEventListener("click", dracarys);
winterBtn.addEventListener("click", winter);
throneBtn.addEventListener("click", claimThrone);
navSecretBtn.addEventListener("click", dracarys);
kingdomBtn.addEventListener("click", claimThrone);

dragonCard.addEventListener("click", dracarys);
wallCard.addEventListener("click", winter);
throneCard.addEventListener("click", claimThrone);

document.querySelectorAll("[data-nav], [data-kingdom]").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const type = item.dataset.nav || item.dataset.kingdom;

        if (type === "dragons" || type === "targaryen") {
            dracarys();
        }

        if (type === "winter" || type === "stark" || type === "wall") {
            winter();
        }

        if (type === "throne" || type === "lannister") {
            claimThrone();
        }

        if (type === "houses") {
            houseMetric.textContent = "10";
            showBanner("HOUSES SUMMONED");
        }

        item.style.textShadow = "0 0 18px #facc15";

        setTimeout(() => {
            item.style.textShadow = "";
        }, 700);
    });
});

document.addEventListener("keydown", (event) => {
    typed += event.key.toLowerCase();
    typed = typed.slice(-20);

    if (typed.includes("dracarys")) {
        dracarys();
        typed = "";
    }

    if (typed.includes("winter")) {
        winter();
        typed = "";
    }

    if (typed.includes("stark")) {
        body.classList.add("stark-mode");
        winter();
        typed = "";
    }

    if (typed.includes("targaryen")) {
        dracarys();
        typed = "";
    }

    if (typed.includes("lannister")) {
        claimThrone();
        typed = "";
    }
});
