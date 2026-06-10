const flashBtn = document.getElementById("flashBtn");
const cameraFlash = document.getElementById("cameraFlash");
const starBtn = document.getElementById("starBtn");
const clapperBtn = document.getElementById("clapperBtn");
const starRain = document.getElementById("starRain");
const oshiLogo = document.getElementById("oshiLogo");
const liveBanner = document.getElementById("liveBanner");

let typed = "";
let logoClicks = 0;

function flashScreen() {
    cameraFlash.classList.remove("active");
    void cameraFlash.offsetWidth;
    cameraFlash.classList.add("active");

    setTimeout(() => {
        cameraFlash.classList.remove("active");
    }, 400);
}

function makeStars(symbol, amount) {
    for (let i = 0; i < amount; i++) {
        const star = document.createElement("span");
        star.className = "falling-star";
        star.textContent = symbol;
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDelay = Math.random() * 1.2 + "s";
        star.style.fontSize = 18 + Math.random() * 20 + "px";
        starRain.appendChild(star);

        setTimeout(() => star.remove(), 3600);
    }
}

if (flashBtn) {
    flashBtn.addEventListener("click", flashScreen);
}

if (starBtn) {
    starBtn.addEventListener("click", () => {
        makeStars("★", 24);
    });
}

if (clapperBtn) {
    clapperBtn.addEventListener("click", () => {
        clapperBtn.style.transform = "rotate(-8deg) translateY(-5px)";
        flashScreen();

        setTimeout(() => {
            clapperBtn.style.transform = "";
        }, 400);
    });
}

if (oshiLogo) {
    oshiLogo.addEventListener("click", () => {
        logoClicks++;

        if (logoClicks >= 5) {
            document.body.classList.add("ai-mode");
            liveBanner.classList.add("active");
            makeStars("🌟", 45);

            setTimeout(() => {
                liveBanner.classList.remove("active");
            }, 2200);

            logoClicks = 0;
        }
    });
}

document.addEventListener("keydown", (event) => {
    typed += event.key.toLowerCase();
    typed = typed.slice(-12);

    if (typed.includes("ai")) {
        document.body.classList.remove("ruby-mode", "aqua-mode");
        document.body.classList.add("ai-mode");
        makeStars("⭐", 35);
        typed = "";
    }

    if (typed.includes("ruby")) {
        document.body.classList.remove("ai-mode", "aqua-mode");
        document.body.classList.add("ruby-mode");
        makeStars("💜", 35);
        typed = "";
    }

    if (typed.includes("aqua")) {
        document.body.classList.remove("ai-mode", "ruby-mode");
        document.body.classList.add("aqua-mode");
        flashScreen();
        typed = "";
    }
});
