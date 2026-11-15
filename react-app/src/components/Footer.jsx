import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-main">
          <p className="sub-eyebrow">NISHUVILLE / CONTACT</p>
          <h2 id="footer-heading">Let's Connect.</h2>
          <p>Have an project idea, music recommendation or just want to say hello?</p>
          {/* Original site uses a placeholder address; replace before launch. */}
          <a className="footer-contact sound-nav" href="mailto:YOUR_EMAIL">
            Get in touch ↗
          </a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Nishuville</p>
          <p>Made in Sydney</p>
        </div>
      </div>
    </footer>
  );
}
