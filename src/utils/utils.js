import pikachuImg from "../assets/pikachu.png";
import onixImg from "../assets/onix.png";
import charmanderImg from "../assets/charmander.png";
import squirtleImg from "../assets/squirtle.png"

export const pokemons = [
    {
        img: pikachuImg,
        name:"pikachu",
        type:"electrico",
        color:"#f0ff00",
        mov:["impactrueno", "choque trueno", "impacto salvaje"]
    },
    {
        img: onixImg,
        name:"onix",
        type:"piedra",
        color:"#686665",
        mov:["lanzarrocas","furia","tormenta"]
    },
    {
        img: charmanderImg,
        name:"charmander",
        type:"fuego",
        color:"#f30000",
        mov:["cuchillado","arañazo","pirotecnia"]

    },
    {
        img: squirtleImg,
        name:"squirtle",
        type:"agua",
        color:"#000fff",
        mov:["placaje","hidrobomba","ventisca"]
    }
]

