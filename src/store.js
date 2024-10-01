import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';  // Para depuración
import { sessionReducer } from './reducers/sessionReducer';
import { userReducer } from './reducers/userReducer';

// Combinamos los reducers en un solo rootReducer
const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
});

// Creamos el store con Thunk como middleware para manejar acciones asíncronas
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
