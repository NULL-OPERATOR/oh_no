// import React from 'react';
import ReactDOM from 'react-dom';
import {Toggle} from './ohno/toggle';
import {Clock} from './ohno/clock';
import {Greeting} from './ohno/greeting';
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
