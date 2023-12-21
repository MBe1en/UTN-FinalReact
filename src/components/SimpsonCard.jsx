import { useNavigate } from "react-router-dom";
// import '../css/simpsonCard.css';

function SimpsonCard(char) {
  const character = char.char;

  const navigate = useNavigate();
  const handleDetail = () => {
    navigate("/detail", { state: { character } });
  };

  return (
    <>
      <div className="simpsonCard overlay">
        <h2>{character.Nombre}</h2>
        <div className="imgContainer">
          <img src={character.Imagen} />
        </div>
        <button className="myButton" onClick={handleDetail}>
          Detalle
        </button>
      </div>
    </>
  );
}

export default SimpsonCard;
