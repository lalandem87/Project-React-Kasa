import { NavLink } from "react-router-dom";
import "./Error404.scss";

export default function Error404() {
  return (
    <div className="error404">
      <h1 className="error404__h1">404</h1>
      <p className="error404__p">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="error404__navlink">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}
