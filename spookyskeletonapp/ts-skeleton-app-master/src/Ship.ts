class Ship{
    private name: string;
    private color: string;
    private cannons: number;
    private distanceTravelled: number;

    public constructor (name: string, color: string, cannons: number) {
        this.name = name;
        this.color = color;
        this.cannons = cannons;
        this.distanceTravelled;
    }
    
    public getCannons() : number{
        return this.cannons
    }
    
    public setCannons(amount:number) {
    this.cannons = amount;
    }

    public getDistanceTravelled () : number {
        return this.distanceTravelled
    }

    public setDistanceTravelled (amount:number) {
        this.distanceTravelled = amount;
    } 

    public shoot(){}

    public move(){
        this.distanceTravelled++
    }
}
const xWing : Ship = new Ship('xWing', 'red', 50);
console.log(xWing)

class Asteroid{
    private radius: number;
    private color: string;
    private speed: number;
    private direction: string;

    public constructor (radius: number, color: string, speed: number, direction: string) {
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.direction = direction;
    }

    public setRadius(amount:number) {
        this.radius = amount;
    }

    public getRadius() : number {
        return this.radius
    }

    public setSpeed(amount:number) {
        this.speed = amount;
    }

    public getSpeed() : number {
        return this.speed
    }

    public setDirection(direction:string) {
        this.direction = direction;
    }

    public getDirection() : string {
        return this.direction
    }
}

const shipDestroyer : Asteroid = new Asteroid(500, 'brown', 5, 'left');
console.log(shipDestroyer)

// xWing.move();
// console.log(xWing.getDistanceTravelled())

