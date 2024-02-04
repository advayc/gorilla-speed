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
  const inputRef = useRef(null);
  const placeholderCount = 30;

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
    }, 100); // Update the timer every 100 milliseconds

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

    const inputField = document.getElementById('textInput');

    if (inputField) {
      inputField.style.color = ''; // Reset color

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
      <div className={styles.timeContainer}>
        Timer
        <h3 className={styles.timernum}>{timeElapsed}</h3>
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
            <span key={index}>
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WPM;
