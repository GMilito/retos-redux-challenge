// Acción para agregar un nuevo usuario
export const addUser = (name, email, pass) => async (dispatch) => {
  try {
    const response = await fetch('https://tiusr21pl.cuc-carrera-ti.ac.cr/front_auth/registro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre: name, correo: email, contrasena: pass }),
    });

    if (!response.ok) {
      throw new Error('Failed to add user');
    }

    const data = await response.json();
    dispatch({ type: 'ADD_USER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'ADD_USER_FAILURE', payload: { error: error.message } });
  }
};
// Acción para obtener los usuarios
export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });
  try {
    const response = await fetch('https://tiusr21pl.cuc-carrera-ti.ac.cr/front_auth/usuarios.php');
    const data = await response.json();

    if (data.status === 'success') {
      // Despacha los usuarios obtenidos al reducer
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data.users });
    } else {
      throw new Error('Error al cargar usuarios');
    }
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};

// Acción para editar un usuario
export const editUser = (user) => async (dispatch) => {
  try {
    const response = await fetch(`/api/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Failed to edit user');
    }

    const data = await response.json();
    dispatch({ type: 'EDIT_USER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'EDIT_USER_FAILURE', payload: { error: error.message } });
  }
};

// Acción para eliminar un usuario
export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/users/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete user');
    }

    dispatch({ type: 'DELETE_USER_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_USER_FAILURE', payload: { error: error.message } });
  }
};
