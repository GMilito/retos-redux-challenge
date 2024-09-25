const initialState = {
  users: [],
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        users: [...state.users, action.payload], // Agregamos el nuevo usuario
      };
    case 'ADD_USER_FAILURE':
      return {
        ...state,
        error: action.payload.error,
      };
    case 'EDIT_USER_SUCCESS':
      return {
        ...state,
        users: state.users.map((user) => 
          user.id === action.payload.id ? action.payload : user
        ), // Actualizamos el usuario editado
      };
    case 'EDIT_USER_FAILURE':
      return {
        ...state,
        error: action.payload.error,
      };
    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload), // Eliminamos el usuario
      };
    case 'DELETE_USER_FAILURE':
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
