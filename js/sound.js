
/* ======================================
   NISHUVILLE — SOUND SYSTEM
   ====================================== */

// Sound preference and audio state
const soundToggle = document.querySelector("#sound-toggle");

let soundEnabled = localStorage.getItem("nishuville-sound") !== "false";
let audioContext;


// ======================================
// SOUND CONFIGURATIONS
// ======================================

const sounds = {
    archiveClick: {
        startFreq: 280,
        endFreq: 180,
        duration: 0.065,
        waveform: "square",
        volume: 0.025
    }
};


// ======================================
// SOUND TOGGLE UI
// ======================================

function updateSoundToggleUI() {
    soundToggle.setAttribute("aria-pressed", String(soundEnabled));

    soundToggle.setAttribute(
        "aria-label",
        soundEnabled
            ? "Disable interface sounds"
            : "Enable interface sounds"
    );

    soundToggle.title = soundEnabled
        ? "Disable sounds"
        : "Enable sounds";
}


// ======================================
// AUDIO ACTIVATION
// ======================================

async function activateAudio() {
    if (!soundEnabled) return;

    if (!audioContext) {
        audioContext = new AudioContext();
    }

    if (audioContext.state === "suspended") {
        await audioContext.resume();
    }
}


// ======================================
// SOUND GENERATION
// ======================================

function playSound(sound) {
    if (
        !soundEnabled ||
        !audioContext ||
        audioContext.state !== "running"
    ) {
        return;
    }

    const now = audioContext.currentTime;

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    // Configure waveform and frequency
    oscillator.type = sound.waveform;

    oscillator.frequency.setValueAtTime(sound.startFreq, now);
    oscillator.frequency.linearRampToValueAtTime(
        sound.endFreq,
        now + sound.duration
    );

    // Configure volume envelope
    gain.gain.setValueAtTime(sound.volume, now);
    gain.gain.exponentialRampToValueAtTime(
        0.001,
        now + sound.duration
    );

    // Connect audio nodes
    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    // Play sound
    oscillator.start(now);
    oscillator.stop(now + sound.duration);
}


// ======================================
// EVENT LISTENERS
// ======================================

// Initialise toggle appearance
if (soundToggle) {
    updateSoundToggleUI();

    soundToggle.addEventListener("click", async function() {
        soundEnabled = !soundEnabled;

        localStorage.setItem(
            "nishuville-sound",
            String(soundEnabled)
        );

        updateSoundToggleUI();

        if (soundEnabled) {
            await activateAudio();
        }
    });
}

// Allow audio activation after user interaction
document.addEventListener("pointerdown", activateAudio, { once: true });
document.addEventListener("keydown", activateAudio, { once: true });

// Apply Archive Click to selected navigation links
const soundNav = document.querySelectorAll(".sound-nav");

soundNav.forEach(link => {
    link.addEventListener("pointerenter", function() {
        playSound(sounds.archiveClick);
    });
});
