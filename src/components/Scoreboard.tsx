import {useState, useEffect} from 'react';

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
      <div id="current-score">Score: {props.score}</div>
      <div id="best-score">Best: {maxScore}</div>
    </div>
  )
}

export default Scoreboard; 