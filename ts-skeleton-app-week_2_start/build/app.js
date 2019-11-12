class Game {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.player = "Player one";
        this.score = 400;
        this.lives = 3;
        this.highscores = [
            {
                playerName: 'Loek',
                score: 40000
            },
            {
                playerName: 'Daan',
                score: 34000
            },
            {
                playerName: 'Rimmert',
                score: 200
            }
        ];
        this.levelScreen();
    }
    startScreen() {
        this.writeTextToCanvas(`Asteroids`, 75, 750, 100, "center", "white");
        this.writeTextToCanvas(`Press to play`, 30, 750, 150, "center", "white");
        const start_button = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";
        this.loadImage(start_button, this.writeStartButtonImageToStartScreen);
        const asteroid_image = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png";
        this.loadImage(asteroid_image, this.writeAsteroidImageToStartScreen);
    }
    writeAsteroidImageToStartScreen(img) {
        this.ctx.drawImage(img, 700, 250);
    }
    writeStartButtonImageToStartScreen(img) {
        this.ctx.drawImage(img, 637, 500);
        this.writeTextToCanvas(`Play`, 20, 750, 525, "center", "black");
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "white") {
        this.ctx.font = `${fontSize}px Minecraft`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    ;
    levelScreen() {
        const lives = "./assets/images/SpaceShooterRedux/PNG/playerShip1_blue.png";
        this.loadImage(lives, this.writeLivesImageToStartScreen);
        this.writeTextToCanvas(`Your score: ${this.score}`, 20, 1400, 50, "center", "white");
        const asteroid_image1 = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png";
        this.loadImage(asteroid_image1, this.writeAsteroidImagesToStartScreen);
        const asteroid_image2 = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_med1.png";
        this.loadImage(asteroid_image2, this.writeAsteroidImagesToStartScreen);
        const asteroid_image3 = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_small1.png";
        this.loadImage(asteroid_image3, this.writeAsteroidImagesToStartScreen);
        const asteroid_image4 = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorGrey_big1.png";
        this.loadImage(asteroid_image4, this.writeAsteroidImagesToStartScreen);
        const playership_image = "./assets/images/SpaceShooterRedux/PNG/playerShip1_blue.png";
        this.loadImage(playership_image, this.writePlayerShipImageToStartScreen);
    }
    writeAsteroidImagesToStartScreen(img) {
        for (let i = 0; i <= 3; i++) {
            this.ctx.drawImage(img, Math.floor(Math.random() * 1700), Math.floor(Math.random() * 1000));
        }
    }
    writeLivesImageToStartScreen(img) {
        this.ctx.drawImage(img, 25, 25, 50, 50);
        this.ctx.drawImage(img, 75, 25, 50, 50);
        this.ctx.drawImage(img, 125, 25, 50, 50);
    }
    writePlayerShipImageToStartScreen(img) {
        this.ctx.drawImage(img, 850, 400);
    }
    titleScreen() {
    }
    loadImage(source, callback) {
        let imageElement = new Image();
        imageElement.addEventListener("load", () => {
            callback.apply(this, [imageElement]);
        });
        imageElement.src = source;
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
let init = function () {
    const Asteroids = new Game(document.getElementById('canvas'));
};
window.addEventListener('load', init);
class Pils {
    levelScreen() {
        this.drawPlayerLives();
    }
    drawPlayerLives() {
        console.log('Hallo');
    }
    ;
}
;
//# sourceMappingURL=app.js.map