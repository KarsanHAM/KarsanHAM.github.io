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


// xWing.move();
// console.log(xWing.getDistanceTravelled())

