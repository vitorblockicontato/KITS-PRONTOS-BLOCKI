const body = document.body;
const screenEffect = document.getElementById("screenEffect");
const secretBanner = document.getElementById("secretBanner");
const floatingSofa = document.getElementById("floatingSofa");

const coffeeBtn = document.getElementById("coffeeBtn");
const pivotBtn = document.getElementById("pivotBtn");
const sofaBtn = document.getElementById("sofaBtn");
const navCoffeeBtn = document.getElementById("navCoffeeBtn");
const perkBtn = document.getElementById("perkBtn");

const coffeeCard = document.getElementById("coffeeCard");
const sofaCard = document.getElementById("sofaCard");
const apartmentCard = document.getElementById("apartmentCard");
const orangeSofa = document.getElementById("orangeSofa");

const dashStatus = document.getElementById("dashStatus");
const coffeeMetric = document.getElementById("coffeeMetric");
const jokeMetric = document.getElementById("jokeMetric");
const pivotMetric = document.getElementById("pivotMetric");

let typed = "";
let coffees = 6;
let pivots = 0;

function showBanner(text) {
    secretBanner.textContent = text;
    secretBanner.classList.add("active");

    setTimeout(() => {
        secretBanner.classList.remove("active");
    }, 1800);
}

function flash(color = "rgba(250,204,21,.45)") {
    screenEffect.style.background = color;
    screenEffect.classList.remove("active");
    void screenEffect.offsetWidth;
    screenEffect.classList.add("active");

    setTimeout(() => {
        screenEffect.classList.remove("active");
    }, 500);
}

function serveCoffee() {
    coffees++;
    coffeeMetric.textContent = String(coffees).padStart(2, "0");
    coffeeCard.classList.toggle("active");
    body.classList.add("central-mode");
    dashStatus.textContent = "COFFEE";
    showBanner("CENTRAL PERK COFFEE");
    flash("rgba(250,204,21,.38)");
}

function pivotMode() {
    pivots++;
    pivotMetric.textContent = String(pivots).padStart(2, "0");
    body.classList.remove("pivot-mode");
    void body.offsetWidth;
    body.classList.add("pivot-mode");
    dashStatus.textContent = "PIVOT!";
    showBanner("PIVOT! PIVOT! PIVOT!");
    flash("rgba(109,40,217,.42)");

    setTimeout(() => {
        body.classList.remove("pivot-mode");
    }, 900);
}

function sofaMode() {
    sofaCard.classList.toggle("active");
    orangeSofa.classList.toggle("active");

    floatingSofa.classList.remove("active");
    void floatingSofa.offsetWidth;
    floatingSofa.classList.add("active");

    dashStatus.textContent = "SOFA";
    showBanner("ORANGE SOFA ACTIVATED");
}

function joeyMode() {
    body.classList.toggle("joey-mode");
    jokeMetric.textContent = Number(jokeMetric.textContent) + 1;
    showBanner("HOW YOU DOIN?");
    flash("rgba(249,115,22,.42)");
}

function yellowFrame() {
    apartmentCard.classList.toggle("active");
    showBanner("YELLOW FRAME ON");
    flash("rgba(250,204,21,.35)");
}

coffeeBtn.addEventListener("click", serveCoffee);
pivotBtn.addEventListener("click", pivotMode);
sofaBtn.addEventListener("click", sofaMode);
navCoffeeBtn.addEventListener("click", serveCoffee);
perkBtn.addEventListener("click", joeyMode);

coffeeCard.addEventListener("click", serveCoffee);
sofaCard.addEventListener("click", sofaMode);
apartmentCard.addEventListener("click", yellowFrame);

document.querySelectorAll("[data-nav], [data-perk]").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const type = item.dataset.nav || item.dataset.perk;

        if (type === "coffee") {
            serveCoffee();
        }

        if (type === "sofa") {
            sofaMode();
        }

        if (type === "pivot") {
            pivotMode();
        }

        if (type === "apartment" || type === "frame") {
            yellowFrame();
        }

        if (type === "joey") {
            joeyMode();
        }

        item.style.textShadow = "0 0 18px #facc15";

        setTimeout(() => {
            item.style.textShadow = "";
        }, 700);
    });
});

document.addEventListener("keydown", (event) => {
    typed += event.key.toLowerCase().replace("'", "");
    typed = typed.slice(-20);

    if (typed.includes("pivot")) {
        pivotMode();
        typed = "";
    }

    if (typed.includes("howyoudoin")) {
        joeyMode();
        typed = "";
    }

    if (typed.includes("centralperk")) {
        serveCoffee();
        typed = "";
    }

    if (typed.includes("sofa")) {
        sofaMode();
        typed = "";
    }
});
