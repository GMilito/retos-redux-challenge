import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, editUser } from '../actions/userActions';
import './UserList.css';  // Importa el archivo CSS

const UserList = () => {
  const { users } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleEdit = (user) => {
    // Aquí puedes implementar la funcionalidad de edición
    dispatch(editUser(user));
  };

  const handleDelete = (id) => {
    // Confirmar y eliminar usuario
    dispatch(deleteUser(id));
  };

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-list-item">
          <span>{user.name} - {user.email}</span>
          <div>
            <button className="edit" onClick={() => handleEdit(user)}>Edit</button>
            <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
