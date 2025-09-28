import "./characters.css";

function ShowCharacters({ characters }) {
  return (
    <div className="characters-grid">
      {characters.map((char) => (
        <div key={char.id} className="character-card">
          {char.iconUrls?.medium ? (
            <img src={char.iconUrls.medium} alt={char.name} />
          ) : (
            <div className="character-placeholder" />
          )}
          <p>{char.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowCharacters;