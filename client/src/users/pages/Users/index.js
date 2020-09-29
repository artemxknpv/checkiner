import React from 'react';
import UsersList from '../../components/UsersList';

const Users = () => {
  const users = [
    { name: 'Artem Konoplyov', id: 'u1', places: 123, image: 'image' },
    { name: 'Imagine Users', id: 'u2', places: 95, image: 'another_image' },
  ];

  return (
    <div>
      <UsersList users={users} />
    </div>
  );
};

export default Users;
