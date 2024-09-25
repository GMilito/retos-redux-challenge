export const login = (email, password) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });  // Acción para mostrar que está cargando

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    dispatch({ 
      type: 'LOGIN_SUCCESS', 
      payload: { token: data.token, user: data.user }, 
    });
  } catch (error) {
    dispatch({ 
      type: 'LOGIN_FAILURE', 
      payload: { error: error.message },
    });
  }
};
