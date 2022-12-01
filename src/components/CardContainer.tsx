import React, { useEffect } from "react";
import Card from "./Card";
import "../styles/CardContainer.css";

interface CardContainerProps {
  cards: {};
  setCards: (cards: {}) => void;
}

const numCards: number = 16;
const cardDict: any = {
  abra: "img/pokemon_img/abra.png",
  bulbasaur: "img/pokemon_img/bulbasaur.png",
  caterpie: "img/pokemon_img/caterpie.png",
  charmander: "img/pokemon_img/charmander.png",
  clefairy: "img/pokemon_img/clefairy.png",
  ekans: "img/pokemon_img/ekans.png",
  jigglypuff: "img/pokemon_img/jigglypuff.png",
  machop:"img/pokemon_img/machop.png",
  nidoran: "img/pokemon_img/nidoran.png",
  pidgey: "img/pokemon_img/pidgey.png",
  pikachu: "img/pokemon_img/pikachu.png",
  rattata: "img/pokemon_img/rattata.png",
  sandshrew: "img/pokemon_img/sandshrew.png",
  squirtle: "img/pokemon_img/squirtle.png",
  vulpix: "img/pokemon_img/vulpix.png",
  weedle: "img/pokemon_img/weedle.png",
};


const CardContainer = (props: CardContainerProps) => {
  useEffect(() => {
    if(Object.keys(props.cards).length === numCards) {
      alert("You've reached the max score!");
      props.setCards({});
    }
  },[props]);  

  function handleClick(e: React.MouseEvent) {
    const cardName: string | null = (e.currentTarget as HTMLElement).id;  
    // console.log(cardName);
    if(cardName) {
    if((props.cards as any)[cardName]) {
      props.setCards({});
    } else {
      props.setCards({...props.cards, [cardName]: true});
    }
  }
  }


  let output: JSX.Element[] = [];
 let alreadySelected: number[] = Array(numCards).fill(0);

  for(let i = 0; i < 16; i++) {
    let randomNum: number = Math.floor(Math.random() * numCards);
    while(alreadySelected[randomNum] === 1) {
      randomNum = Math.floor(Math.random() * numCards);
    }
    alreadySelected[randomNum] = 1;
    let randomCardName: string = Object.keys(cardDict)[randomNum];
    output.push(<Card key={i} img={cardDict[randomCardName]} onClick={handleClick} name={randomCardName}/>);
  }

  return (
    <div className="card-container">
      <div className="grid-container">
      {output}
      </div>
    </div>
  )
}

export default CardContainer; 