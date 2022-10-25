
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
        let dir = ship.direction;
        let len = ship.length;
        if (dir) {
            let l = Number(col) + Number(len) - 1;
            if (l < 8) {
                for (let i = 0; i < l; i++) {
                    if (Board[row][i] === 1) return false;
                }
                return true;
            }
            return false;
        }
        else {
            let l = Number(row) + Number(len) - 1;
            if (l < 8) {
                for (let i = 0; i < l; i++) {
                    if (Board[i][col] === 1) return false;
                }
                return true;
            }
            return false;
        }
    }

    const PlaceShip = (ship, row, col, player) => {
        const valid = isValid(ship, row, col);
        if (!valid) return false;
        const dir = ship.direction;
        if (dir) {
            for (let i = col; i < Number(col) + Number(ship.length); i++) {
                Board[row][i] = 1;
            }
        } else {
            for (let i = row; i < Number(row) + Number(ship.length); i++) {
                Board[i][col] = 1;
            }
        }
        console.log(Board);
        return true;
    }

    //Attack state on board is 2.
    //1 is for when board is placed.
    //0 is when it is neither attacked nor have ship.
    const Attack = (row, col) => {
        if (Board[row][col] === 1); //do something graphic; 
        Board[row][col] = 2;
        return Board[row][col];
    }

    const WinCondition = () => {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (Board[i][j] === 1) return false;
            }
        }
        return true;
    }

    return { Board, initBoard, PlaceShip, Attack, WinCondition, Printboard, isValid }
}

export default GameBoard;