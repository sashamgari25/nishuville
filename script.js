const soundToggle = document.querySelector("#sound-toggle");

let soundEnabled = localStorage.getItem("nishuville-sound") !== "false";
let audioContext;

const sounds = {
    archiveClick: {
        startFreq: 280,
        endFreq: 180,
        duration: 0.065,
        waveform: "square",
        volume: 0.025
    }
};

function updateSoundToggleUI() {
    soundToggle.setAttribute("aria-pressed", String(soundEnabled));

    soundToggle.setAttribute(
        "aria-label",
        soundEnabled ? "Disable interface sounds" : "Enable interface sounds"
    );

    soundToggle.title = soundEnabled
        ? "Disable sounds"
        : "Enable sounds";
}

updateSoundToggleUI();

async function activateAudio() {  

    if (!soundEnabled) return;

    if (!audioContext) {
        audioContext = new AudioContext();
    }
    if (audioContext.state === "suspended") await audioContext.resume();
}

soundToggle.addEventListener("click", async function() {
    // Toggle soundEnabled
    soundEnabled = !soundEnabled;

    localStorage.setItem("nishuville-sound", String(soundEnabled));

    updateSoundToggleUI();

    if (soundEnabled) {
        await activateAudio();
    }
});

document.addEventListener("pointerdown", activateAudio, { once: true });

document.addEventListener("keydown", activateAudio, { once: true });

const soundNav = document.querySelectorAll(".sound-nav");

function playSound(sound) {
    if (!soundEnabled || !audioContext || audioContext.state !== "running") {
        return;
    }

    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = sound.waveform;
    oscillator.frequency.setValueAtTime(sound.startFreq, now);
    oscillator.frequency.linearRampToValueAtTime(
        sound.endFreq,
        now + sound.duration
    );

    gain.gain.setValueAtTime(sound.volume, now);
    gain.gain.exponentialRampToValueAtTime(
        0.001,
        now + sound.duration
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(now + sound.duration);
}

soundNav.forEach(button => {
    button.addEventListener("pointerenter", function() {
        playSound(sounds.archiveClick);
    });
});
    
