const body = document.body;
const timeOverlay = document.getElementById("timeOverlay");
const screenEffect = document.getElementById("screenEffect");
const secretBanner = document.getElementById("secretBanner");

const travelBtn = document.getElementById("travelBtn");
const loopBtn = document.getElementById("loopBtn");
const resetBtn = document.getElementById("resetBtn");
const navLoopBtn = document.getElementById("navLoopBtn");
const sicBtn = document.getElementById("sicBtn");

const wormhole = document.getElementById("wormhole");
const portalCard = document.getElementById("portalCard");
const paradoxCard = document.getElementById("paradoxCard");
const timelineCard = document.getElementById("timelineCard");

const dashStatus = document.getElementById("dashStatus");
const cycleMetric = document.getElementById("cycleMetric");
const yearMetric = document.getElementById("yearMetric");
const paradoxMetric = document.getElementById("paradoxMetric");
const yearDisplay = document.getElementById("yearDisplay");

const years = [1953, 1986, 2019, 2052];
let yearIndex = 1;
let cycles = 1;
let paradoxes = 0;
let typed = "";

function showBanner(text) {
    secretBanner.textContent = text;
    secretBanner.classList.add("active");

    setTimeout(() => {
        secretBanner.classList.remove("active");
    }, 2000);
}

function flash(color = "rgba(56,189,248,.45)") {
    screenEffect.style.background = color;
    screenEffect.classList.remove("active");
    void screenEffect.offsetWidth;
    screenEffect.classList.add("active");

    setTimeout(() => {
        screenEffect.classList.remove("active");
    }, 500);
}

function updateYear() {
    const year = years[yearIndex];
    yearMetric.textContent = year;
    yearDisplay.textContent = year;
}

function timeTravel() {
    yearIndex = (yearIndex + 1) % years.length;
    cycles++;
    cycleMetric.textContent = String(cycles).padStart(2, "0");
    updateYear();

    wormhole.classList.add("active");
    portalCard.classList.add("active");
    timeOverlay.classList.add("active");
    dashStatus.textContent = "TRAVELING";

    showBanner("TIME TRAVEL: " + years[yearIndex]);
    flash("rgba(56,189,248,.38)");

    setTimeout(() => {
        timeOverlay.classList.remove("active");
        dashStatus.textContent = "STABLE";
    }, 1200);
}

function createLoop() {
    paradoxes++;
    paradoxMetric.textContent = String(paradoxes).padStart(2, "0");
    paradoxCard.classList.toggle("active");
    dashStatus.textContent = "PARADOX";
    showBanner("BOOTSTRAP PARADOX CREATED");
    flash("rgba(201,164,92,.35)");
}

function splitTimeline() {
    body.classList.toggle("split-mode");
    timelineCard.classList.toggle("active");
    dashStatus.textContent = body.classList.contains("split-mode") ? "SPLIT" : "STABLE";
    showBanner("REALITY SPLIT");
    flash("rgba(124,58,237,.40)");
}

function resetTimeline() {
    yearIndex = 1;
    cycles = 1;
    paradoxes = 0;
    updateYear();
    cycleMetric.textContent = "01";
    paradoxMetric.textContent = "00";
    dashStatus.textContent = "RESET";
    body.classList.remove("split-mode", "cave-mode");
    portalCard.classList.remove("active");
    paradoxCard.classList.remove("active");
    timelineCard.classList.remove("active");
    wormhole.classList.remove("active");
    showBanner("TIMELINE RESET");
    flash("rgba(255,255,255,.30)");
}

function sicMundus() {
    wormhole.classList.add("active");
    timeOverlay.classList.add("active");
    showBanner("SIC MUNDUS CREATUS EST");
    flash("rgba(201,164,92,.35)");

    setTimeout(() => timeOverlay.classList.remove("active"), 1400);
}

function caveMode() {
    body.classList.toggle("cave-mode");
    showBanner("WINDEN CAVE OPENED");
    flash("rgba(15,23,42,.55)");
}

travelBtn.addEventListener("click", timeTravel);
loopBtn.addEventListener("click", createLoop);
resetBtn.addEventListener("click", resetTimeline);
navLoopBtn.addEventListener("click", timeTravel);
sicBtn.addEventListener("click", sicMundus);

portalCard.addEventListener("click", timeTravel);
paradoxCard.addEventListener("click", createLoop);
timelineCard.addEventListener("click", splitTimeline);

document.querySelectorAll("[data-nav], [data-sic]").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const type = item.dataset.nav || item.dataset.sic;

        if (type === "portal" || type === "past" || type === "future") {
            timeTravel();
        }

        if (type === "loop" || type === "knot") {
            createLoop();
        }

        if (type === "timeline" || type === "present") {
            splitTimeline();
        }

        if (type === "sicmundus") {
            sicMundus();
        }

        if (type === "cave") {
            caveMode();
        }

        item.style.textShadow = "0 0 18px #38bdf8";

        setTimeout(() => {
            item.style.textShadow = "";
        }, 700);
    });
});

document.addEventListener("keydown", (event) => {
    typed += event.key.toLowerCase();
    typed = typed.slice(-20);

    if (typed.includes("sicmundus")) {
        sicMundus();
        typed = "";
    }

    if (typed.includes("jonas")) {
        timeTravel();
        typed = "";
    }

    if (typed.includes("winden")) {
        caveMode();
        typed = "";
    }

    if (typed.includes("33")) {
        timeTravel();
        typed = "";
    }
});

updateYear();
