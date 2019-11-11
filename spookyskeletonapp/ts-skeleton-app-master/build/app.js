class Ship {
    constructor(name, color, cannons) {
        this.name = name;
        this.color = color;
        this.cannons = cannons;
        this.distanceTravelled;
    }
    getCannons() {
        return this.cannons;
    }
    setCannons(amount) {
        this.cannons = amount;
    }
    getDistanceTravelled() {
        return this.distanceTravelled;
    }
    setDistanceTravelled(amount) {
        this.distanceTravelled = amount;
    }
    shoot() { }
    move() {
        this.distanceTravelled++;
    }
}
const xWing = new Ship('xWing', 'red', 50);
console.log(xWing);
class Asteroid {
    constructor(radius, color, speed, direction) {
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.direction = direction;
    }
    setRadius(amount) {
        this.radius = amount;
    }
    getRadius() {
        return this.radius;
    }
    setSpeed(amount) {
        this.speed = amount;
    }
    getSpeed() {
        return this.speed;
    }
    setDirection(direction) {
        this.direction = direction;
    }
    getDirection() {
        return this.direction;
    }
}
const shipDestroyer = new Asteroid(500, 'brown', 5, 'left');
console.log(shipDestroyer);
class Animal {
    constructor(name, legs, sound) {
        this.name = name;
        this.legs = legs;
        this.sound = sound;
    }
    getName() {
        return this.name;
    }
    getLegs() {
        return this.legs;
    }
    getSound() {
        return this.sound;
    }
}
const animals = [
    new Animal('dog', 4, 'woof'),
    new Animal('cat', 4, 'meow')
];
animals.forEach((animal) => console.log('A %s has %s legs and goes %s!', animal.getName(), animal.getLegs(), animal.getSound()));
//# sourceMappingURL=app.js.map