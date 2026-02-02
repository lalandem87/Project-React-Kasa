import { useState } from "react";
import "./dropdown.scss";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img
          src="/img/arrow.png"
          alt="Arrow"
          className={`collapse__arrow ${isOpen ? "collapse__arrow--open" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="collapse__content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index} className="collapse-li">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}
