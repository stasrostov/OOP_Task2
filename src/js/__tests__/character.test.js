const Character = require('../character');

describe('Character class', () => {
    test('levelUp should increase level, attack and defence', () => {
        const character = new Character('Ivan', 'Swordsman');
        character.attack = 20;
        character.defence = 10;

        character.levelUp();

        expect(character.level).toBe(2);
        expect(character.attack).toBe(24);
        expect(character.defence).toBe(12);
    });

    test('levelUp should increase health to 100 if it is greater', () => {
        const character = new Character('Ivan', 'Swordsman');
        character.health = 120;

        character.levelUp();

        expect(character.health).toBe(100);
    });

    test('levelUp should throw an error if health is 0', () => {
        const character = new Character('Ivan', 'Swordsman');
        character.health = 0;

        expect(() => character.levelUp()).toThrow('Cannot level up a dead character');
    });

    test('damage should reduce health by calculated points', () => {
        const character = new Character('Ivan', 'Swordsman');
        character.defence = 10;

        character.damage(20);

        expect(character.health).toBeCloseTo(82);
    });

    test('damage should set health to 0 if calculated points exceed current health', () => {
        const character = new Character('Ivan', 'Swordsman');
        character.health = 10;
        character.defence = 10;

        character.damage(200);

        expect(character.health).toBe(0);
    });

    test('damage should not set health to negative values', () => {
        const character = new Character('Ivan', 'Swordsman');
        character.health = 10;
        character.defence = 90;

        character.damage(200);

        expect(character.health).toBe(0);
    });

    test('damage should not decrease health if points are 0', () => {
        const character = new Character('Ivan', 'Swordsman');
        character.health = 100;
        character.defence = 20;

        character.damage(0);

        expect(character.health).toBe(100);
    });

    test('constructor should throw an error if invalid type is passed', () => {
        expect(() => new Character('Ivan', 'InvalidType')).toThrow('Invalid type');
    });    
});

