import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/sessionActions';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './LoginForm.css';  // Importamos el archivo de estilos

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector(state => state.session); // Obtener el usuario del estado
  const navigate = useNavigate();  // Hook para redirigir

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado con email:', email, 'y password:', password);
    dispatch(login(email, password));  // Llama a la acción de login
  };

  // Redirigir a la ruta /dash si el login es exitoso
  useEffect(() => {
    if (user) {
      navigate('/dash');  // Redirigir después de iniciar sesión correctamente
    }
  }, [user, navigate]);  // Solo se ejecuta si 'user' cambia

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
