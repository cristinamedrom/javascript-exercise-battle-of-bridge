class BattleGame {
    constructor(dice, player, enemy) {
        this.dice = dice;
        this.player = player;
        this.enemy = enemy;
    }

    battle(attacker, defender) {

        this.dice.roll();
        const diceValue = this.dice.value;
        const damage = attacker.attack * diceValue;

        defender.life -= damage;
    }
}
