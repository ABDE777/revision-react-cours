export const AddUser = (user) => {
  return { type: 'ajouter', payload: user };
};

export const UpdateUser = (newUser) => {
  return { type: 'modifier', payload: newUser };
};
export const DelUser = (id) => {
  return { type: 'suprimer', payload: id };
};
