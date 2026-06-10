const body = document.body;
const screenEffect = document.getElementById("screenEffect");
const secretBanner = document.getElementById("secretBanner");
const horseRunner = document.getElementById("horseRunner");
const moneyRain = document.getElementById("moneyRain");

const byOrderBtn = document.getElementById("byOrderBtn");
const officeBtn = document.getElementById("officeBtn");
const horseBtn = document.getElementById("horseBtn");
const chairBtn = document.getElementById("chairBtn");
const orderBtn = document.getElementById("orderBtn");
const shelbyBtn = document.getElementById("shelbyBtn");
const pocketWatch = document.getElementById("pocketWatch");

const contractCard = document.getElementById("contractCard");
const betCard = document.getElementById("betCard");
const razorCard = document.getElementById("razorCard");

const dashStatus = document.getElementById("dashStatus");
const territoryMetric = document.getElementById("territoryMetric");
const profitMetric = document.getElementById("profitMetric");
const influenceMetric = document.getElementById("influenceMetric");

let typed = "";
let bladeClicks = 0;

function showBanner(text) {
    secretBanner.textContent = text;
    secretBanner.classList.add("active");

    setTimeout(() => {
        secretBanner.classList.remove("active");
    }, 2000);
}

function flash(color = "rgba(201,164,92,.45)") {
    screenEffect.style.background = color;
    screenEffect.classList.remove("active");
    void screenEffect.offsetWidth;
    screenEffect.classList.add("active");

    setTimeout(() => {
        screenEffect.classList.remove("active");
    }, 500);
}

function byOrder() {
    dashStatus.textContent = "BY ORDER";
    influenceMetric.textContent = "100%";
    showBanner("BY ORDER OF THE PEAKY BLINDERS");
    flash("rgba(201,164,92,.40)");
}

function tommyOffice() {
    body.classList.toggle("office-mode");
    dashStatus.textContent = body.classList.contains("office-mode") ? "TOMMY OFFICE" : "CONTROLLED";
    territoryMetric.textContent = body.classList.contains("office-mode") ? "11" : "07";
    showBanner("TOMMY'S OFFICE");
    flash("rgba(201,164,92,.34)");
}

function horseRace() {
    betCard.classList.add("active");

    horseRunner.classList.remove("active");
    void horseRunner.offsetWidth;
    horseRunner.classList.add("active");

    profitMetric.textContent = "£50K";
    dashStatus.textContent = "BET WON";

    showBanner("HORSE BET WON");
}

function razorSlash() {
    razorCard.classList.toggle("active");
    bladeClicks++;

    flash("linear-gradient(120deg, transparent, white, #c9a45c, transparent)");
    showBanner("RAZOR CAP SLASH");

    if (bladeClicks >= 5) {
        byOrder();
        bladeClicks = 0;
    }
}

function contractStamp() {
    contractCard.classList.toggle("active");
    showBanner("CONTRACT STAMPED");
    flash("rgba(127,29,29,.42)");
}

function moneyFall() {
    for (let i = 0; i < 32; i++) {
        const bill = document.createElement("span");
        bill.className = "money";
        bill.textContent = "£";
        bill.style.left = Math.random() * 100 + "vw";
        bill.style.animationDelay = Math.random() * 1.2 + "s";
        bill.style.fontSize = 18 + Math.random() * 18 + "px";
        moneyRain.appendChild(bill);

        setTimeout(() => bill.remove(), 3600);
    }
}

function arthurMode() {
    body.classList.add("arthur-mode");
    showBanner("ARTHUR MODE");
    flash("rgba(127,29,29,.55)");

    setTimeout(() => {
        body.classList.remove("arthur-mode");
    }, 1600);
}

byOrderBtn.addEventListener("click", byOrder);
officeBtn.addEventListener("click", tommyOffice);
horseBtn.addEventListener("click", horseRace);
chairBtn.addEventListener("click", tommyOffice);
orderBtn.addEventListener("click", byOrder);
shelbyBtn.addEventListener("click", byOrder);
pocketWatch.addEventListener("click", () => {
    showBanner("POCKET WATCH OPENED");
    flash("rgba(201,164,92,.30)");
});

contractCard.addEventListener("click", contractStamp);
betCard.addEventListener("click", horseRace);
razorCard.addEventListener("click", razorSlash);

document.querySelectorAll("[data-nav], [data-shelby]").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const type = item.dataset.nav || item.dataset.shelby;

        if (type === "smoke") {
            showBanner("CIGAR SMOKE");
            flash("rgba(120,113,108,.28)");
        }

        if (type === "contracts" || type === "contract") {
            contractStamp();
        }

        if (type === "bets") {
            horseRace();
        }

        if (type === "territory" || type === "office") {
            tommyOffice();
        }

        if (type === "razor" || type === "blade") {
            razorSlash();
        }

        item.style.textShadow = "0 0 18px #c9a45c";

        setTimeout(() => {
            item.style.textShadow = "";
        }, 700);
    });
});

document.addEventListener("keydown", (event) => {
    typed += event.key.toLowerCase();
    typed = typed.slice(-20);

    if (typed.includes("tommy")) {
        tommyOffice();
        typed = "";
    }

    if (typed.includes("arthur")) {
        arthurMode();
        typed = "";
    }

    if (typed.includes("horse")) {
        horseRace();
        typed = "";
    }

    if (typed.includes("byorder")) {
        byOrder();
        moneyFall();
        typed = "";
    }
});
