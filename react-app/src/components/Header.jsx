import './Header.css';

function Header() {    
    return (
        <header>
            <div className="page-container">
            <a href="index.html" className="logo" aria-label="Nishuville home">
                <img src="/assets/nishuville-logo.svg"
                        alt=""
                        width="96"
                        height="96"/>
            </a>

            <nav className ="desktop-nav" aria-label="Main navigation">
                <a className="sound-nav" href="index.html" aria-current="page">Home</a>
                <a className="sound-nav" href="projects.html">Projects</a>
                <a className="sound-nav" href="listening-room.html">Listening Room</a>
                <a className="sound-nav" href="blog.html">Blog</a>
                <a className="sound-nav" href="about.html">About</a>
                <a className="sound-nav" href="contact.html">Contact</a>
            </nav>
            <details className="mobile-menu">
                <summary>Menu</summary>
                <nav aria-label="Mobile navigation">
                    <a href="index.html" aria-current="page">Home</a>
                    <a href="projects.html">Projects</a>
                    <a href="listening-room.html">Listening Room</a>
                    <a href="blog.html">Blog</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
                </nav>
            </details>
            </div>
        </header>
    )
}

export default Header;