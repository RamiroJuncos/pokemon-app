import { pokemons } from "./utils";

function radomize(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function startGame(){
    const random = radomize(0, pokemons.length - 1)
    let pokemonPlayer = pokemons[random]
    const randomPc = radomize(0, pokemons.length - 1)
    let pokemonPc = pokemons[randomPc]
    const levelPlayer = radomize(1,10)
    const levelPc = radomize(1,10)
    const lifePlayer = levelPlayer * 1000
    const lifePc = levelPc * 1000
    const player = {
        ...pokemonPlayer, 
        level: levelPlayer,
        life: lifePlayer,
        isPlayer: true
    }
    const pc = {
        ...pokemonPc,
        level: levelPc,
        life: lifePc,
        isPlayer: false
    }
    return [player, pc]
}


export function efectividad(ataque, defensa){
    if (ataque == "agua" && defensa == "fuego") {
        return 3
    }else if (ataque == "fuego" && defensa == "piedra"){
        return 3
    }else if (ataque == "piedra" && defensa == "electrico"){
        return 3
    }else if (ataque == "electrico" && defensa == "agua"){
        return 3
    }else if(ataque == defensa){
        return 1
    }else {
        return 0.5
    }
    
}

export function suerte(){
    let rando = Math.random();
    if (rando < 0.33) {
        return 3
    }else {
        return 1
    }
}

export function attack(ataque, defensa){
    const suerte1 = suerte()
    const efectividad1 = efectividad(ataque.type , defensa.type)
    const danho = 50 * ataque.level / defensa.level * efectividad1 * suerte1 
    return danho 
}






/* 
ataque tipos de los pokemon,niveles,vida defensor
FORMULA DE DAÑO:
50 * nivelAtacante / nivelDefensor * efectividad * suerte

la efectividad depende del tipo de pokemon
efectivo = 3
normal = 1
no efectivo = 0.5
agua > fuego
fuego > piedra
piedra > electrico
electrico > agua

suerte = 30% de posibilidades de triplicar el daño
random 0 - 0.99
random < 0.3 retorna 3
retorna 1

esto devuelve la vida del defensor despues del ataque
*/