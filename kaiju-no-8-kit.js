
const body = document.body;
const main = document.getElementById("mainBtn");
const second = document.getElementById("secondBtn");
const third = document.getElementById("thirdBtn");
const banner = document.getElementById("secretBanner");
const fx = document.getElementById("screenEffect");
const navBtn = document.getElementById("navSecretBtn");
const dashStatus = document.getElementById("dashStatus");

function show(text) {
    banner.textContent = text;
    banner.classList.add("active");
    setTimeout(() => banner.classList.remove("active"), 1800);
}

function alertMode() {
    body.classList.add("alert-mode");
    fx.classList.add("active");
    show("GLOBAL ALERT ACTIVATED");
    setTimeout(() => {
        body.classList.remove("alert-mode");
        fx.classList.remove("active");
    }, 700);
}

main.onclick = () => {
    body.classList.toggle("kaiju-mode");
    dashStatus.textContent = body.classList.contains("kaiju-mode") ? "KAIJU MODE" : "ONLINE";
    show("KAIJU NO. 8 AWAKENED");
};

second.onclick = alertMode;

third.onclick = () => {
    show("SCANNING THREAT...");
    document.querySelector(".kit-dashboard").classList.toggle("hud");
};

navBtn.onclick = alertMode;

document.querySelectorAll("[data-nav-egg]").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        show("THREAT SCAN: 87%");
        alertMode();
    });
});

document.querySelector(".card-one").onclick = () => {
    document.querySelector(".card-one").classList.toggle("cracked");
    show("KAIJU EYE DETECTED");
};

document.querySelector(".card-two").onclick = () => {
    document.querySelector(".card-two").classList.toggle("hud");
    show("DEFENSE HUD ONLINE");
};

document.querySelector(".card-three").onclick = () => {
    document.querySelector(".card-three").classList.toggle("transformed");
    body.classList.toggle("kaiju-mode");
    show("TRANSFORMATION COMPLETE");
};

let typed = "";
document.addEventListener("keydown", (event) => {
    typed = (typed + event.key.toLowerCase()).slice(-12);

    if (typed.includes("kafka")) {
        body.classList.add("kaiju-mode");
        show("KAFKA MODE");
    }

    if (typed.includes("mina")) {
        body.style.filter = "hue-rotate(190deg)";
        show("MINA HUD ONLINE");
    }

    if (typed.includes("hoshina")) {
        fx.style.background = "linear-gradient(120deg, transparent, white, transparent)";
        fx.classList.add("active");
        show("HOSHINA SLASH");
        setTimeout(() => fx.classList.remove("active"), 500);
    }
});
