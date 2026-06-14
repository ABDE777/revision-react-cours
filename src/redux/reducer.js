const initialState = {
  users: [
    { id: 1, nom: 'abdo', prenom: 'mazgoura', age: 20 },
    { id: 2, nom: 'jad', prenom: 'ghallali', age: 19 },
    { id: 3, nom: 'ibra', prenom: 'challal', age: 15 },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ajouter':
      return { ...state, users: [...state.users, action.payload] };
    case 'modifier':
      return {
        ...state,
        users: state.users.map((e) =>
          e.id === action.payload.id
            ? {
                ...e,
                nom: action.payload.nom,
                prenom: action.payload.prenom,
                age: action.payload.age,
              }
            : e
        ),
      };
    case 'suprimer':
      return {
        ...state,
        users: state.users.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};
