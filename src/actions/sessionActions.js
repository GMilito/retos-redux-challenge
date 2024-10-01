export const login = (email, password) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });  // Acción para mostrar que está cargando

  try {
    const response = await fetch('https://tiusr21pl.cuc-carrera-ti.ac.cr/front_auth/auth.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        correo: email,
        contrasena: password
       }),
    });
    console.log('respuesta ', response)
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }
    

    const data = await response.json();
    dispatch({ 
      type: 'LOGIN_SUCCESS', 
      payload: { id: data.token, nombre: data.user }, 
    });
  } catch (error) {
    dispatch({ 
      type: 'LOGIN_FAILURE', 
      payload: { error: error.message },
    });
  }
};
