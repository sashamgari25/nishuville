import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import AlbumCard from './components/AlbumCard.jsx';
import Footer from './components/Footer.jsx';
import SoundToggle from './components/SoundToggle.jsx';
import { projects } from './data/projects.js';
import { albums } from './data/albums.js';
import { getAlbumRating } from './utils/ratings.js';
import { useInterfaceSounds } from './hooks/useInterfaceSounds.js';

export default function App() {
  const { soundEnabled, toggleSound } = useInterfaceSounds();
  const featuredProjects = projects.filter((project) => project.featured);
  const topAlbums = [...albums]
    .filter((album) => getAlbumRating(album) !== null)
    .sort((a, b) => getAlbumRating(b) - getAlbumRating(a))
    .slice(0, 5);

  return (
    <>
      <Header />
      <main className="page-container">
        <Hero />

        <section id="featured-projects">
          <div className="section-heading">
            <p className="sub-eyebrow">01 / THE ARCHIVE</p>
            <h2>Selected Work</h2>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="top-albums">
          <div className="section-heading">
            <p className="sub-eyebrow">02 / THE COLLECTION</p>
            <div className="top-albums-hero">
              <h2>On Rotation</h2>
            </div>
          </div>
          <div className="album-grid">
            {topAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      {/* Keep the toggle last in document order for logical keyboard navigation. */}
      <SoundToggle soundEnabled={soundEnabled} onToggle={toggleSound} />
    </>
  );
}
