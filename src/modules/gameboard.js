import { Ship } from "./ship";

const GameBoard = () => {
    let Board = Array.from(Array(8), () => new Array(8));

    const initBoard = () => {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                Board[i][j] = 0;
            }
        }
    }

    const Printboard = () => {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                process.stdout.write(Board[i][j] + " ");
            }
        }
    }

    const isValid = (ship, row, col) => {
        const dir = ship.direction;
        const len = ship.length;
        if (dir) {
            return (col + len >= 8) ? false : true;
        }
        else {
            return (row + len >= 8) ? false : true;
        }
    }

    const PlaceShip = (ship, row, col) => {
        const valid = isValid(ship, row, col);
        if (!valid) return false;
        const dir = ship.direction;
        if (dir) {
            for (let i = col; i <= col + ship.length; i++) {
                Board[row][i] = 1;
            }
        } else {
            for (let i = row; i <= row + ship.length; i++) {
                Board[i][col] = 1;
            }
        }
        return true;
    }

    //Attack state on board is 2.
    //1 is for when board is placed.
    //0 is when it is neither attacked nor have ship.
    const Attack = (row, col) => {
        if (Board[row][col] === 1);//TODO: For attackin ship. 
        Board[row][col] = 2;
        return Board[row][col];
    }

    return { initBoard, isValid, PlaceShip, Attack }
}

export default GameBoard;