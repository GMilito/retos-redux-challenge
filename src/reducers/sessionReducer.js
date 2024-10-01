const initialState = {
  user: null,      // User object, e.g., { id: ..., nombre: ... }
  loading: false,  // Loading state for async requests
  error: null,     // Error state for failures
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true };

    case 'LOGIN_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        user: action.payload.user  // Only store the user object
      };

    case 'LOGIN_FAILURE':
      return { 
        ...state, 
        loading: false, 
        error: action.payload.error 
      };

    case 'LOGOUT':
      return { ...initialState };  // Reset state on logout

    default:
      return state;
  }
};
