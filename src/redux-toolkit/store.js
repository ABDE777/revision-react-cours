import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer'; // On va créer ce fichier

export const store = configureStore({
  reducer: {
    users: userReducer, // On nomme notre "slice" de données
  },
});
