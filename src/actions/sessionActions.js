export const login = (email, password) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });  // Mostrar que está cargando

  try {
    console.log('Enviando datos al backend:', { correo: email, contrasena: password });

    const response = await fetch('https://tiusr21pl.cuc-carrera-ti.ac.cr/front_auth/auth.php?action=login', {
      method: 'POST',
      body: JSON.stringify({
        correo: email,
        contrasena: password    // Asegúrate de que coincide con el backend
      }),
    });

    console.log('Respuesta recibida:', response);

    if (!response.ok) {
      throw new Error('Error en la solicitud al servidor');
    }

    const data = await response.json();
    console.log('Datos recibidos del backend:', data);

    if (data.error) {
      // Si el backend devuelve un error, lo manejamos aquí
      throw new Error(data.error);
    }

    // Si el login es exitoso, data contiene id y nombre del usuario
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { user: data },  // Almacena el id y el nombre del usuario
    });
  } catch (error) {
    console.error('Error durante el login:', error.message);
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: { error: error.message },
    });
  }
};
