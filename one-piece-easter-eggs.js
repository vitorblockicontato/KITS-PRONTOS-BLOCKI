const gearBtn = document.getElementById("gearBtn");
const rewardCard = document.getElementById("rewardCard");
const denDen = document.getElementById("denDen");
const denDenBtn = document.getElementById("denDenBtn");

if (gearBtn) {
    gearBtn.addEventListener("click", () => {
        document.body.classList.toggle("gear-second");

        gearBtn.textContent = document.body.classList.contains("gear-second")
            ? "Gear Second ON"
            : "Gear Second";
    });
}

if (rewardCard) {
    rewardCard.addEventListener("click", () => {
        rewardCard.classList.toggle("revealed");
    });
}

function callDenDen() {
    denDen.classList.add("calling");
    denDenBtn.textContent = "Purupurupuru...";

    setTimeout(() => {
        denDen.classList.remove("calling");
        denDenBtn.textContent = "Chamar suporte";
    }, 1600);
}

if (denDen && denDenBtn) {
    denDen.addEventListener("click", callDenDen);
    denDenBtn.addEventListener("click", callDenDen);
}
