import {useState, useEffect} from 'react';
import "../styles/Scoreboard.css"; 
interface ScoreboardProps {
  score: number;
}

const Scoreboard = (props: ScoreboardProps) => {
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    if(props.score > maxScore) {
      setMaxScore(props.score);
    }
  }, [props.score, maxScore]);

  return (
    <div className="scoreboard">
      <div id="current-score">Current Score: {props.score}</div>
      <div id="best-score">Best Score: {maxScore}</div>
    </div>
  )
}

export default Scoreboard; 