import { useEffect, useState } from 'react';

export default function Users() {
  const API = 'https://jsonplaceholder.typicode.com/users';

  const [users, setUsers] = useState([]);

  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');

  const [isActive, setIsActive] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const [mode, setMode] = useState('list');

  // GET USERS

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await fetch(API);

    const data = await res.json();

    // JSONPlaceholder doesn't have age/status
    const newUsers = data.map((user) => ({
      id: user.id,

      name: user.name,

      age: 20 + user.id,

      isActive: true,
    }));

    setUsers(newUsers);
  };

  // ADD

  const handleAjouter = async (e) => {
    e.preventDefault();

    const res = await fetch(
      API,

      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name: nom,

          age: age,

          isActive: isActive,
        }),
      }
    );

    const data = await res.json();

    setUsers([
      ...users,

      {
        id: data.id,

        name: nom,

        age: age,

        isActive: isActive,
      },
    ]);

    resetForm();
  };

  // SELECT USER FOR UPDATE

  const handleModifier = (user) => {
    setSelectedUser(user);

    setNom(user.name);

    setAge(user.age);

    setIsActive(user.isActive);

    setMode('update');
  };

  // UPDATE

  const handleUpdate = async (e) => {
    e.preventDefault();

    await fetch(
      `${API}/${selectedUser.id}`,

      {
        method: 'PUT',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name: nom,

          age: age,

          isActive: isActive,
        }),
      }
    );

    setUsers(
      users.map((user) =>
        user.id === selectedUser.id
          ? {
              ...user,

              name: nom,

              age: age,

              isActive: isActive,
            }
          : user
      )
    );

    resetForm();
  };

  // DELETE

  const handleSupp = async (id) => {
    await fetch(
      `${API}/${id}`,

      {
        method: 'DELETE',
      }
    );

    setUsers(users.filter((user) => user.id !== id));
  };

  const resetForm = () => {
    setNom('');

    setAge('');

    setIsActive(false);

    setSelectedUser(null);

    setMode('list');
  };

  return (
    <>
      {mode === 'list' && (
        <>
          <button onClick={() => setMode('add')}>Ajouter</button>

          <table>
            <thead>
              <tr>
                <th>ID</th>

                <th>Name</th>

                <th>Age</th>

                <th>Status</th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>

                  <td>{user.name}</td>

                  <td>{user.age}</td>

                  <td>{user.isActive ? 'active' : 'inactive'}</td>

                  <td>
                    <button onClick={() => handleModifier(user)}>
                      modifier
                    </button>

                    <button onClick={() => handleSupp(user.id)}>
                      supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {mode !== 'list' && (
        <form onSubmit={mode === 'update' ? handleUpdate : handleAjouter}>
          Nom <br />
          <input value={nom} onChange={(e) => setNom(e.target.value)} />
          <br />
          Age <br />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
          Status
          <br />
          <button>{mode === 'update' ? 'Modifier' : 'Ajouter'}</button>
          <button type="button" onClick={resetForm}>
            Annuler
          </button>
        </form>
      )}
    </>
  );
}
