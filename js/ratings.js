
function calculateTrackAverage(tracks) {
    const ratedTracks = tracks.filter(track => track.rating !== null);

    if (ratedTracks.length === 0) return null;

    const sum = ratedTracks.reduce(
        (total, track) => total + track.rating,
        0
    );

    return sum / ratedTracks.length;
}

function calculateAlbumRating(trackAverage, holisticRating) {
    return 0.6 * trackAverage + 0.4 * holisticRating;
}

function getAlbumRating(album) {
    const trackAverage = calculateTrackAverage(album.tracks);

    if (trackAverage === null) return null;

    return calculateAlbumRating(
        trackAverage,
        album.holisticRating
    );
}
