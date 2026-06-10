
const body = document.body;
const main = document.getElementById("mainBtn");
const second = document.getElementById("secondBtn");
const third = document.getElementById("thirdBtn");
const banner = document.getElementById("secretBanner");
const fx = document.getElementById("screenEffect");
const navBtn = document.getElementById("navSecretBtn");

function show(text) {
    banner.textContent = text;
    banner.classList.add("active");
    setTimeout(() => banner.classList.remove("active"), 1800);
}

function motokoMode() {
    body.classList.add("hacked");
    document.querySelector(".card-one").classList.add("hologram");
    document.querySelector(".card-three").classList.add("scan");
    show("MOTOKO HUD ONLINE");
}

main.onclick = () => {
    body.classList.toggle("hacked");
    document.querySelector(".card-two").classList.toggle("terminal");
    show("ACCESS GRANTED");
};

second.onclick = () => {
    motokoMode();
    show("NEURAL LINK CONNECTED");
};

third.onclick = () => {
    document.querySelector(".card-three").classList.toggle("scan");
    fx.style.background = "rgba(6,247,255,.4)";
    fx.classList.add("active");
    show("GHOST SCAN COMPLETE");
    setTimeout(() => fx.classList.remove("active"), 500);
};

navBtn.onclick = motokoMode;

document.querySelectorAll("[data-nav-egg]").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        body.classList.add("hacked");
        show("NAV TERMINAL: ACCESS GRANTED");
    });
});

document.querySelector(".card-one").onclick = () => {
    document.querySelector(".card-one").classList.toggle("hologram");
    show("MAJOR HOLOGRAM ACTIVE");
};

document.querySelector(".card-two").onclick = () => {
    document.querySelector(".card-two").classList.toggle("terminal");
    body.classList.toggle("hacked");
    show("TERMINAL HACK COMPLETE");
};

document.querySelector(".card-three").onclick = () => {
    document.querySelector(".card-three").classList.toggle("scan");
    show("BIOMETRIC SCAN COMPLETE");
};

let typed = "";
document.addEventListener("keydown", (event) => {
    typed = (typed + event.key.toLowerCase()).slice(-18);

    if (typed.includes("motoko")) {
        motokoMode();
    }

    if (typed.includes("puppet")) {
        body.classList.add("puppet-mode");
        document.querySelector(".card-two").classList.add("terminal");
        show("PUPPET MASTER OVERRIDE");
    }
});
