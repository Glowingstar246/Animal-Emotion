
let folder = ""
function showRandomImage() {
    // randomise emotion
    const randomEmotionIndex = Math.floor(Math.random() * 4)
    let images
    if (randomEmotionIndex == 0) {
        images = happyImages
        folder = "happy"
    }
    if (randomEmotionIndex == 1) {
        images = angryImages
        folder = "angry"
    }
    if (randomEmotionIndex == 2) {
        images = otherImages
        folder = "other"
    }
    if (randomEmotionIndex == 3) {
        images = sadImages
        folder = "sad"
    }

    // randomise image
    const randomIndex = Math.floor(Math.random() * images.length)
    // set image source
    document.getElementById("randomImage").src = "archive/" + folder + "/" + images[randomIndex]
}

function checkanswer(emotion) {
    if (folder === emotion) {
        alert("correct");
    } else {
        alert("wrong");
    }
}
