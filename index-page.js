{
    class Fighter {
        constructor(name = 'Player1', power = 5, health = 1000) {
            this.name = name;
            this.power = power;
            this.health = health;
        }
        setDamage(damage) {
            this.health = this.health - damage;
        }
        hit(enemy, point) {
            enemy.setDamage(point * this.power);
        }
    }
    //hui
    ////qweqwe
    class ImprovedFighter extends Fighter {
        constructor(name = 'Player2', power = 5, health = 1000){
            super(name,power,health)
        }
        doubleHit(enemy, point) {
            return super.hit(enemy, point * 2);
        }
    }

    //hui 2 qwe
    let Vandam = new Fighter("Vandam", 5, 1000);
    let ChuckNorris = new ImprovedFighter("Chuck", 5, 1000);

    fight = (fighter, improvedFighter, ...point) => {

        for (let point_item of point) {

            fighter.hit(improvedFighter, point_item);
            improvedFighter.doubleHit(fighter, point_item);

            if (fighter.health > 0 && improvedFighter.health > 0) {
                console.log(`Здоровье игрока ${fighter.name} = ${fighter.health}`);
                console.log(`Здоровье игрока ${improvedFighter.name} = ${improvedFighter.health}`);
            } else {
                fighter.health < improvedFighter.health ? console.log(`Конец Игры ${fighter.name} проиграл`) : console.log(`Конец Игры ${improvedFighter.name} проиграл`);
                return false;
            }
        }

    }
    //lilililili
    
    
    
    //gjkyjt 

    fight(Vandam, ChuckNorris, 10, 20, 50, 10, 20, 30);
}