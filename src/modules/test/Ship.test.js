import Ship from '../ship'

describe("Ship test", () => {

    const ship = new Ship(2);

    it("Takes Hit", () => {
        expect(ship.hit()).toBe(1);
    });

    it("Sunk", () => {
        ship.hit();
        expect(ship.hasSunk()).toBe(true);
    });

    it("Change Direction", () => {
        expect(ship.changeDir()).toBe(false);
    })

})