// eslint-disable-next-line no-unused-vars
export class ScoreBoard {
    constructor() {
        // Initialise all scores to 0.
        this.clear();
    }

    get list() {
        return [
            this.ones,
            this.twoes,
            this.threes,
            this.fours,
            this.fives,
            this.sixes,
            this.sum,
            this.bonus,
            this.pair,
            this.pairs,
            this.equal3,
            this.equal4,
            this.smallStraight,
            this.bigStraight,
            this.house,
            this.chance,
            this.yatzy,
            this.sumtotal
        ];
    }

    clear() {
        this.ones = null;
        this.twoes = null;
        this.threes = null;
        this.fours = null;
        this.fives = null;
        this.sixes = null;
        this.sum = null;
        this.bonus = null;
        this.pair = null;
        this.pairs = null;
        this.equal3 = null;
        this.equal4 = null;
        this.smallStraight = null;
        this.bigStraight = null;
        this.house = null;
        this.chance = null;
        this.yatzy = null;
        this.sumtotal = null;
    }
}