const body = document.body;
const infectionLayer = document.getElementById("infectionLayer");
const screenEffect = document.getElementById("screenEffect");
const secretBanner = document.getElementById("secretBanner");
const fireflySwarm = document.getElementById("fireflySwarm");

const infectBtn = document.getElementById("infectBtn");
const fireflyBtn = document.getElementById("fireflyBtn");
const cureBtn = document.getElementById("cureBtn");
const navInfectBtn = document.getElementById("navInfectBtn");
const zoneBtn = document.getElementById("zoneBtn");

const clickerCard = document.getElementById("clickerCard");
const fireflyCard = document.getElementById("fireflyCard");
const suppliesCard = document.getElementById("suppliesCard");

const dashStatus = document.getElementById("dashStatus");
const infectionMetric = document.getElementById("infectionMetric");
const suppliesMetric = document.getElementById("suppliesMetric");
const signalMetric = document.getElementById("signalMetric");
const infectionMeter = document.getElementById("infectionMeter");

let typed = "";
let infection = 18;
let supplies = 24;

function showBanner(text) {
    secretBanner.textContent = text;
    secretBanner.classList.add("active");

    setTimeout(() => {
        secretBanner.classList.remove("active");
    }, 1800);
}

function flash(color = "rgba(101,163,13,.45)") {
    screenEffect.style.background = color;
    screenEffect.classList.remove("active");
    void screenEffect.offsetWidth;
    screenEffect.classList.add("active");

    setTimeout(() => {
        screenEffect.classList.remove("active");
    }, 500);
}

function updateInfection() {
    infectionMetric.textContent = infection + "%";
    infectionMeter.textContent = infection + "%";

    infectionLayer.classList.remove("level-1", "level-2", "level-3", "level-4");

    if (infection >= 25) infectionLayer.classList.add("level-1");
    if (infection >= 45) infectionLayer.classList.add("level-2");
    if (infection >= 65) infectionLayer.classList.add("level-3");
    if (infection >= 85) infectionLayer.classList.add("level-4");

    dashStatus.textContent = infection >= 75 ? "CRITICAL" : infection >= 45 ? "INFECTED" : "STABLE";
}

function infectScreen(amount = 18) {
    body.classList.remove("healed");
    infection = Math.min(100, infection + amount);
    updateInfection();
    showBanner("INFECTION SPREADING");
    flash("rgba(101,163,13,.48)");
}

function cureScreen() {
    infection = Math.max(0, infection - 28);
    updateInfection();
    showBanner("ANTIDOTE USED");
    flash("rgba(250,204,21,.36)");

    if (infection === 0) {
        body.classList.add("healed");
        dashStatus.textContent = "HEALED";
    }
}

function spawnFireflies() {
    signalMetric.textContent = "HIGH";
    fireflyCard.classList.add("active");
    showBanner("LOOK FOR THE LIGHT");

    for (let i = 0; i < 36; i++) {
        const firefly = document.createElement("span");
        firefly.className = "firefly";
        firefly.style.left = Math.random() * 100 + "vw";
        firefly.style.top = 55 + Math.random() * 35 + "vh";
        firefly.style.animationDelay = Math.random() * 1.2 + "s";
        fireflySwarm.appendChild(firefly);

        setTimeout(() => firefly.remove(), 3600);
    }
}

function clickerMode() {
    body.classList.add("clicker-mode");
    clickerCard.classList.add("active");
    infectScreen(22);
    showBanner("CLICKER ALERT");

    setTimeout(() => {
        body.classList.remove("clicker-mode");
    }, 1400);
}

function collectSupplies() {
    supplies += 6;
    suppliesMetric.textContent = supplies;
    suppliesCard.classList.add("active");
    showBanner("+6 SUPPLIES");
    flash("rgba(214,195,161,.35)");

    setTimeout(() => {
        suppliesCard.classList.remove("active");
    }, 1200);
}

infectBtn.addEventListener("click", () => infectScreen(18));
fireflyBtn.addEventListener("click", spawnFireflies);
cureBtn.addEventListener("click", cureScreen);
navInfectBtn.addEventListener("click", () => infectScreen(18));
zoneBtn.addEventListener("click", () => infectScreen(18));

clickerCard.addEventListener("click", clickerMode);
fireflyCard.addEventListener("click", spawnFireflies);
suppliesCard.addEventListener("click", collectSupplies);

document.querySelectorAll("[data-nav], [data-zone]").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const type = item.dataset.nav || item.dataset.zone;

        if (type === "quarantine" || type === "safehouse") {
            cureScreen();
        }

        if (type === "fireflies") {
            spawnFireflies();
        }

        if (type === "clicker") {
            clickerMode();
        }

        if (type === "supplies") {
            collectSupplies();
        }

        if (type === "infection" || type === "spores") {
            infectScreen(16);
        }

        item.style.textShadow = "0 0 18px #a3e635";

        setTimeout(() => {
            item.style.textShadow = "";
        }, 700);
    });
});

document.addEventListener("keydown", (event) => {
    typed += event.key.toLowerCase();
    typed = typed.slice(-20);

    if (typed.includes("ellie")) {
        spawnFireflies();
        typed = "";
    }

    if (typed.includes("clicker")) {
        clickerMode();
        typed = "";
    }

    if (typed.includes("cordyceps")) {
        infectScreen(35);
        typed = "";
    }

    if (typed.includes("joel")) {
        cureScreen();
        typed = "";
    }
});

updateInfection();
