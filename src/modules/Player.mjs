import {ScoreBoard} from "./ScoreBoard.mjs";
import {uuidv4} from "./utils.mjs";

// eslint-disable-next-line no-unused-vars
export class Player {

    constructor(name, isHuman = true) {
        this.id = uuidv4();
        this.name = name;
        this.isHuman = isHuman;
        this.scores = new ScoreBoard();

        // --- Round specific:
        // List of values for currently kept dice.
        this.currentlyKeptDice = [];
        // List of Vue.data.currentlyRolledDice indexes of player's currently selected dice.
        this.currentlySelectedDiceIndexes = [];
    }

    get list() {
        // Retrieve scores as an Array.
        let scoreList = this.scores.list;

        // Prepend item with player's name.
        scoreList.unshift(this.name);

        // Return modified list (index maps directly with yatzy scoreboard table).
        return scoreList;
    }
}