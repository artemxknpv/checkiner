import React from 'react';
import UserItem from '../UserItem';

const UsersList = props => {
  if (!props.users.length) {
    return (
      <div className="center">
        <h2>No actual users</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
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
