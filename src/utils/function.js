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

export function pauseGame(){
    //
}