import './SoundToggle.css';

export default function SoundToggle({ soundEnabled, onToggle }) {
  return (
    <button
      id="sound-toggle"
      className="sound-toggle"
      type="button"
      aria-label={soundEnabled ? 'Disable interface sounds' : 'Enable interface sounds'}
      aria-pressed={soundEnabled}
      title={soundEnabled ? 'Disable sounds' : 'Enable sounds'}
      onClick={onToggle}
    >
      <svg
        className="sound-toggle-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11 5 6 9H3v6h3l5 4V5Z" />
        <path className="sound-wave" d="M15.5 8.5a5 5 0 0 1 0 7" />
        <path className="sound-wave" d="M19 5a10 10 0 0 1 0 14" />
      </svg>
    </button>
  );
}
