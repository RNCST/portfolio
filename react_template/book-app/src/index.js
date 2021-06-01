import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import '@fortawesome/fontawesome-free/js/all.js';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const { of, interval, range, EMPTY } = Rx;
// const { delay, take, map, concatMap } = RxOperators;

// const sentence = new Date().toString().toUpperCase();
// const words = sentence.split(' ');
// const delayMS = 1000;

// const wordDelay = i =>
//   i === 0
//     ? delayMS
//     : (words[i - 1].length + 1) * delayMS;

// const wordStart = i =>
//   i < words.length
//     ? of(i).pipe(delay(wordDelay(i)))
//     : EMPTY.pipe(delay(wordDelay(i)))

// const wordObservable = word => {
//   const letters = word.split('');

//   return interval(delayMS).pipe(
//     take(letters.length),
//     map(i => letters[i])
//   );
// };

// range(0, words.length + 1).pipe(
//   concatMap(wordStart),
//   map(i => wordObservable(words[i]))
// );
