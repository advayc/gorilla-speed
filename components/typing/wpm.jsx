import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/Home.module.css';
import words from './words';

const WPM = () => {
  const [placeholder, setPlaceholder] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [visibleIndices, setVisibleIndices] = useState([]);
  const inputRef = useRef(null);
  const placeholderCount = 30;

  const restartGame = () => {
    setStartTime(null);
    setEndTime(null);
    setIsTyping(false);
    setIsComplete(false);
    setVisibleIndices([]);
    setInputValue('');

    const randomWords = [];
    for (let i = 0; i < placeholderCount; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      randomWords.push(words[randomIndex]);
    }

    const randomPlaceholder = randomWords.join(' ');
    setPlaceholder(randomPlaceholder);

    inputRef.current.focus();
  };

  const calculateWPM = () => {
    const minutes = (endTime - startTime) / 1000 / 60;
    const wordsPerMinute = (placeholder.split(' ').length / minutes);
    const netWordsPerMinute = (wordsPerMinute - (2 * inputValue.split(' ').length) / minutes) * -1;
    return netWordsPerMinute.toFixed(2);
  };

  useEffect(() => {
    const randomWords = [];
    for (let i = 0; i < placeholderCount; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      randomWords.push(words[randomIndex]);
    }

    const randomPlaceholder = randomWords.join(' ');
    setPlaceholder(randomPlaceholder);

    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping && inputValue !== placeholder && !isComplete) {
        setEndTime(Date.now());
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isTyping, inputValue, placeholder, isComplete]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);

    if (!isTyping && value.length > 0) {
      setIsTyping(true);
      setStartTime(Date.now());
    }

    if (value === placeholder) {
      setIsTyping(false);
      setIsComplete(true);
      const wpm = calculateWPM();

      const maxWPMFromStorage = localStorage.getItem('maxWPM');
      let maxWPM = maxWPMFromStorage ? parseFloat(maxWPMFromStorage) : 0;

      // Update maxWPM if the current WPM is greater or equal
      if (parseFloat(wpm) >= maxWPM) {
        maxWPM = parseFloat(wpm);
        localStorage.setItem('maxWPM', maxWPM);
      }

      window.alert(`Your WPM is ${wpm}. Max WPM: ${maxWPM}`);
    }

    if (value.length > placeholder.length) {
      setIsComplete(false);
    }

    const placeholderChars = placeholder.split('');
    const typedChars = value.split('');

    const mismatchIndices = typedChars.reduce((acc, char, index) => {
      if (char !== placeholderChars[index]) {
        acc.push(index);
      }
      return acc;
    }, []);

    setVisibleIndices([...new Set([...visibleIndices, ...mismatchIndices])]);

    const inputField = document.getElementById('textInput');

    if (inputField) {
      inputField.style.color = ''; 

      if (mismatchIndices.length > 0) {
        inputField.style.color = 'red';
      }
    }
  };

  useEffect(() => {
    if (startTime && endTime && !isComplete) {
      console.log(`Time taken: ${endTime - startTime} milliseconds`);
    }
  }, [startTime, endTime, isComplete]);

  const timeElapsed = ((Date.now() - (startTime || Date.now())) / 1000).toFixed(2);

  return (
    <div>
      <h2 className={styles.subtitle}>Test Your Typing Speed!</h2>
      <div className={styles.clicking}>
        <div className={styles.timer}>
          Timer
          <h3 className={styles.timernum}>{timeElapsed}</h3>
        </div>

        <div className={styles.clicks}>
          <button id="restart" className={styles.reset} onClick={restartGame}>
            Click to Restart
          </button>
        </div>
      </div>
      <div className={styles.textarea}>
        <textarea
          id="textInput"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
          autoFocus
          ref={inputRef}
        />

        <div id="placeholder" className={styles.placeholder}>
          {placeholder.split('').map((char, index) => (
            <span
              key={index}
              style={{ visibility: visibleIndices.includes(index) || inputValue.length > index ? 'hidden' : 'visible' }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WPM;
