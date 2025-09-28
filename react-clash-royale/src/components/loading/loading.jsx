import "./loading.css";

function Loading({ message = "Cargando...", isError = false }) {
  return (
    <div className={`loading-container ${isError ? "error" : ""}`}>
      {!isError && <div className="spinner"></div>}
      <p>{message}</p>
    </div>
  );
}

export default Loading;