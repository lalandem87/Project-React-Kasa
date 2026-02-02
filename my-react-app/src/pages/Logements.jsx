import { useParams } from "react-router-dom";
import { Slider } from "../components/carrousel/carrousel";
import data from "../data.json";
import Collapse from "../components/Dropdown/dropdown.jsx";
import "./Logements.scss";

export default function Logements() {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <main>
      <Slider images={logement.pictures} alt={logement.title} />
      <div className="main-container">
        <div className="card1">
          <h2 className="card1__h2">{logement.title}</h2>
          <p className="card1__p">{logement.location}</p>
          <div>
            <ul className="tags">
              {logement.tags.map((tag, index) => (
                <li key={index} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card2">
          <div className="card2__profil">
            <h3 className="card2__h3">{logement.host.name}</h3>
            <img
              src={logement.host.picture}
              alt="photo de profil"
              className="card2__img"
            />
          </div>
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <i
                key={index}
                className={`fa-solid fa-star ${index < Number(logement.rating) ? "filled" : "empty"}`}
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className="collapse-container">
        <Collapse title="Description" content={logement.description}/>
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </main>
  );
}
