const { Magician, Daemon } = require('./app');

describe('Magician class', () => {
    test('Magician attack with stoned', () => {
        const magician = new Magician(100);
        magician.stoned = true;
        magician.distance = 2;
        magician.setAttack(magician.distance);
        expect(magician.getAttack()).toBe(85);
    });
});

describe('Daemon class', () => {
    test('Daemon attack with stoned', () => {
        const daemon = new Daemon(120);
        daemon.stoned = true;
        daemon.distance = 3;
        daemon.setAttack(daemon.distance);
        expect(daemon.getAttack()).toBeCloseTo(101.15387860532076);
    });
});
