const timeBtn = document.getElementById("timeBtn");
const spellBtn = document.getElementById("spellBtn");
const starsBtn = document.getElementById("starsBtn");
const mimicCard = document.getElementById("mimicCard");
const moon = document.getElementById("moon");
const ancientTree = document.getElementById("ancientTree");
const starRain = document.getElementById("starRain");
const zoltraakBeam = document.getElementById("zoltraakBeam");
const secretMessage = document.getElementById("secretMessage");

let typed = "";
let moonClicks = 0;

function toggleDayNight() {
    document.body.classList.toggle("day-mode");
}

function castZoltraak() {
    zoltraakBeam.classList.remove("active");
    void zoltraakBeam.offsetWidth;
    zoltraakBeam.classList.add("active");

    secretMessage.classList.add("active");

    setTimeout(() => {
        secretMessage.classList.remove("active");
    }, 1400);
}

function makeRain(symbol, amount) {
    for (let i = 0; i < amount; i++) {
        const item = document.createElement("span");
        item.className = symbol === "🍂" ? "falling-leaf" : "falling-star";
        item.textContent = symbol;
        item.style.left = Math.random() * 100 + "vw";
        item.style.animationDelay = Math.random() * 1.2 + "s";
        item.style.fontSize = 18 + Math.random() * 18 + "px";

        starRain.appendChild(item);

        setTimeout(() => item.remove(), 3600);
    }
}

if (timeBtn) {
    timeBtn.addEventListener("click", toggleDayNight);
}

if (moon) {
    moon.addEventListener("click", () => {
        moonClicks++;

        if (moonClicks >= 5) {
            makeRain("✨", 40);
            moonClicks = 0;
        }
    });
}

if (spellBtn) {
    spellBtn.addEventListener("click", () => {
        makeRain("✦", 16);
    });
}

if (starsBtn) {
    starsBtn.addEventListener("click", () => {
        makeRain("✨", 45);
    });
}

if (mimicCard) {
    mimicCard.addEventListener("click", () => {
        mimicCard.classList.remove("opened", "eaten");

        if (Math.random() > 0.5) {
            mimicCard.classList.add("opened");
            mimicCard.querySelector("h3").textContent = "Tesouro encontrado!";
        } else {
            mimicCard.classList.add("eaten");
            mimicCard.querySelector("h3").textContent = "Era um Mimic!";
        }
    });
}

if (ancientTree) {
    ancientTree.addEventListener("click", () => {
        makeRain("🍂", 35);
    });
}

document.addEventListener("keydown", (event) => {
    typed += event.key.toLowerCase();
    typed = typed.slice(-20);

    if (typed.includes("zoltraak")) {
        castZoltraak();
        typed = "";
    }

    if (typed.includes("fern")) {
        document.body.style.setProperty("--frieren-purple", "#A855F7");
        makeRain("✦", 25);
        typed = "";
    }
});
