import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import './AddUserForm.css';  // Importa el archivo CSS

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Inicializa useNavigate
  const { error } = useSelector(state => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado con los valores:");
    console.log("Nombre:", name);
    console.log("Correo:", email);
    console.log("Contraseña:", password);
    
    dispatch(addUser(name, email, password));  // Acción para agregar un nuevo usuario
    console.log("Acción para agregar usuario despachada");

    // Redirige a la página de lista de usuarios después de agregar el usuario
    navigate('/dash');  
    console.log("Redirigiendo a /dash");
  };

  return (
    <div className="add-user-container">
      <h2>Agregar Usuario</h2>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  );
};

export default AddUserForm;
