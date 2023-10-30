class Player {
    constructor(name, life, attack) {
        this.name = name;
        this.life = life;
        this.attack = attack;
    }

    attackPlayer(player, diceValue) {
        if (this.life > 0) {
            player.life -= this.attack * diceValue;
            
        }

        else if (this.life <= 0) {
                console.log(`${this.name} está muerto, no puede atacar.`);
            }
    }

    isDead() {
        return this.life <= 0;
    }
}