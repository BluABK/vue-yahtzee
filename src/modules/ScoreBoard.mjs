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
        this.ones = 0;
        this.twoes = 0;
        this.threes = 0;
        this.fours = 0;
        this.fives = 0;
        this.sixes = 0;
        this.sum = 0;
        this.bonus = 0;
        this.pair = 0;
        this.pairs = 0;
        this.equal3 = 0;
        this.equal4 = 0;
        this.smallStraight = 0;
        this.bigStraight = 0;
        this.house = 0;
        this.chance = 0;
        this.yatzy = 0;
        this.sumtotal = 0;
    }
}