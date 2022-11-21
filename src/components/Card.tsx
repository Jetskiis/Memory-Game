import "../styles/Card.css"

interface CardProps{
    img: string;
    name: string;
    onClick: () => void;
}

const Card = (props: CardProps) => {
    return(
    <div className="card" onClick={props.onClick}>
        <img src={props.img} alt=""/>
        <span>{props.name}</span>
    </div>
    )
}

export default Card;