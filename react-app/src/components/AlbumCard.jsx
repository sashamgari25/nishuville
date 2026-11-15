import { getAlbumRating } from '../utils/ratings.js';
import './AlbumCard.css';

export default function AlbumCard({ album }) {
  const rating = getAlbumRating(album);

  return (
    <article className="album-card">
      {/* Focusable, but deliberately not a link until Milestone 08. */}
      <div className="album-visual" tabIndex={0}>
        <img
          className="album-cover"
          src={album.cover}
          loading="lazy"
          alt={`${album.title} album cover`}
        />
        <div className="album-overlay">
          <h3>{album.title}</h3>
          <p>{rating === null ? 'Not rated' : `★ ${rating.toFixed(2)}/10`}</p>
        </div>
      </div>
    </article>
  );
}
