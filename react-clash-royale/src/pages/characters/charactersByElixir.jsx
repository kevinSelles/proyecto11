import "./characters.css";
import { useEffect, useState } from "react";
import ShowCharacters from "./showCharacters";
import CharacterModal from "../../components/modal/characterModal";
import { useParams } from "react-router-dom";

function CharactersByElixir() {
  const { cost } = useParams();
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const JSONBIN_URL = import.meta.env.VITE_JSONBIN_URL;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch(JSONBIN_URL);
        if (!res.ok) throw new Error("Error al cargar personajes");
        const data = await res.json();
        const filtered = data.record.items.filter(
          (c) => c.elixirCost === Number(cost)
        );
        setCharacters(filtered);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCharacters();
  }, [cost, JSONBIN_URL]);

  const handleOpenModal = (char) => setSelectedCharacter(char);
  const handleCloseModal = () => setSelectedCharacter(null);

  if (error) return <p>{error}</p>;
  if (!characters.length) return <p>No hay personajes con coste {cost} de elixir.</p>;

  return (
    <section className="characters-section">
      <h2>Personajes con coste de elixir {cost}</h2>
      <ShowCharacters
        characters={characters}
        onCharacterClick={handleOpenModal}
      />
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

export default CharactersByElixir;