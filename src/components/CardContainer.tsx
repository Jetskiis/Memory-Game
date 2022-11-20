import { useEffect } from "react";
import Card from "./Card";

interface CardContainerProps {
  cards: {};
  setCards: (cards: {}) => void;
}

const CardContainer = (props: CardContainerProps) => {
  useEffect(() => {
    if(Object.keys(props.cards).length === 12) {
      alert("You win!");
      props.setCards({});
    }
  },[props]);  

  let output: JSX.Element[] = [];
  for(let i = 0; i < 9; i++) {
    output.push(<Card key={i} img={} onClick={} name={}/>);
  }

  return (
    <div className="card-container">
      {output}
    </div>
  )
}

export default CardContainer; 