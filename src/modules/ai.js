import GameBoard from "./gameboard";
import Ship from "./ship";

class AI {
    constructor() {
        const Board = GameBoard();
        Board.initBoard();
        this.Board = Board;
        this.Ships = [new Ship(5), new Ship(4), new Ship(3), new Ship(3), new Ship(2)];
        this.p = 1;
        this.PlaceShip();
    }

    PlaceShip() {
        const num = Math.floor(Math.random() * 5);
        for (let i = 0; i <= num; i++) {
            const r = Math.floor(Math.random() * 5);
            this.Ships[r].changeDir();
        }
        while (this.Ships.length != 0) {
            //select random place and place it.
            const row = Math.floor(Math.random() * 8);
            const col = Math.floor(Math.random() * 8);
            const ans = this.Board.PlaceShip(this.Ships[this.Ships.length - 1], row, col, 1);
            if (ans) this.Ships.pop();

        }
    }

    Attack(Board) {
        const row = Math.floor(Math.random() * 8);
        const col = Math.floor(Math.random() * 8);
        if (Board[row][col] === 2) return false;
        Board[row][col] = 2;
        return true;
    }
}

export default AI;