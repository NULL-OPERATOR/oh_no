import React from 'react';
import {Greeting} from './greeting.jsx'
import {Page} from './page.jsx'

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

  }

  render() {
    return (
      <div>
        <Page />,
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <Greeting isLogged={this.state.isToggleOn}>
          <h1> ciao</h1>
        </Greeting>
      </div>
    );
  }
}
