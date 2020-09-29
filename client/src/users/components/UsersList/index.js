import React from 'react';
import UserItem from '../UserItem';

const UsersList = props => {
  if (!props.users.length) {
    return <p>No actual users</p>;
  }

  return (
    <ul>
      {props.users.map(user => (
        <UserItem
          key={user.id}
          image={user.image}
          username={user.name}
          id={user.id}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
