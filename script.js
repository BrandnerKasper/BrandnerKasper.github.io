// Define a class for managing images
class PortfolioItem {
    constructor(imageSources, imageElement, imageCounterElement) {
        this.imageSources = imageSources;
        this.imageElement = imageElement;
        this.imageCounterElement = imageCounterElement;
        this.currentImageIndex = 0;
    }

    // Function to update the image counter text
    updateImageCounter() {
        const totalImages = this.imageSources.length; // Total number of images
        // Update the text
        this.imageCounterElement.textContent = `Image ${this.currentImageIndex + 1} of ${totalImages}`;
    }

    // Function to change the image
    changeImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.imageSources.length;
        this.imageElement.src = this.imageSources[this.currentImageIndex]; // Update the image source directly
        this.updateImageCounter(); // Update the image counter text
    }
}

// Create instances of the PortfolioItem class for each portfolio item
const bnr = new PortfolioItem(
    ["images/BossNRun/IntroScreen.png",
    "images/BossNRun/LevelScreen.png",
    "images/BossNRun/LevelGeneration.png",
    "images/BossNRun/Done.png",
    "images/BossNRun/Stiernacke.png",
    "images/BossNRun/mechanics.png",
    "images/BossNRun/WalkMov.png",
    "images/BossNRun/DJump.png",
    "images/BossNRun/game_ratings.png"],
    document.getElementById("p1"),
    document.getElementById("c1")
);

const coop = new PortfolioItem(
    ["images/CoOp/CustomCoOp.png",
    "images/CoOp/CoOp.png"],
    document.getElementById("p2"),
    document.getElementById("c2")
);

// Add event listeners to call the changeImage function for each portfolio item
document.getElementById("b1").addEventListener("click", () => bnr.changeImage());
document.getElementById("b2").addEventListener("click", () => coop.changeImage())
