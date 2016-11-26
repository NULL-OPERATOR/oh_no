import React from 'react';

export function Greeting(props) {
  let name
  var style = {
    background: 'green',
  }

  if (props.isLogged) {
    name = 'Welcome'
  } else {
    name = 'Unwelcome'
  }
  return (
    <div>
      { props.children}
      hello
      {name}

      {props.isLogged === true &&
        <h2>
          You have 33 unread messages.
        </h2>
      }

      <div style={style}>
        The user is <b>{props.isLogged ? 'currently' : 'not'}</b> logged in.
      </div>

      <div>
         {props.isLogged ? (
           'aha'
          //  <LogoutButton onClick={this.handleLogoutClick} />
         ) : (
           'oh no'
          //  <LoginButton onClick={this.handleLoginClick} />
         )}
       </div>
    </div>
  )
}
