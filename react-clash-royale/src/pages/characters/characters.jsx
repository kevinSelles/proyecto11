import "./characters.css";
import { useEffect, useState } from "react";
import ShowCharacters from "./showCharacters";
import Pagination from "../../components/pagination/pagination";
import CharacterModal from "../../components/modal/characterModal";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 10;

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const JSONBIN_URL = import.meta.env.VITE_JSONBIN_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(JSONBIN_URL);
        if (!res.ok) throw new Error("Error al cargar personajes");
        const data = await res.json();
        setCharacters((data.record && data.record.items) || []);
      } catch (err) {
        setError(err.message);
      };
    };

    fetchData();
  }, [JSONBIN_URL]);

  const indexOfLastChar = currentPage * charactersPerPage;
  const indexOfFirstChar = indexOfLastChar - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstChar, indexOfLastChar);
  const totalPages = Math.ceil(characters.length / charactersPerPage);

  const handleOpenModal = (char) => setSelectedCharacter(char);
  const handleCloseModal = () => setSelectedCharacter(null);

  return (
    <section className="characters-section">
      <h2>Personajes del juego</h2>
      <ShowCharacters
        characters={currentCharacters}
        onCharacterClick={handleOpenModal}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
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

export default Characters;