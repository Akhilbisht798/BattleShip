import GameBoard from '../gameboard'
import Ship from '../ship'

describe("gameboard tests", () => {

    const Board = GameBoard();
    const ship = new Ship(4);
    const ship2 = new Ship(4);
    ship2.changeDir();
    Board.initBoard();

    it("check direction for valid col", () => {
        expect(Board.isValid(ship, 3, 3)).toBe(true);
    });

    it("check direction for valid row", () => {
        expect(Board.isValid(ship2, 3, 3)).toBe(true);
    });

    it("check direction for invalid col", () => {
        expect(Board.isValid(ship, 5, 4)).toBe(false);
    });

    it("check direction for invalid row", () => {
        expect(Board.isValid(ship2, 5, 4)).toBe(false);
    });

    it("Can place ship in col", () => {
        expect(Board.PlaceShip(ship, 3, 3)).toBe(true);
    });

    it("Can place ship in row", () => {
        expect(Board.PlaceShip(ship2, 2, 3)).toBe(false);
    });

    it("Can attack the board", () => {
        expect(Board.Attack(1, 1)).toBe(2);
    });

    it("Can attack a ship", () => {
        expect(Board.Attack(2, 1)).toBe(2);
    });

    it("game Won", () => {
        const board2 = GameBoard();
        board2.initBoard()
        expect(board2.WinCondition()).toBe(true);
    })

    it("game Not Won", () => {
        expect(Board.WinCondition()).toBe(false);
    })

})