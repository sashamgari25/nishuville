import './Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <p className="eyebrow">"WELCOME TO THE JUNGLE" - GnR</p>
      <h1>NISHUVILLE</h1>
      <p>Software. Music. Sports.</p>
      <p>From software engineering to music and sports, this is my little corner on the internet.</p>
      <div className="hero-buttons">
        <a className="sound-nav" href="projects.html">Explore Projects</a>
        <a className="sound-nav" href="listening-room.html">Listening Room</a>
      </div>
      <p className="background-N" aria-hidden="true">
        N<span className="square-dot" />
      </p>
    </section>
  );
}
