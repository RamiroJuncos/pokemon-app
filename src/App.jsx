import { useEffect, useState } from "react";
import "./App.css";
import PlayerCard from "./components/PlayerCard";
import Fondo from "./assets/woodbg.jpg";
import { attack, startGame } from "./utils/function";
import CustomButton from "./components/CustomButton";
import { pokemons } from "./utils/utils";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);
  const [pc, setPc] = useState(null);
  const [pokemones, setPokemones] = useState([]);
  const [winner, setWinner] = useState("");
  const [attackLog, setAttackLog] = useState([]);

  useEffect(() => {
    let poke = startGame();
    setPokemones(poke);
  }, []);

  useEffect(() => {
    if (pokemones.length > 0) {
      setPlayer(pokemones[0]);
      setPc(pokemones[1]);
    }
  }, [pokemones]);

  function atacar() {
    if (!player || !pc) return;

    const daño = attack(player, pc);
    setPc((prevPc) => ({ ...prevPc, life: prevPc.life - daño }));
    const daño2 = attack(pc, player);
    setPlayer((prevPlayer) => ({ ...prevPlayer, life: prevPlayer.life - daño2 }));

    let movPlayer = player.mov[Math.floor(Math.random() * player.mov.length)];
    let log = `${player.name} usó ${movPlayer}`;
    setAttackLog((prevLog) => [...prevLog, log]);

    setTimeout(() => {
      let movPc = pc.mov[Math.floor(Math.random() * pc.mov.length)];
      let logPc = `${pc.name} usó ${movPc}`;
      setAttackLog((prevLog) => [...prevLog, logPc]);
    }, 1000);
  }

  function win() {
    if (pc && pc.life <= 0) {
      setWinner("PLAYER");
    } else if (player && player.life <= 0) {
      setWinner("PC");
    }
  }

  useEffect(() => {
    win();
  }, [player, pc]);

  return (
    <div
      className="w-screen h-screen flex flex-col"
      style={{
        background: `url(${Fondo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {isPlaying ? (
        <div className="flex flex-grow justify-center items-center">
          <div className="flex w-full h-full max-w-4xl bg-white bg-opacity-80 rounded-lg shadow-lg">
            <div className="w-1/3 p-4">
              {player ? <PlayerCard pokemon={player} /> : null}
              <CustomButton
                disabled={player && player.life <= 0 || pc && pc.life <= 0}
                text={"ATACAR"}
                onClick={atacar}
              />
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-100 flex flex-col justify-center items-center">
              <div className="text-xl mb-4">LOG DE ATAQUES</div>
              <ul className="space-y-2 w-full max-h-[400px] overflow-y-auto">
                {attackLog.map((log, index) => (
                  <li key={index} className="text-lg text-center">{log}</li>
                ))}
              </ul>
            </div>

            <div className="w-1/3 p-4">
              {pc ? <PlayerCard pokemon={pc} /> : null}
              <CustomButton
                disabled={player && player.life <= 0 || pc && pc.life <= 0}
                text={"ATACAR"}
                onClick={atacar}
              />
            </div>
          </div>

          {winner && (
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-gray-800 flex items-center justify-center">
              <div className="text-5xl text-white">{winner} WINS!</div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-auto">
          <div className="w-full h-40 text-3xl text-center bg-red-500 border border-red-700 text-gray-300 hover:bg-red-600 hover:border-red-500 hover:text-white">
            <div>THE POKEMON GAME</div>
            <button onClick={() => setIsPlaying(true)}>Start Game</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
