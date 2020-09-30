import React from 'react';
import UsersList from '../../components/UsersList';

const Users = () => {
  const users = [
    {
      name: 'Artem Konoplyov',
      id: 'u1',
      places: 123,
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      name: 'Imagine Users',
      id: 'u2',
      places: 95,
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ];

  return <UsersList users={users} />;
};

export default Users;
