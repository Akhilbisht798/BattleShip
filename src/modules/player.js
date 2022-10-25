import GameBoard from "./gameboard";
import Ship from "./ship";
import { CreateBoard, GetInput } from './UI'

class Player {
    constructor() {
        const Board = GameBoard();
        Board.initBoard();
        this.Board = Board; // Player have it's own board that it can place ship on and opposite player can attack it.
        this.Ships = [new Ship(5), new Ship(4), new Ship(3), new Ship(3), new Ship(2)];
        this.p = 0;
    }

    placeShip(row, col) {
        const ship = this.Ships[this.Ships.length - 1];
        const ans = this.Board.PlaceShip(ship, row, col, 0);// may be error board is total factory not a array.
        if (ans) this.Ships.pop();
        return ans;
    }

    Attack(Board, row, col) { // Attack means to change 1 to 2.
        if (Board[row][col] === 2) return false;
        Board[row][col] = 2;
        return true;
    }

    WinningCondition(Board) {
        return Board.WinCondition();
    }

}

export default Player;