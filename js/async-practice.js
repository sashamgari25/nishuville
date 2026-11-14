function checkAlbumRating(album) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (album.rating >= 9) {
                resolve("Highly rated album");
            } else {
                reject(new Error("Rating below threshold"));
            }
        }, 500);
    });
}


async function testAlbum() {
    try {
        const message1 = await checkAlbumRating({ rating: 9.5 });

        console.log(message1);

        const message2 = await checkAlbumRating({ rating: 8});

        console.log(message2)
    } catch (error) {
        console.error(error.message);
    }
}

testAlbum();

testAlbum();
checkAlbumRating({rating: 9.5})
    .then(message => {
        console.log("Success: ", message);
    })
    .catch(error => {
        console.error("Failed:", error.message);
    });

checkAlbumRating({rating: 8})
    .then(message => {
        console.log("Success: ", message);
    })
    .catch(error => {
        console.error("Failed:", error.message);
    });

async function getPost(postId) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const post = await response.json();
        console.log(`Title: ${post.title}`);

    } catch (error) {
        console.error(error.message);
    }
}

getPost(1);
getPost(999999);