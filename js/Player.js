class Player {
    constructor(name, life, attack) {
        this.name = name;
        this.life = life;
        this.attack = attack;
    }

    attackPlayer(player, diceValue) {
        player.life -= (this.attack * diceValue);
    }
}