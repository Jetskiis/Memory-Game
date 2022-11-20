import CardContainer from './CardContainer';
import Scoreboard from './Scoreboard';
import { useState, useEffect } from 'react';

const Game = () => {
  const [score, setScore] = useState(0);
  const [currentlySelected, setCurrentlySelected] = useState<{}>({});

  useEffect(() => {
    setScore(Object.keys(currentlySelected).length);
  }, [currentlySelected]);
  
  
  return (
    <div className="game">
        <Scoreboard score={score}/>
        <CardContainer cards={currentlySelected} setCards={setCurrentlySelected}/>
    </div>
  )
}

export default Game;