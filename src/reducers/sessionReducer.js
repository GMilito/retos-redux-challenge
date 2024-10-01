const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true, error: null };

    case 'LOGIN_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        user: action.payload.user, // Almacena el usuario cuando el login es exitoso
        error: null,
      };

    case 'LOGIN_FAILURE':
      return { 
        ...state, 
        loading: false, 
        error: action.payload.error 
      };

    case 'LOGOUT':
      return { ...initialState };  // Al cerrar sesión, limpiamos el estado

    default:
      return state;
  }
};
