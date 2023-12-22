import "../CSS/spinner.css";

function Spinner({ color }) {
  return (
    <div className="spinner-container">
      <div className="spinner" style={{ color: color.one }}></div>
      <div className="spinner" style={{ color: color.two }}></div>
      <div className="spinner" style={{ color: color.three }}></div>
    </div>
  );
}

export default Spinner;
