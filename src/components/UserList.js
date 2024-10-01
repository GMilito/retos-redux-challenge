import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions';  // Importa las acciones
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './UserList.css';  // Importa el archivo CSS

const UserList = () => {
  const { users, loading, error } = useSelector(state => state.user);  // Obtén los usuarios del estado
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Hook para redirigir

  // Cargar los usuarios al montar el componente
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAdd = () => {
    navigate('/add-user');
  };

  if (loading) {
    console.log('Cargando usuarios...');
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    console.log('Error al cargar usuarios:', error);
    return <p>Error al cargar usuarios: {error}</p>;
  }

  if (!users || users.length === 0) {
    console.log('No se encontraron usuarios');
    return <p>No se encontraron usuarios</p>;
  }

  return (
    <div className="user-list">
      <button className="add-user-btn" onClick={handleAdd}>
        Agregar Usuario
      </button>  {/* Botón para agregar un usuario */}
      
      {users.map((user, index) => (
        <div key={user.id} className="user-list-item">
          <span className="user-index">{index + 1}.</span> {/* Número de usuario */}
          <div className="user-details">
          <span className="user-name">{user.nombre}</span> {/* Nombre del usuario */}
          <br />
          <span className="user-email">{user.correo}</span> {/* Correo del usuario */}
        </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
