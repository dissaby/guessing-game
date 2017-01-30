class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.middle = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.middle = Math.round((this.min + this.max) / 2);
        return this.middle;
    }

    lower() {
        this.max = this.middle;
        return this;
    }

    greater() {
        this.min = this.middle;
        return this;
    }
}

module.exports = GuessingGame;
