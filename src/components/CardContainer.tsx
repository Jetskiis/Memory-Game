/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import Card from "./Card";

interface CardContainerProps {
  cards: {};
  setCards: (cards: {}) => void;
}

// const numCards = 16;
// const cardDict = {};


const CardContainer = (props: CardContainerProps) => {
  useEffect(() => {
    if(Object.keys(props.cards).length === 12) {
      alert("You win!");
      props.setCards({});
    }
  },[props]);  


  let output: JSX.Element[] = [];
//  let alreadySelected: number[] = Array(numCards).fill(0);
//   for(let i = 0; i < 9; i++) {

//     output.push(<Card key={i} img={} onClick={} name={}/>);
//   }

  return (
    <div className="card-container">
      {output}
      <Card key={1} img={"img/pokemon_img/1891631-016pidgey.png"} onClick={()=>{}} name={"Pidgey"}></Card>
    </div>
  )
}

export default CardContainer; 