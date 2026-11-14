
/* ======================================
   NISHUVILLE — JAVASCRIPT TESTS
   ====================================== */

function approximatelyEqual(actual, expected) {
    return Math.abs(actual - expected) < 0.000001;
}

// Test 1: Average of three song ratings

console.assert(
    approximatelyEqual(calculateTrackAverage([
        { rating: 8 },
        { rating: 9 },
        { rating: 10 }
    ]), 9),
    "Test 1 failed: incorrect track average"
);

// Test 2: Weighted album rating

console.assert(
    approximatelyEqual(calculateAlbumRating(8, 9.5), 8.6),
    "Test 2 failed: incorrect weighted rating"
);

console.assert(
    approximatelyEqual(
    calculateTrackAverage([
        { rating: 10 },
        { rating: null },
        { rating: 8 }
    ]), 9),
    "Test 3 failed: incorrect track average"
);

console.assert(
    calculateTrackAverage([
        { rating: null },
        { rating: null },
        { rating: null }
    ]) === null,
    "Test 4 failed: incorrect track average"
);

console.assert(

    approximatelyEqual(
    getAlbumRating({
        id: "graduation",
        title: "Graduation",
        artist: "Kanye West",
        holisticRating: 8.5,
        cover: "assets/graduation.jpg",
        tracks: [
            { title: "Good Morning", rating: 10 },
            { title: "Champion", rating: 8 },
        ]
    }), 8.8), 
    "Test 5 failed: Incorrect weighted rating"
);
