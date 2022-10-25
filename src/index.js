import { CreateBoard, PlaceShip } from "./modules/UI";
import Player from './modules/player'
import AI from './modules/ai'
import './style/Board.css'

/* main logic of the game.
Player is able to put all his ships.
Ai to play with.
graphics to intract and play with.
Declare winner and loser in the game.
*/

const player = new Player();// This player has 5 ships.
CreateBoard(0, player); // It create board i.e divs that allow user
// to input ships in the board using event listner.

// run after player has zero ship left.
