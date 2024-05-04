const Character = require('./app');

describe('Character', () => {
    let character;

    beforeEach(() => {
        character = new Character(10);
        character.distance = 5;
        character.stoned = false;
    });

    it('должен правильно устанавливать базовую атаку', () => {
        expect(character._baseAttack).to.equal(10);
    });

    it('должен правильно устанавливать расстояние', () => {
        expect(character.distance).to.equal(5);
    });

    it('должен правильно устанавливать статус "stoned"', () => {
        expect(character.stoned).to.be.false;
    });

    it('должен правильно вычислять атаку без модификатора "stoned"', () => {
        expect(character.attack).to.equal(10);
    });

    it('должен правильно вычислять атаку с модификатором "stoned"', () => {
        character.stoned = true;
        expect(character.attack).to.equal(10 - Math.log2(5) * 5);
    });

    it('должен обновлять атаку после изменения расстояния', () => {
        character.distance = 3;
        expect(character.attack).to.equal(10);
    });

    it('должен обновлять атаку после изменения статуса "stoned"', () => {
        character.stoned = true;
        character.distance = 7;
        expect(character.attack).to.equal(10 - Math.log2(7) * 5);
    });

    it('должен позволять установить атаку напрямую', () => {
        character.attack = 15;
        expect(character.attack).to.equal(15);
    });
});
