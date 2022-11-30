import React from "react";
import "../styles/Card.css"

interface CardProps{
    img: string;
    name: string;
    onClick: (e: React.MouseEvent) => void;
}

const Card = (props: CardProps) => {
    return(
    <div className="card" onClick={props.onClick} id={props.name}>
        <img src={props.img} alt=""/>
        <span>{props.name}</span>
    </div>
    )
}

export default Card;