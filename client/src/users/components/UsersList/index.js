import React from 'react';
import UserItem from '../UserItem';

const UsersList = props => {
  return (
    <div>
      {props.users.length ? (
        <ul>
          {props.users.map(user => (
            <UserItem username={user.name} places={user.places} />
          ))}
        </ul>
      ) : (
        <p>No actual users :(</p>
      )}
    </div>
  );
};

export default UsersList;
