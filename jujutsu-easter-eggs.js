const domainBtn = document.getElementById("domainBtn");
const domainOverlay = document.getElementById("domainOverlay");
const blackFlashBtn = document.getElementById("blackFlashBtn");
const blackFlash = document.getElementById("blackFlash");
const hollowPurpleBtn = document.getElementById("hollowPurpleBtn");
const purpleOrb = document.getElementById("purpleOrb");
const jjkLogo = document.getElementById("jjkLogo");
const secretBanner = document.getElementById("secretBanner");

let logoClicks = 0;
let typed = "";

if (domainBtn && domainOverlay) {
    domainBtn.addEventListener("click", () => {
        domainOverlay.classList.add("active");
        document.body.classList.add("domain-active");

        setTimeout(() => {
            domainOverlay.classList.remove("active");
            document.body.classList.remove("domain-active");
        }, 3600);
    });
}

if (blackFlashBtn && blackFlash) {
    blackFlashBtn.addEventListener("click", () => {
        blackFlash.classList.remove("active");
        void blackFlash.offsetWidth;
        blackFlash.classList.add("active");

        setTimeout(() => {
            blackFlash.classList.remove("active");
        }, 500);
    });
}

if (hollowPurpleBtn && purpleOrb) {
    hollowPurpleBtn.addEventListener("click", () => {
        purpleOrb.classList.remove("active");
        void purpleOrb.offsetWidth;
        purpleOrb.classList.add("active");

        setTimeout(() => {
            purpleOrb.classList.remove("active");
        }, 1300);
    });
}

if (jjkLogo && secretBanner) {
    jjkLogo.addEventListener("click", () => {
        logoClicks++;

        if (logoClicks >= 6) {
            document.body.classList.add("six-eyes");
            secretBanner.classList.add("active");

            setTimeout(() => {
                secretBanner.classList.remove("active");
            }, 2200);

            logoClicks = 0;
        }
    });
}

document.addEventListener("keydown", (event) => {
    typed += event.key.toLowerCase();
    typed = typed.slice(-20);

    if (typed.includes("ryomen sukuna")) {
        document.body.classList.add("sukuna-mode");

        setTimeout(() => {
            document.body.classList.remove("sukuna-mode");
        }, 5000);

        typed = "";
    }
});
