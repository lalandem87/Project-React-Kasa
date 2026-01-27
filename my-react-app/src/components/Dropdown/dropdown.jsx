import { useState } from "react";
import "./dropdown.scss";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse__button">
        {title}
        <img
          onClick={() => setIsOpen(!isOpen)}
          src="/img/arrow.png"
          alt="Arrow"
          className={`collapse__arrow ${isOpen ? "collapse__arrow--open" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="collapse__content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
