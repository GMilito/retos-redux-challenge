const initialState = {
  users: [],
  loading: false,  // Estado de carga para mostrar un spinner o mensaje
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true,   // Indica que los usuarios se están cargando
        error: null,     // Limpiamos cualquier error anterior
      };

    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,  // Detenemos el estado de carga
        users: action.payload,  // Guardamos los usuarios obtenidos
      };

    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        loading: false,  // Detenemos el estado de carga
        error: action.payload,  // Guardamos el error recibido
      };

    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        users: [...state.users, action.payload],  // Agregamos el nuevo usuario a la lista
      };

    case 'ADD_USER_FAILURE':
      return {
        ...state,
        error: action.payload.error,  // Guardamos el error de agregar usuario
      };

    case 'EDIT_USER_SUCCESS':
      return {
        ...state,
        users: state.users.map((user) => 
          user.id === action.payload.id ? action.payload : user
        ),  // Actualizamos el usuario editado
      };

    case 'EDIT_USER_FAILURE':
      return {
        ...state,
        error: action.payload.error,  // Guardamos el error de edición
      };

    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),  // Eliminamos el usuario
      };

    case 'DELETE_USER_FAILURE':
      return {
        ...state,
        error: action.payload.error,  // Guardamos el error de eliminación
      };

    default:
      return state;
  }
};
