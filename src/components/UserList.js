import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser, editUser } from '../actions/userActions';  // Importa las acciones
import './UserList.css';  // Importa el archivo CSS

const UserList = () => {
  const { users, loading, error } = useSelector(state => state.user);  // Obtén los usuarios del estado
  const dispatch = useDispatch();

  // Cargar los usuarios al montar el componente
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user) => {
    dispatch(editUser(user));
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p>Error al cargar usuarios: {error}</p>;
  }

  if (!users || users.length === 0) {
    return <p>No se encontraron usuarios</p>;
  }

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-list-item">
          <span>{user.nombre} - {user.correo}</span>
          <div>
            <button className="edit" onClick={() => handleEdit(user)}>Editar</button>
            <button className="delete" onClick={() => handleDelete(user.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
