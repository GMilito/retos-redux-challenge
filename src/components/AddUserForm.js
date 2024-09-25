import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../actions/userActions';
import './AddUserForm.css';  // Importa el archivo CSS

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(name, email));
  };

  return (
    <div className="add-user-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
