export class Coordinates {
    x:number;
    y:number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    transform = (number:number) => {
        return new Coordinates(this.x + number, this.y + number);
    }
}