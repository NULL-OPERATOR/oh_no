import React from 'react';

export function Numbers(props) {
  const numbers = props.numbers;

  function ListItem(props) {
    return <li>{props.value}</li>;
  }

  const listItems = numbers.map((number, index) =>
    // <li key={number.toString()}>
    //   {number} {index}
    <ListItem key={number.toString()}
              value={number} />
    // </li>
  );
  return (
    <div>
      <ul>{listItems}</ul>

      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
        )}
      </ul>
    </div>
  );
}
