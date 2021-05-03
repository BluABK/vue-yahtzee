import {uuidv4} from "./utils.mjs";

// eslint-disable-next-line no-unused-vars
export class Player {
    constructor(name, isHuman = true) {
        this.id = uuidv4();
        this.name = name;
        this.isHuman = isHuman;
    }
}