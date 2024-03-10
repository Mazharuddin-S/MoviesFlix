import "../CSS/spinner.css";

function Spinner({ color }) {
  const isOnline = window.navigator.onLine;
  return (
    <>
      {isOnline ? (
        <div className="spinner-container">
          <div className="spinner" style={{ color: color.one }}></div>
        </div>
      ) : (
        <h2>No internet connection</h2>
      )}
    </>
  );
}

export default Spinner;
