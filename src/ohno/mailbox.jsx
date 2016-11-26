function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>PROPS</h1>
      {unreadMessages.length > 0 &&
        <h2>
          you have {unreadMessages.length} unread yo.
        </h2>
      }
    </div>
  )
}


const messages = ['Lots', 'of', 'spam', 'awww', 'yisss']
