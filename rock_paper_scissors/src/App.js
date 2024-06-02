import React, { useState} from 'react';
import Rock from './components/rock.png';
import Paper from './components/paper.png';
import Scissors from './components/scissors.png';
import rps from './components/rps.gif';
import yay from './components/celebrate.gif'
import './App.css'

function App() {
  const [img, setImg] = useState(-1);
  const [compimg, setCompImg] = useState(-1);
  const [count, setCount] = useState(0);
  const [compCount, setCompCount] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [gameHistory, setGameHistory] = useState([]);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 3);
  };

  const handleClick0 = () => {
    setImg(0);
    var random = generateRandomNumber();
    setCompImg(random);

    setTimeout(() => {
      if (random === 0) {
        updateGameHistory('Tie');
      } else if (random === 1) {
        setCompCount((prevCount) => prevCount + 1);
        updateGameHistory('Computer');
      } else {
        setCount((prevCount) => prevCount + 1);
        setCelebrate(true);
        updateGameHistory('You');
      }
      setCompImg(-1);
      setImg(-1);
    }, 2000);
    setCelebrate(false);
  };

  const handleClick1 = () => {
    setImg(1);
    var random = generateRandomNumber();
    setCompImg(random);

    setTimeout(() => {
      if (random === 0) {
        setCount((prevCount) => prevCount + 1);
        updateGameHistory('You');
        setCelebrate(true);
      } else if (random === 1) {
        updateGameHistory('Tie');
      } else {
        setCompCount((prevCount) => prevCount + 1);
        updateGameHistory('Computer');
      }
      setCompImg(-1);
      setImg(-1);
    }, 2000);
    setCelebrate(false);
  };

  const handleClick2 = () => {
    setImg(2);
    var random = generateRandomNumber();
    setCompImg(random);

    setTimeout(() => {
      if (random === 0) {
        setCompCount((prevCount) => prevCount + 1);
        updateGameHistory('Computer');
      } else if (random === 1) {
        setCount((prevCount) => prevCount + 1);
        setCelebrate(true);
        updateGameHistory('You');
      } else {
        updateGameHistory('Tie');
      }
      setCompImg(-1);
      setImg(-1);
    }, 2000);
    setCelebrate(false);
  };

  const updateGameHistory = (winner) => {
    setGameHistory((prevHistory) => {
      if (prevHistory.length >= 5) {
        prevHistory.pop();
      }
      return [{ winner, timestamp: new Date().toLocaleTimeString() }, ...prevHistory];
    });
  };

  return (
    <div className="App">
      <div className='own'>
        <div className='section'>
          {img === 0 ? <img src={Rock} alt="Rock" /> : img === 1 ? <img src={Paper} alt="Paper" /> : img === 2 ? <img src={Scissors} alt="Scissors" /> : <img src={rps} alt="rps" />}
        </div>
        <div className='section'>
          <button onClick={handleClick0}>Rock</button>
          <button onClick={handleClick1}>Paper</button>
          <button onClick={handleClick2}>Scissors</button>
        </div>
        <div className='section'>
          {compimg === 0 ? <img src={Rock} alt="Rock" /> : compimg === 1 ? <img src={Paper} alt="Paper" /> : compimg === 2 ? <img src={Scissors} alt="Scissors" /> : <img src={rps} alt="rps" />}
        </div>
        Heres your total score: {count}<br></br>
        Heres the computer score: {compCount}
      </div>
      <div className='own'>
      <div className='history'>
        <h2>Game History</h2>
        <table>
          <thead>
            <tr>
              <th>Game</th>
              <th>Winner</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {gameHistory.map((game, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{game.winner}</td>
                <td>{game.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      {celebrate && <img src={yay} alt="celebrate"/>}
    </div>
  );
}

export default App;
