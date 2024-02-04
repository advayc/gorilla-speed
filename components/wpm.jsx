import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/Home.module.css';

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
    const words = [
      'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I', 'it', 'for', 'not', 'on', 'with',
      'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which',
      'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think',
      'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because',
      'any', 'these', 'give', 'day', 'most', 'us', 'way', 'off', 'here', 'why', 'went', 'many', 'where', 'under', 'back',
      'little', 'round', 'man', 'came', 'show', 'every', 'me', 'name', 'very', 'through', 'form', 'much', 'great', 'help',
      'low', 'line', 'before', 'turn', 'cause', 'same', 'mean', 'differ', 'move', 'right', 'boy', 'old', 'too', 'does', 'tell',
      'sentence', 'set', 'three', 'air', 'play', 'small', 'end', 'put', 'home', 'read', 'hand', 'port', 'large', 'spell', 'add',
      'land', 'must', 'big', 'high', 'such', 'follow', 'act', 'ask', 'men', 'change', 'light', 'kind', 'off', 'need', 'house',
      'picture', 'try', 'again', 'animal', 'point', 'mother', 'world', 'near', 'build', 'self', 'earth', 'father', 'head',
      'stand', 'own', 'page', 'should', 'country', 'found', 'answer', 'school', 'grow', 'study', 'still', 'learn', 'plant',
      'cover', 'food', 'sun', 'four', 'thought', 'let', 'keep', 'eye', 'never', 'last', 'door', 'between', 'city', 'tree', 'cross',
      'since', 'hard', 'start', 'might', 'story', 'saw', 'far', 'sea', 'draw', 'left', 'late', 'run', "don't", 'while', 'press',
      'close', 'night', 'real', 'life', 'few', 'north', 'open', 'seem', 'together', 'next', 'white', 'children', 'begin', 'got',
      'walk', 'example', 'ease', 'paper', 'group', 'always', 'music', 'those', 'both', 'mark', 'book', 'letter', 'until', 'mile',
      'river', 'car', 'feet', 'care', 'second', 'enough', 'plain', 'girl', 'usual', 'young', 'ready', 'above', 'ever', 'red',
      'list', 'though', 'feel', 'talk', 'bird', 'soon', 'body', 'dog', 'family', 'direct', 'pose', 'leave', 'song', 'measure',
      'product', 'black', 'short', 'numeral', 'class', 'wind', 'sit', 'question', 'happen', 'complete', 'ship', 'area', 'half',
      'rock', 'order', 'fire', 'south', 'problem', 'piece', 'told', 'knew', 'pass', 'top', 'whole', 'king', 'street', 'inch',
      'multiply', 'nothing', 'course', 'stay', 'wheel', 'full', 'force', 'blue', 'object', 'decide', 'surface', 'deep', 'moon',
      'island', 'foot', 'system', 'busy', 'test', 'record', 'boat', 'common', 'gold', 'possible', 'plane', 'stead', 'dry',
      'wonder', 'laugh', 'thousand', 'ago', 'ran', 'check', 'game', 'shape', 'yes', 'hot', 'miss', 'brought', 'heat', 'snow',
      'bed', 'bring', 'sit', 'perhaps', 'fill', 'east', 'weight', 'language', 'among', 'fine', 'ball', 'yet', 'wave', 'drop',
      'heart', 'am', 'present', 'heavy', 'dance',
      'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an',
      'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into', 'year', 'your',
    ];

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
      window.alert('Congratulations! You have completed the test!');
      setIsComplete(true); 
    }

    if (value.length > placeholder.length) {
      setIsComplete(false); 
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
      <h2 className={styles.subtitle}>Test Your typing Speed!</h2>
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
        
        <div className={styles.placeholder}>
          {placeholder.split('').map((char, index) => (
            <span
              key={index}
              style={{
              }}
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
