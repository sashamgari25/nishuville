async function testAlbumSearch() {
    // Your implementation
    try {
    const albumsSearched = await searchAlbums("Blonde", "Frank Ocean");
    console.log(`Matching Albums: ${albumsSearched.length}`);
    albumsSearched.forEach(album => {
        console.log(`Title: ${album.title}, ID: ${album.id}`);
    });
    } catch (error) {
        console.error("Album Search Failed: ", error.message);
    }
}

async function testReleaseSearch() {
    // Your implementation
    try {
        const albumsSearched = await searchAlbums("Blonde", "Frank Ocean");

        if (albumsSearched.length === 0) {
            console.log("No albums found");
            return;
        }

        const firstAlbumId = albumsSearched[0].id;

        const releasesFound = await getReleases(firstAlbumId);

        console.log(`Amount of Releases Found: ${releasesFound.length}`);

        releasesFound.forEach(release => {
            console.log(`Title: ${release.title}, id: ${release.id}`);
        });
    } catch (error) {
        console.error("releases search failed: ", error.message);
    }

}

async function testCoverArt() {
    // Your implementation
    try {
        const searchedArt = await getCoverArt("8294645a-f996-44b6-9060-7f189b9f59f3");

        if (searchedArt === null) {
            console.log("No Cover Found");
            return;
        }

        console.log(`url ${searchedArt}`);
    } catch (error) {
        console.error("Cover art request failed: ", error.message)
    }

}

async function testTracklist() {
    try {
        const tracks = await getTracklist(
            "8294645a-f996-44b6-9060-7f189b9f59f3"
        );

        console.table(tracks);
        console.log(`Total tracks: ${tracks.length}`);
    } catch (error) {
        console.error(error.message);
    }
}

async function testBuildAlbum() {
    // Your implementation
    try {
        const blondeRelease = {
            id: "8294645a-f996-44b6-9060-7f189b9f59f3",
            title: "Blond",
            "artist-credit": [
                { name: "Frank Ocean" }
            ]
        };

        const album = await buildAlbum(blondeRelease);
        if (album === null) {
            console.error("Album didn't build properly");
            return;
        }

        console.log(album);
        console.log(`Num Tracks: ${album.tracks.length}`);

        downloadAlbum(album);
    } catch (error) {
        console.error("Build album request failed: ", error.message);
    }

}

async function testAlbumJSON() {
    // Your implementation
    try {
        const blondeRelease = {
            id: "8294645a-f996-44b6-9060-7f189b9f59f3",
            title: "Blond",
            "artist-credit": [
                { name: "Frank Ocean" }
            ]
        };

        const album = await buildAlbum(blondeRelease);
        if (album === null) {
            console.error("Album didn't build properly");
            return;
        }

        const albumjson = JSON.stringify(album, null, 2);
        console.log(albumjson);
        const albumRestored = JSON.parse(albumjson);
        console.log(`Title: ${albumRestored.title}, Num Tracks: ${albumRestored.tracks.length}`);
    } catch (error) {
        console.error("JSON transformation failed: ", error.message);
    }
}

async function testCoverFallback() {
    try {
        const testReleases = [
            {
                id: "cd99ad0a-aea4-4714-971e-70c255b8d363",
                title: "Blonde"
            },
            {
                id: "8294645a-f996-44b6-9060-7f189b9f59f3",
                title: "Blond"
            }
        ];
        const coverUrl = await findAvailableCover(testReleases);

        console.log("Selected artwork:", coverUrl);
    } catch (error) {
        console.error("Artwork lookup failed:", error.message);
    }
}

async function testFullImport() {
    try {
        const selectedRelease = {
            id: "cd99ad0a-aea4-4714-971e-70c255b8d363",
            title: "Blonde",
            "artist-credit": [{ name: "Frank Ocean" }]
        };

        const alternativeRelease = {
            id: "8294645a-f996-44b6-9060-7f189b9f59f3",
            title: "Blond",
            "artist-credit": [{ name: "Frank Ocean" }]
        };
        
        const album = await buildAlbum(
            selectedRelease,
            [selectedRelease, alternativeRelease]
        );

        if (album === null) {
            console.log("Import incomplete");
            return;
        }

        console.log("Album:", album.title);
        console.log("Tracks:", album.tracks.length);
        console.log("Tracklist release:", album.musicbrainzReleaseId);
        console.log("Artwork release:", album.coverArtReleaseId);
        console.log("Artwork URL:", album.cover);

    } catch (error) {
        console.error("Import failed:", error.message);
    }
}

testFullImport();

//testCoverFallback();
// testAlbumSearch();
// testReleaseSearch();
// testCoverArt();
// testTracklist();
// testBuildAlbum();
// testAlbumJSON();
