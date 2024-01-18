import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';

const WPM = () => {
  const [placeholder, setPlaceholder] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const placeholders = [
      ['The quick brown fox jumps over the lazzy dog'],
      ['The macbook pro is the very best laptop i have ever seen'],
      ['many people have a very high typing speed but if you really want to be the best you have to practice'],
    ];

    const randomArray = placeholders[Math.floor(Math.random() * placeholders.length)];
    const randomPlaceholder = randomArray[Math.floor(Math.random() * randomArray.length)];

    setPlaceholder(randomPlaceholder);
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2 className={styles.subtitle}>Test Your typing Speed!</h2>
      <h3 className={styles.sstitle}></h3>
      <div className={styles.textarea}>
        <textarea id="textInput" value={inputValue} onChange={handleInputChange} className={styles.input}></textarea>
        <div className={styles.placeholder}>
          {placeholder.split('').map((char, index) => (
            <span key={index} style={{ color: inputValue[index] === char ? 'white' : inputValue[index] !== undefined ? 'red' : 'grey' }}>{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WPM;