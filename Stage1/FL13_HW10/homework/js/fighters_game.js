function fighter (arg){
    const name = arg.name;
    const damage = arg.damage;
    let hp = arg.hp;
    const strength = arg.strength;
    const agility = arg.agility;
    const totalHP= arg.hp;
    let wins= 0;
    let loss= 0;

    return {
            getName: function (){
            return name;
        },
        getDamage: function (){
            return damage;
        },
        getStrength: function (){
            return strength;
        },
        getAgility: function (){
            return agility;
        },
        getHealth: function(){
            return hp;
        },
        attack: function(defender){
            const hundredPercent = 100;
            let attackNumber = Math.floor(Math.random() * 101);
            let attackProbability = hundredPercent - defender.getStrength() - defender.getAgility();
        
            if (attackNumber<=attackProbability) {
                console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
                defender.dealDamage(damage);            
            } else{
                console.log(`${name} attack missed`);
            }        
        },
        logCombatHistory: function(){
            console.log(`Name: ${name}, Wins: ${wins}, Losses: ${loss}`);
        },
        dealDamage: function(damage){
            if (damage>hp){
                hp=0;
            } else {
                hp -=damage;
            }
        },
        heal: function(arg){
            if(arg+hp > totalHP) {
                hp= totalHP;
            } else{
                hp +=arg;
            }
        },
        addWin: function(){
            wins +=1;
        },
        addLoss: function(){
            loss++;
        }
    }
}

function battle(fighter1,fighter2){
    function isDead(arg){
        if (arg.getHealth()<=0){
            return true
        } else {
            return false;
        }
    }
    if (isDead(fighter1)){
        console.log(`${fighter1.getName()} is dead and cannot fight!`);
        return;
    }
    if (isDead(fighter2)){
        console.log(`${fighter2.getName()} is dead and cannot fight!`);
        return;
    }

    const doIteration = true;
    while (doIteration){
        fighter1.attack(fighter2);
        if (isDead(fighter2)){
            fighter1.addWin();
            fighter2.addLoss();
            console.log(`${fighter1.getName()} has won!`);
            break;
        }
        fighter2.attack(fighter1);
        if (isDead(fighter1)){
            fighter2.addWin();
            fighter1.addLoss();
            console.log(`${fighter2.getName()} has won!`);
            break;
        }
    }
}

 let a = fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
 let b = fighter({name: 'Comodo', damage: 20, hp: 90, strength: 20, agility: 45});
 battle(a,b);


