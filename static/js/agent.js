function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.rate = 0.95;
    msg.pitch = 1.1;
    msg.volume = 1;
    window.speechSynthesis.speak(msg);
}

function goHome() {
    const sound = document.getElementById("portal-sound");
    const boxWrapper = document.getElementById("box-wrapper");
    const agent = document.getElementById("agent");
    const fadeOverlay = document.getElementById("dimension-fade");

    // 🔊 PLAY SOUND (safe way)
    if (sound) {
        sound.currentTime = 0;
        sound.volume = 0.7;
        sound.play().catch(() => {
            console.log("Audio play blocked by browser. User must click first.");
        });
    }

    // 🎬 START ANIMATION
    if (boxWrapper) boxWrapper.classList.add("box-activate");
    if (agent) agent.classList.add("agent-react");

    // 🌀 ZOOM EFFECT
    setTimeout(() => {
        const stage = document.getElementById("stage");
        if (stage) stage.classList.add("portal-zoom");
    }, 900);

    // 🌑 FADE
    setTimeout(() => {
        if (fadeOverlay) {
            fadeOverlay.style.opacity = "1";
            fadeOverlay.style.pointerEvents = "auto";
        }
    }, 1410);

    // 🚀 REDIRECT
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1900);
}
