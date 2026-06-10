
const body = document.body;
const main = document.getElementById("mainBtn");
const second = document.getElementById("secondBtn");
const third = document.getElementById("thirdBtn");
const banner = document.getElementById("secretBanner");
const fx = document.getElementById("screenEffect");
const navBtn = document.getElementById("navSecretBtn");
const metricOne = document.getElementById("metricOne");

let checkpoint = 0;
let loops = 0;

function show(text) {
    banner.textContent = text;
    banner.classList.add("active");
    setTimeout(() => banner.classList.remove("active"), 1800);
}

function resetLoop() {
    loops++;
    body.classList.add("resetting");
    fx.classList.add("active");
    metricOne.textContent = loops;
    show("RETURN BY DEATH");

    setTimeout(() => {
        body.className = "rezero-page";
        fx.classList.remove("active");
    }, 900);
}

main.onclick = resetLoop;

second.onclick = () => {
    checkpoint++;
    document.querySelector(".card-one").classList.add("checkpoint");
    show("CHECKPOINT " + checkpoint + " SAVED");
};

third.onclick = resetLoop;

navBtn.onclick = resetLoop;

document.querySelectorAll("[data-nav-egg]").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        show("TIME DISTORTION");
        item.style.animation = "timeSlow .8s ease";
        setTimeout(() => item.style.animation = "", 850);
    });
});

document.querySelector(".card-one").onclick = () => {
    checkpoint++;
    document.querySelector(".card-one").classList.toggle("checkpoint");
    show("CHECKPOINT SAVED");
};

document.querySelector(".card-two").onclick = () => {
    body.className = "rezero-page emilia-mode";
    document.querySelector(".card-two").classList.toggle("frozen");
    show("EMILIA FROZEN FATE");
};

document.querySelector(".card-three").onclick = () => {
    body.className = "rezero-page satella-mode";
    document.querySelector(".card-three").classList.toggle("shadow");
    show("SATELLA SHADOW");
};

let typed = "";
document.addEventListener("keydown", (event) => {
    typed = (typed + event.key.toLowerCase()).slice(-14);

    if (typed.includes("subaru")) resetLoop();

    if (typed.includes("emilia")) {
        body.className = "rezero-page emilia-mode";
        document.querySelector(".card-two").classList.add("frozen");
        show("EMILIA MODE");
    }

    if (typed.includes("rem")) {
        body.className = "rezero-page rem-mode";
        show("REM MODE");
    }

    if (typed.includes("satella")) {
        body.className = "rezero-page satella-mode";
        document.querySelector(".card-three").classList.add("shadow");
        show("SATELLA SHADOW");
    }
});
