function PlayerCard({ pokemon }) {
  return (
    <div
      className="rounded-lg"
      style={{
        border: `2px solid ${pokemon.color}`,
        background: `linear-gradient(to bottom, transparent, ${pokemon.color})`,
      }}
    >
      <div>
        <img
          src={pokemon.img}
          style={{ filter: "drop-shadow(15px 5px 5px #000)" }}
          alt=""
        />
      </div>
      <div>{pokemon.name}</div>
      <div>Nivel:{pokemon.level}</div>
      <div>Vida:{pokemon.life}</div>
      <div>{pokemon.type}</div>
      <div>
       
      </div>
    </div>
  );
}

export default PlayerCard;
