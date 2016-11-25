import React from 'react';
import ReactDOM from 'react-dom';
import {Toggle} from './test/toggle';
import {Clock} from './test/clock';
import {Greeting} from './test/greeting';
// import App from './App';
import './index.css';


ReactDOM.render(
  <Toggle />,
  document.getElementById('toggle')
);

// ReactDOM.render(
//   <Greeting />,
//   document.getElementById('toggle')
// );

ReactDOM.render(
  <Clock />,
  document.getElementById('clock')
);

// ReactDOM.render(
//   <Greeting />,
//   document.getElementById('greeting')
// );
