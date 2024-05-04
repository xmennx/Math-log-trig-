class Character {
    constructor(baseAttack) {
        this._baseAttack = baseAttack;
        this._distance = 0;
        this._attack = 0; 
        this._stoned = false;
    }

    set attack(value) {
        this._attack = value;
    }

    get attack() {
        if (this._stoned) {
            this._attack -= Math.log2(this._distance) * 5;
        }
        return this._attack;
    }

    set distance(value) {
        this._distance = value;
    }

    get distance() {
        return this._distance;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }
}
