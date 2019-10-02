/**
 *
 * @param {string} id
 * @param {number} fuerza
 */
class personaje {
    constructor(id, fuerza, faction) {
        this.id = id;
        this.fuerza = fuerza;
        this.faction = faction;
    }
}

/**
 * 
 * @param {number} min 
 * @param {number} max 
 */
function randNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function createList(faction) {
    let maxElements = randNumber(3,11);
    let elements = [];
    console.log("La faccion " + faction + " tiene: " + maxElements + " miembros");
    for (let i = 0; i < maxElements; i++) {
        const element = new personaje(i, randNumber(5, 96), faction);
        elements.push(element);
    }
    
    return elements;
}

function deleteLoser(id, faction) {


    faction.splice(faction.findIndex( element => {
        return element.id === id;
    }), 1);    
}

function orderNums(a, b) {
    return b - a;
}

function battle(faction1, faction2) {
    let winner;
    if (faction1.fuerza < faction2.fuerza) {
        winner = faction2;
    } else {
        winner = faction1;
    }
    return winner;
}



let humans = createList("Humans");

console.log(humans);


let zombies = createList("Zombies");
console.log(zombies);


let countHumans = 0;
let countZombies = 0;
let winner;
let falg = false;

while (!falg) {
    console.log("ID: " + humans[countHumans].id + " Fuerza: " + humans[countHumans].fuerza + " Facción: "+ humans[countHumans].faction + " vs ID: " + zombies[countZombies].id + " Fuerza: " + zombies[countZombies].fuerza + " Facción: "+ zombies[countZombies].faction);
    winner = battle(humans[countHumans], zombies[countZombies]);
    if (winner.faction === "Zombies") {
        countHumans ++;
    } else {
        countZombies ++;
    }
    
    console.log("Ganador: " + winner.id + " " + winner.faction);

    if (humans.length == countHumans || zombies.length == countZombies) {
        falg = true;
    }
    
}

if (countHumans === humans.length) {
    console.log();
    console.log("Los ganadores son los: Zombies");
} else {
    console.log();
    console.log("Los ganadores son los: Humans");
}
