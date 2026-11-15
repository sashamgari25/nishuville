// 60% average of rated tracks, 40% holistic album rating.
// A null track rating means the track is excluded from the average.
export function calculateTrackAverage(tracks) {
  const ratedTracks = tracks.filter((track) => track.rating !== null);
  if (ratedTracks.length === 0) return null;

  const sum = ratedTracks.reduce((total, track) => total + track.rating, 0);
  return sum / ratedTracks.length;
}

export function calculateAlbumRating(trackAverage, holisticRating) {
  return 0.6 * trackAverage + 0.4 * holisticRating;
}

export function getAlbumRating(album) {
  const trackAverage = calculateTrackAverage(album.tracks);
  // New MusicBrainz imports start unrated. Don't coerce null to zero.
  if (trackAverage === null || album.holisticRating === null) return null;
  return calculateAlbumRating(trackAverage, album.holisticRating);
}
