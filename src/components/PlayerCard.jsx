function PlayerCard({ pokemon }) {
  return (
    <div
      className="rounded-lg"
      style={{
        border: `2px solid ${pokemon.color}`,
        background: `linear-gradient(to bottom, #fff, ${pokemon.color})`,
      }}
    >
      <div>
        <img src={pokemon.img} alt="" />
      </div>
      <div>{pokemon.name}</div>
      <div>Nivel:{pokemon.level}</div>
      <div>Vida:{pokemon.life}</div>
      <div>{pokemon.type}</div>
      <div>{pokemon.mov}</div>
      <div>
        <button
          disabled={!pokemon.isPlayer ? true : false}
          className="w-full text-3xl disabled:bg-slate-500 text-center bg-red-500 border border-red-700 text-gray-300 hover:bg-red-600 hover:border-red-500 hover:text-white"
        >
          ATACAR
        </button>
      </div>
    </div>
  );
}

export default PlayerCard;
