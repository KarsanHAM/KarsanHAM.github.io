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
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.font = '75px Minecraft';
        this.ctx.fillText("Asteroids", 750, 100);
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.font = '30px Minecraft';
        this.ctx.fillText("Press play to play", 750, 150);
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
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "center";
        this.ctx.font = '20px Minecraft';
        this.ctx.fillText("Play", 750, 525);
    }
    levelScreen() {
        const lives = "./assets/images/SpaceShooterRedux/PNG/playerShip1_blue.png";
        this.loadImage(lives, this.writeLivesImageToStartScreen);
        this.ctx.fillStyle = "white";
        this.ctx.font = '25px Minecraft';
        this.ctx.fillText(`Your score: ${this.score}`, 1625, 65);
        const asteroid_image = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png";
        this.loadImage(asteroid_image, this.writeAsteroidImagesToStartScreen);
        const playership_image = "./assets/images/SpaceShooterRedux/PNG/playerShip1_blue.png";
        this.loadImage(playership_image, this.writePlayerShipImageToStartScreen);
    }
    writeAsteroidImagesToStartScreen(img) {
        for (let i = 0; i <= 5; i++) {
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
//# sourceMappingURL=app.js.map