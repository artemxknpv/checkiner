import React from 'react';

const UserItem = props => {
  return (
    <li>
      <h3>{props.username}</h3>
      <p>{props.placeCount}</p>
    </li>
  );
};

export default UserItem;
