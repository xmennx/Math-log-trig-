class Character {
    constructor(baseAttack) {
        this.baseAttack = baseAttack;
        this.distance = 0;
    }

    setAttack(distance) {
        // Учитываем линейное падение силы урона в зависимости от расстояния
        if (distance === 1) {
            this.attack = this.baseAttack;
        } else {
            this.attack = this.baseAttack * (1 - (distance - 1) * 0.1);
        }

        // Учитываем возможность дурмана
        if (this.stoned) {
            this.attack -= Math.log2(distance) * 5;
        }
    }

    getAttack() {
        return this.attack;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }
}

class Magician extends Character {
    constructor(baseAttack) {
        super(baseAttack);
    }
}

class Daemon extends Character {
    constructor(baseAttack) {
        super(baseAttack);
    }
}