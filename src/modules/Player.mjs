import {ScoreBoard} from "./ScoreBoard.mjs";
import {uuidv4} from "./utils.mjs";

// eslint-disable-next-line no-unused-vars
export class Player {

    constructor(name, isHuman = true) {
        this.id = uuidv4();
        this.name = name;
        this.isHuman = isHuman;
        this.scores = new ScoreBoard();
    }

    get list() {
        // Retrieve scores as an Array.
        let scoreList = this.scores.list;

        // Prepend item with player's name.
        scoreList.unshift(this.name);

        // Return modified list (index maps directly with yatzy scoreboard table).
        console.log("Player.list()", scoreList);
        return scoreList;
    }
}