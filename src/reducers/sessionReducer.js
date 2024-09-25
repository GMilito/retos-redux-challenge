const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, token: action.payload.token, user: action.payload.user };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload.error };
    case 'LOGOUT':
      return { ...initialState };  // Al cerrar sesión, limpiamos el estado
    default:
      return state;
  }
};
