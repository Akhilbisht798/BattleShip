
class Ship {
    constructor(size) {
        this.length = size;
        this.direction = true;
        this.hitTaken = 0;
    }

    hit() {
        this.hitTaken++;
        return this.hitTaken;
    }

    changeDir() {
        this.direction = (this.direction) ? false : true;
        return this.direction;
    }

    hasSunk = () => {
        return this.hitTaken === this.length;
    }

}

export default Ship;
