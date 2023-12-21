import "../css/error.css";
import { useNavigate } from "react-router-dom";

function Error() {
  let navigate = useNavigate();
  return (
    <>
      <div className="errorContainer">
        <h2>Página no encontrada</h2>
        <button className="pagButton" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    </>
  );
}

export default Error;
