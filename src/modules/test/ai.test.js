import AI from '../ai'
import Player from '../player'

describe("AI", () => {
    it("Place Boats", () => {
        const ai = new AI();
        expect(ai.Ships.length).toBe(0);
    });
    it("Can attack Player", () => {
        const p1 = new Player();
        const ai = new AI();
        expect(ai.Attack(p1.Board.Board)).toBe(true)
    });
})