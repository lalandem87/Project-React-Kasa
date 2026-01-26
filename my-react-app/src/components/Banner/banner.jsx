import "./banner.scss";

export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Banniere Kasa" className="banner__img" />
      <h1 className="banner__title">{text}</h1>
    </div>
  );
}
