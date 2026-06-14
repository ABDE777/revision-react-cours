import { createSlice } from '@reduxjs/toolkit';

// État initial (exactement comme avant)
const initialState = {
  users: [
    { id: 1, nom: 'abdo', prenom: 'mazgoura', age: 20 },
    { id: 2, nom: 'jad', prenom: 'ghallali', age: 19 },
    { id: 3, nom: 'ibra', prenom: 'challal', age: 15 },
  ],
};

// Création du slice
const userSlice = createSlice({
  name: 'users', // Nom de notre slice
  initialState, // L'état initial
  reducers: {
    // Nos actions (comme les cases du switch)
    ajouter: (state, action) => {
      // Avec Redux Toolkit, on peut "modifier" le state directement !
      state.users.push(action.payload);
    },
    modifier: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...action.payload };
      }
    },
    suprimer: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

// Export des actions générées automatiquement
export const { ajouter, modifier, suprimer } = userSlice.actions;

// Export du reducer
export default userSlice.reducer;
