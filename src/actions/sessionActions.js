export const login = (email, password) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });  // Acción para mostrar que está cargando

  try {
    console.log('Enviando datos al backend:', { correo: email, contrasena: password });
    const response = await fetch('https://tiusr21pl.cuc-carrera-ti.ac.cr/front_auth/auth.php', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        correo: email,         // Ensure this matches "correo" as in PHP
        contrasena: password    // Ensure this matches "contrasena" as in PHP
      }),
        
    });
    console.log('respuesta ', response)
    if (response.status === 'error') {
      const errorData = await response.json();
      console.log('Error en la respuesta:', errorData);
      throw new Error(errorData.message || 'Login failed');
    }
    

    const data = await response.user();
    dispatch({ 
      type: 'LOGIN_SUCCESS', 
      payload: { id: data.id, nombre: data.nombre }, 
    });
  } catch (error) {
    console.error('Error durante el login:', error.message);
    dispatch({ 
      type: 'LOGIN_FAILURE', 
      payload: { error: error.message },
    });
  }
};
