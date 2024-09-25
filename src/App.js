// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para el inicio de sesión */}
          <Route path="/" element={<LoginForm />} />
          
          {/* Ruta para ver lista de usuarios (después de iniciar sesión) */}
          <Route path="/dash" element={<UserList />} />
          
          {/* Ruta para agregar usuarios (después de iniciar sesión) */}
          <Route path="/add-user" element={<AddUserForm />} />
          
          {/* Ruta por defecto */}
          <Route path="/home" element={<h1>Bienvenido a la Gestión de Usuarios</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
