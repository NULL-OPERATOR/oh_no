import React from 'react';
import ReactDOM from 'react-dom';
import {Toggle} from './ohno/toggle';
import {Clock} from './ohno/clock';
import {Numbers} from './ohno/numbers';
// import {Greeting} from './ohno/greeting';
import {Mailbox} from './ohno/mailbox';
// import App from './App';
import './index.css';

const messages = ['Lots', 'of', 'spam', 'awww', 'yisss'];
const numbersL = [1, 2, 3, 4, 5];


ReactDOM.render(
  <Toggle />,
  document.getElementById('toggle')
);

ReactDOM.render(
  <Clock />,
  document.getElementById('clock')
);

ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('messages')
);

ReactDOM.render(
  <Numbers numbers={numbersL} />,
  document.getElementById('numbers')
);
