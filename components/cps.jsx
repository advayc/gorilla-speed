import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';

export default function CPS() {
  const [clicks, setClicks] = useState(0);
  const [countdown, setCountdown] = useState(0.00);
  const [isRunning, setIsRunning] = useState(false);
  const [maxClicks, setMaxClicks] = useState(0);

  useEffect(() => {
    const storedMaxClicks = localStorage.getItem('maxClicks');
    if (storedMaxClicks) {
      setMaxClicks(parseInt(storedMaxClicks, 10));
    }
  }, []);

  const handleClick = () => {
    if (!isRunning) {
      setIsRunning(true);
      setClicks(0);
      setCountdown(0.00);
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown < 10.00) {
            return parseFloat((prevCountdown + 0.01).toFixed(2));
          } else {
            clearInterval(interval);
            setIsRunning(false);
            handleGameOver();
            return prevCountdown;
          }
        });
      }, 10);
    } else {
      setClicks((prevClicks) => prevClicks + 1);
    }
  };

  const handleGameOver = () => {
    if (clicks > maxClicks) {
      setMaxClicks(clicks);
      localStorage.setItem('maxClicks', clicks);
    }
    window.alert(`Game over, your clicks: ${clicks}, max clicks: ${maxClicks}`);
  };

  return (
    <div>
    <h2 className={styles.subtitle}>Test Your Click Speed</h2>
    <div className={styles.cpsContainer}>
      <div className={styles.clicking}>

        <div className={styles.timer}>Timer
          <h3 classname={styles.timernum}>{countdown.toFixed(2)}</h3>
        </div>

        <div className={styles.clicks}>Clicks
          <h3 className={styles.clicknum}>{clicks}</h3>
        </div>
      </div>
      
      <div>
        <button id="cps" onClick={handleClick} className={styles.clickbutton}>
          Click to start
        </button>
      </div>
    </div>
    </div>
  );
}

