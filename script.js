// Elementos
const envelope = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// CLICK ENVELOPE
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letterContainer.style.display = "flex";

    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);
});

// BOTÃO ESCAPA
noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES BUTTON
yesBtn.addEventListener("click", () => {
    title.textContent = "EBA! ainda bem que você disse sim...";
    catImg.src = "img/cat_dance.gif";

    letterWindow.classList.add("final");

    buttons.style.display = "none";
    finalText.style.display = "block";
});