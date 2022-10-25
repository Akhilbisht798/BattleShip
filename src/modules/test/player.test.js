import Player from '../player'

describe("Player test", () => {

    const p1 = new Player();

    it("can place ship", () => {
        expect(p1.placeShip(3, 1)).toBe(true);
    });

    it("can attack board", () => {
        const p2 = new Player();
        expect(p1.Attack(p2.Board.Board, 1, 1)).toBe(true);
    });

    it("can win", () => {
        const p2 = new Player();
        expect(p2.Board.WinCondition()).toBe(true)
    });

})