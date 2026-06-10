
const body = document.body;
const main = document.getElementById("mainBtn");
const second = document.getElementById("secondBtn");
const third = document.getElementById("thirdBtn");
const banner = document.getElementById("secretBanner");
const navBtn = document.getElementById("navSecretBtn");

function show(text) {
    banner.textContent = text;
    banner.classList.add("active");
    setTimeout(() => banner.classList.remove("active"), 1800);
}

main.onclick = () => {
    body.classList.toggle("turbo-mode");
    document.querySelector(".card-one").classList.toggle("turbo");
    show("TURBO GRANNY MODE");
};

second.onclick = () => {
    body.classList.toggle("serpo-mode");
    document.querySelector(".card-three").classList.toggle("alien");
    show("SERPO SIGNAL FOUND");
};

third.onclick = () => {
    document.querySelector(".card-two").classList.toggle("psychic");
    show("PSYCHIC BURST");
};

navBtn.onclick = () => {
    body.classList.toggle("turbo-mode");
    show("REALITY DISTORTED");
};

document.querySelectorAll("[data-nav-egg]").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        item.style.transform = "rotate(8deg) scale(1.12)";
        show("PARANORMAL NAV GLITCH");
        setTimeout(() => item.style.transform = "", 500);
    });
});

document.querySelector(".card-one").onclick = () => {
    document.querySelector(".card-one").classList.toggle("turbo");
    body.classList.toggle("turbo-mode");
    show("OKARUN SPEED UP");
};

document.querySelector(".card-two").onclick = () => {
    document.querySelector(".card-two").classList.toggle("psychic");
    show("MOMO PSYCHIC POWER");
};

document.querySelector(".card-three").onclick = () => {
    document.querySelector(".card-three").classList.toggle("alien");
    body.classList.toggle("serpo-mode");
    show("ALIEN SIGNAL DETECTED");
};

let typed = "";
document.addEventListener("keydown", (event) => {
    typed = (typed + event.key.toLowerCase()).slice(-12);

    if (typed.includes("turbo")) {
        body.classList.add("turbo-mode");
        show("TURBO MODE");
    }

    if (typed.includes("serpo")) {
        body.classList.add("serpo-mode");
        document.querySelector(".card-three").classList.add("alien");
        show("ALIEN DETECTED");
    }

    if (typed.includes("momo")) {
        document.querySelector(".card-two").classList.add("psychic");
        show("MOMO PSYCHIC POWER");
    }
});
