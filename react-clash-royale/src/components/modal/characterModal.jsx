import "./characterModal.css";

function CharacterModal({ character, onClose }) {
  if (!character) return null;

  return (
    <div className="modal-container">
      <button className="modal-close" onClick={onClose}>X</button>
      {character.iconUrls?.medium && (
        <img src={character.iconUrls.medium} alt={character.name} />
      )}
      <h2>{character.name}</h2>
      <p>Rareza: {character.rarity}</p>
      <p>Nivel máximo: {character.maxLevel}</p>
      <p>Coste de elixir: {character.elixirCost}</p>
    </div>
  );
}

export default CharacterModal;