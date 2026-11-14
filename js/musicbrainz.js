async function searchAlbums(albumName, artistName) {
    try {
        const searchQuery =
            `releasegroup:"${albumName}" AND artist:"${artistName}"`;

        const query = encodeURIComponent(searchQuery);

        const url =
            `https://musicbrainz.org/ws/2/release-group/?query=${query}&fmt=json&limit=5`;

        const res = await fetch(url);


        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`)
        }

        const resjs = await res.json();

        return resjs["release-groups"]
    } catch (error) {
        console.error("Album search failed: ", error.message);
        throw error;
    }
        
}

async function getReleases(releaseGroupId) {
    try {
        const url =
            `https://musicbrainz.org/ws/2/release?release-group=${releaseGroupId}&fmt=json&limit=25`;

        const res = await fetch(url);


        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`)
        }

        const resjs = await res.json();

        return resjs.releases;
    } catch(error) {
        console.error("releases search failed: ", error.message);
        throw error;
    } 

}

async function getCoverArt(releaseId) {
    try {
        const url =
                `https://coverartarchive.org/release/${releaseId}`;

        const res = await fetch(url);
        if (res.status === 404) {
            return null;
        }
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`)
        }

        const resjs = await res.json();

        const frontCover = resjs.images.find(image => image.front === true);

        if (!frontCover) {
            console.log("No front cover available for this release.");
            return null;
        }

        return frontCover.thumbnails["500"] ?? null;
    } catch (error) {
        console.error("Cover art request failed: ", error.message);
        throw error;
    }
}

async function getTracklist(releaseId) {
    try {
        const url = `https://musicbrainz.org/ws/2/release/${releaseId}?inc=recordings&fmt=json`
        const res = await fetch(url);


        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`)
        }

        const resjs = await res.json();

        const trackList = resjs.media.flatMap(disc =>
            disc.tracks.map(track => {
                return {
                    id: track.recording.id,
                    title: track.title,
                    position: track.position,
                    disc: disc.position,
                    rating: null
                };
            })
        );

        return trackList;
    } catch(error) {
        console.error("Track list request failed: ", error.message);
        throw error;
    } 
}

async function buildAlbum(release, releases = [release]) {
    try {
        const trackList = await getTracklist(release.id);
        if (trackList.length === 0) return null;
        const alternatives = [
            release,
            ...releases.filter(item => item.id !== release.id)
        ];

        const artwork = await findAvailableCover(alternatives);
        if (artwork === null) {
            return null;
        }

        const album = {
            id: release.id,
            musicbrainzReleaseId: release.id,
            title: release.title,
            artist: release["artist-credit"][0].name,
            cover: artwork.url,
            coverArtReleaseId: artwork.releaseId,
            holisticRating: null,
            review: "",
            tracks: trackList,
        }

        return album;
    } catch(error) {
        console.error("Build album request failed: ", error.message);
        throw error;
    }
}

function downloadAlbum(album) {
    // Convert the album object into formatted JSON text
    const jsonText = JSON.stringify(album, null, 2);

    // Create a downloadable file-like object
    const blob = new Blob([jsonText], {
        type: "application/json"
    });

    // Create a temporary URL for the file
    const url = URL.createObjectURL(blob);

    // Create a temporary download link
    const link = document.createElement("a");
    link.href = url;
    link.download = `${album.title.toLowerCase()}.json`;

    // Trigger the download
    link.click();

    // Clean up the temporary URL
    URL.revokeObjectURL(url);
}

async function findAvailableCover(releases) {
    for (const release of releases) {
        const coverArt = await getCoverArt(release.id);
        if (coverArt !== null) {
            return {
                url: coverArt,
                releaseId: release.id
            };
        }
    }

    return null;
}

