import "./characters.css";
import { useEffect, useState } from "react";
import ShowCharacters from "./showCharacters";
import Loading from "../../components/loading/loading";
import Pagination from "../../components/pagination/pagination";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 10;

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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [JSONBIN_URL]);

  if (loading) return <Loading message="Cargando personajes..." />;
  if (error) return <Loading message={`Error: ${error}`} isError />;

  const indexOfLastChar = currentPage * charactersPerPage;
  const indexOfFirstChar = indexOfLastChar - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstChar, indexOfLastChar);
  const totalPages = Math.ceil(characters.length / charactersPerPage);

  return (
    <main className="characters-main">
      <h2>Personajes del juego</h2>
      <ShowCharacters characters={currentCharacters} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </main>
  );
}

export default Characters;