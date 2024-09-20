import { useEffect, useState } from "react";
import "./App.css";
import PlayerCard from "./components/PlayerCard";
import Pikachu from "./assets/pikachu.png";
import Onix from "./assets/onix.png";
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
    <div className="w-full h-full flex flex-wrap">
      {isPlaying ? (
        <>
          <div className="w-1/3 h-3/4 border">
            {player?<PlayerCard pokemon={player} />:false}
          </div>
          <div className="w-1/3 h-1/4 border">Log</div>
          <div className="w-1/3 h-3/4 border">
            {pc?<PlayerCard pokemon={pc} />:false}
          </div>
        </>
      ) : (
        <button onClick={() => setIsPlaying(true)}>Start Game</button>
      )}
    </div>
  );
}

export default App;
