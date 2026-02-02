import { Link } from "react-router-dom";
import Banner from "../components/Banner/banner";
import data from "../data.json";
import Card from "../components/Card/card";

export default function Home() {
  return (
    <>
      <Banner image="./img/img1.png" text="Chez vous, partout et ailleurs" />

      <div className="card-container">
        {data.map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <Card image={logement.cover} title={logement.title} />
          </Link>
        ))}
      </div>
    </>
  );
}
