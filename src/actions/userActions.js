// Acción para agregar un nuevo usuario
export const addUser = (name, email, password) => async (dispatch) => {
  try {
    console.log("Enviando solicitud para agregar usuario con los datos:");
    console.log("Nombre:", name, "Correo:", email, "Contraseña:", password);

    const response = await fetch('https://tiusr21pl.cuc-carrera-ti.ac.cr/front_auth/registro.php', {
      method: 'POST',
      body: JSON.stringify({ nombre: name, correo: email, contraseña: password }),  // Asegúrate de que el campo es "contrasena"
    });

    console.log("Respuesta recibida del servidor:", response);

    if (!response.ok) {
      console.error('Error en la solicitud:', response.statusText);
      throw new Error('Failed to add user');
    }

    const data = await response.json();
    console.log("Datos recibidos del servidor:", data);

    dispatch({ type: '??????', payload: data }); // no sabemos cual es el nombre de reducer que tenemos que usar acá?, quizas si vas a la carpeta reducers y revisas alli te enteres
    console.log("Acción ADD_USER_SUCCESS despachada con el payload:", data);
  } catch (error) {
    console.error('Error al agregar usuario:', error.message);
    dispatch({ type: '??????', payload: { error: error.message } }); // no sabemos cual es el nombre de reducer que tenemos que usar acá?, quizas si vas a la carpeta reducers y revisas alli te enteres
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


