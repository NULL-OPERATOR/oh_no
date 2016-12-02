import React from 'react';
import ReactDOM from 'react-dom';
import {Toggle} from './ohno/toggle';
import {Clock} from './ohno/clock';
import {Numbers} from './ohno/numbers';
// import {Greeting} from './ohno/greeting';
import {Mailbox} from './ohno/mailbox';
import {Blog} from './ohno/blog';
import {Form} from './ohno/form';
import {FlavourForm} from './ohno/flavourform';
import {Calculator} from './ohno/boiling';
// import App from './App';
import './index.css';

const messages = ['Lots', 'of', 'spam', 'awww', 'yisss'];
const numbersL = [1, 2, 3, 4, 5];
const posts = [
  {id: 1, title: 'Hello World', content: 'oooooh no!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm Oh Yes.'}
];

ReactDOM.render(
  <Calculator />,
  document.getElementById('boiling')
);

ReactDOM.render(
  <FlavourForm />,
  document.getElementById('flavourform')
);

ReactDOM.render(
  <Form />,
  document.getElementById('form')
);

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

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('blog')
);
