import "./pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pagination-container">
      <button onClick={() => handlePage(currentPage - 1)} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>Página {currentPage} de {totalPages}</span>
      <button onClick={() => handlePage(currentPage + 1)} disabled={currentPage === totalPages}>
        Siguiente
      </button>
    </div>
  );
}

export default Pagination;