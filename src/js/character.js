class Character {
    constructor(name, type) {
        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error('Invalid type');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Cannot level up a dead character');
        }

        this.level += 1;
        this.attack += Math.round(this.attack * 0.2);
        this.defence += Math.round(this.defence * 0.2);

        if (this.health > 100) {
            this.health = 100;
        }
    }

    damage(points) {
        const damage = points * (1 - this.defence / 100);

        this.health -= damage;

        if (this.health < 0) {
            this.health = 0;
        }
    }
}

module.exports = Character;
