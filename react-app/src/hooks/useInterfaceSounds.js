import { useCallback, useEffect, useRef, useState } from 'react';

// Match Nishuville's original Web Audio Archive Click exactly.
const archiveClick = {
  startFreq: 280,
  endFreq: 180,
  duration: 0.065,
  waveform: 'square',
  volume: 0.025,
};

function readSoundPreference() {
  try {
    return localStorage.getItem('nishuville-sound') !== 'false';
  } catch {
    return true;
  }
}

export function useInterfaceSounds() {
  const [soundEnabled, setSoundEnabled] = useState(readSoundPreference);
  const soundEnabledRef = useRef(soundEnabled);
  const audioContextRef = useRef(null);

  const activateAudio = useCallback(async () => {
    if (!soundEnabledRef.current) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }
      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume();
      }
    } catch (error) {
      // Browsers may deny audio until the first user gesture.
      console.warn('Nishuville audio activation failed:', error);
    }
  }, []);

  const playArchiveClick = useCallback(() => {
    const audio = audioContextRef.current;
    if (!soundEnabledRef.current || !audio || audio.state !== 'running') return;

    const now = audio.currentTime;
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.type = archiveClick.waveform;
    oscillator.frequency.setValueAtTime(archiveClick.startFreq, now);
    oscillator.frequency.linearRampToValueAtTime(
      archiveClick.endFreq,
      now + archiveClick.duration,
    );
    gain.gain.setValueAtTime(archiveClick.volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + archiveClick.duration);

    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start(now);
    oscillator.stop(now + archiveClick.duration);
  }, []);

  useEffect(() => {
    const unlockAudio = () => { void activateAudio(); };
    const onPointerOver = (event) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('.sound-nav');
      if (!link || (event.relatedTarget instanceof Node && link.contains(event.relatedTarget))) {
        return;
      }
      playArchiveClick();
    };

    // Event delegation also works with links rendered after the first React render.
    document.addEventListener('pointerdown', unlockAudio, { once: true });
    document.addEventListener('keydown', unlockAudio, { once: true });
    document.addEventListener('pointerover', onPointerOver);
    return () => {
      document.removeEventListener('pointerdown', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
      document.removeEventListener('pointerover', onPointerOver);
    };
  }, [activateAudio, playArchiveClick]);

  const toggleSound = () => {
    const enabled = !soundEnabledRef.current;
    soundEnabledRef.current = enabled;
    setSoundEnabled(enabled);
    try {
      localStorage.setItem('nishuville-sound', String(enabled));
    } catch {
      // Continue with an in-memory preference if storage is unavailable.
    }
    if (enabled) void activateAudio();
  };

  return { soundEnabled, toggleSound };
}
