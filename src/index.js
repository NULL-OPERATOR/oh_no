import React from 'react';
import ReactDOM from 'react-dom';
import {Toggle} from './ohno/toggle';
import {Clock} from './ohno/clock';
import {Greeting} from './ohno/greeting';
import {Mailbox} from './ohno/mailbox';
// import App from './App';
import './index.css';

const messages = ['Lots', 'of', 'spam', 'awww', 'yisss'];

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
