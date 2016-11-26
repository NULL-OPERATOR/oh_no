import React from 'react';

export function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>mad props</h1>
      {unreadMessages.length > 0 &&
        <h2>
          you have {unreadMessages.length} unread yo.
        </h2>
      }
    </div>
  )
}
