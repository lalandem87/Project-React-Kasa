import '../Card/card.scss'

export default function Card({image, title}){
    return (
        <article className="card">
            <img src={image} alt={title} className="card__img"/>
            <h3 className="card__title">{title}</h3>
        </article>
    )
}