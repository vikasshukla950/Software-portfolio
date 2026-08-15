function speakAbout() {
    const msg = new SpeechSynthesisUtterance(
        "I am Piyush Tiwari. I design systems, not just code. " +
        "I focus on clarity, scalability, and building solutions " +
        "that work in the real world."
    );

    msg.lang = "en-IN";   // Indian English accent
    msg.rate = 0.9;
    msg.pitch = 1.0;

    speechSynthesis.speak(msg);
}
