import { useEffect, useState } from "react";
import "./App.css";
import PlayerCard from "./components/PlayerCard";
import Fondo from "./assets/woodbg.jpg"
import { startGame } from "./utils/function";


function App() {
  /*
  -Componente card para jugador y pc, vida, nivel, nombre, tipo, imagen, color, movimiento, player
  -Directorio utils para funciones y data de pokemones, atacar, start game, end game, pause game, calculo de efectividad, calculo de daño, elegir pokemon(random), calculo de nivel(random), calculo de vida(nivel)

   */
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(undefined);
  const [pc, setPc] = useState(undefined);
  const [pokemones, setPokemones] = useState([]);
  useEffect(() => {
    let poke = startGame();
    setPokemones(poke);
  }, []);
  // console.log(pokemones);
  useEffect(() => {
    setPlayer(pokemones[0]);
    setPc(pokemones[1]);
  }, [isPlaying]);

  return (
    <div className="w-screen h-screen flex flex-wrap" style={{background:`url(${Fondo})` , backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
      {isPlaying ? (
        <>
          <div className="w-1/3 h-3/4 border">
            {player ? <PlayerCard pokemon={player} /> : false}
            
          </div>
          <div className="w-1/3 h-1/4 border">Log</div>
          <div className="w-1/3 h-3/4 border">
            {pc ? <PlayerCard pokemon={pc} /> : false}
          </div>
        </>
      ) : (
        <div className="flex flex-auto">
          <div className=" w-full h-40 text-3xl text-center bg-red-500 border border-red-700 text-gray-300 hover:bg-red-600 hover:border-red-500 hover:text-white">
            <div>THE POKEMON GAME</div>
            <button onClick={() => setIsPlaying(true)}>Start Game</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
