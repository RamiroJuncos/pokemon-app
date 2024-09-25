import { useEffect, useState } from "react";
import "./App.css";
import PlayerCard from "./components/PlayerCard";
import Fondo from "./assets/woodbg.jpg";
import { attack, startGame } from "./utils/function";
import CustomButton from "./components/CustomButton";
import { pokemons } from "./utils/utils";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(undefined);
  const [pc, setPc] = useState(undefined);
  const [pokemones, setPokemones] = useState([]);
  const [winner, setWinner] = useState("");
  const [attackLog, setAttackLog] = useState("");
  useEffect(() => {
    let poke = startGame();
    setPokemones(poke);
  }, []);
  // console.log(pokemones);
  useEffect(() => {
    setPlayer(pokemones[0]);
    setPc(pokemones[1]);
  }, [isPlaying]);

  function atacar() {
    const daño = attack(player, pc);
    setPc({ ...pc, life: pc.life - daño });
    const daño2 = attack(pc, player);
    setPlayer({ ...player, life: player.life - daño2 });
    let movPlayer = player.mov[Math.floor(Math.random() * player.mov.length)];
    let log = `${player.name} uso ${movPlayer}`;
    setAttackLog((attackLog) => [...attackLog, log]);

    setTimeout(() => {
      let movPc = pc.mov[Math.floor(Math.random() * pc.mov.length)];
      let logPc = `${pc.name} uso ${movPc}`;
      setAttackLog((attackLog) => [...attackLog, logPc]);
    }, 1000);
  }

  function win() {
    if (pc.life <= 0) {
      setWinner("PLAYER");
    } else if (player.life <= 0) {
      setWinner("PC");
    }
  }

  useEffect(() => {}, []);

  return (
    <div
      className="w-screen h-screen flex flex-wrap"
      style={{
        background: `url(${Fondo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {isPlaying ? (
        <>
          <div className="w-1/3 h-3/4 border">
            {player ? <PlayerCard pokemon={player} /> : false}
            <CustomButton
              disabled={!pokemons.isPlayer ? false : true}
              text={"ATACAR"}
              onClick={() => atacar()}
            />
          </div>
          <div className="w-1/3 h-1/4 border">{attackLog}</div>
          <div className="w-1/3 h-3/4 border">
            {pc ? <PlayerCard pokemon={pc} /> : false}
            <CustomButton
              disabled={!pokemons.isPlayer ? true : false}
              text={"ATACAR"}
            />
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
