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
      <div>{pokemon.isPlayer}</div>
    </div>
  );
}

export default PlayerCard;
