  import { useState } from 'react';

  export default function Users() {
    const [nom, setNom] = useState('');
    const [age, setAge] = useState(null);
    const [OnUpdate, setOnUpdate] = useState(true);
    const [SelectedUser, setSelectedUser] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [ajouter, setAjouter] = useState(true);
    const [users, setUsers] = useState([
      {
        id: 1,
        name: 'Alice',
        age: 25,
        isActive: true,
      },
      {
        id: 2,
        name: 'Bob',
        age: 30,
        isActive: false,
      },
      {
        id: 3,
        name: 'Charlie',
        age: 22,
        isActive: true,
      },
      {
        id: 4,
        name: 'Diana',
        age: 35,
        isActive: true,
      },
      {
        id: 5,
        name: 'Eve',
        age: 28,
        isActive: false,
      },
    ]);

    const handleModifier = (id) => {
      const userUpdated = users.find((u) => u.id === id);
      setSelectedUser(userUpdated);
      setIsActive(userUpdated.isActive);
      setOnUpdate(false);
      setNom(userUpdated.name);
      setAge(userUpdated.age);
      setAjouter(true);
    };

    const valider = (e) => {
      e.preventDefault();
      const r = {
        id: SelectedUser.id,
        name: nom,
        age: age,
        isActive: isActive,
      };
      setUsers(users.map((e) => (e.id === SelectedUser.id ? r : e)));
      setOnUpdate(true);
      setSelectedUser(null);
      setNom('');
      setAge(null);
      setIsActive(false);
      setAjouter(true);
    };

    const handleSupp = (id) => {
      const newlist = users.filter((e) => e.id !== id);
      setUsers(newlist);
    };

    const handleAjouter = (e) => {
      e.preventDefault();
      const newUSer = {
        id: Math.max(...users.map((e) => e.id)) + 1,
        name: nom,
        age: age,
        isActive: isActive,
      };
      setUsers([...users, newUSer]);
      setOnUpdate(true);
      setSelectedUser(null);
      setNom('');
      setAge(null);
      setIsActive(false);
      setAjouter(true);
    };

    return (
      <>
        <button
          onClick={() => {
            setAjouter(false);
            setOnUpdate(false);
          }}
        >
          ajouter
        </button>{' '}
        {OnUpdate && (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((x) => {
                return (
                  <tr key={x.id}>
                    <td>{x.id} </td>
                    <td>{x.name} </td>
                    <td>{x.age} </td>
                    <td>{x.isActive ? 'true' : 'non valide'} </td>
                    <td>
                      <button onClick={() => handleModifier(x.id)}>
                        modifier
                      </button>
                      <button onClick={() => handleSupp(x.id)}>supprimer</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {!OnUpdate && (
          <form onSubmit={ajouter ? valider : handleAjouter}>
            nom <br />
            <input
              type="text"
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />
            <br />
            age
            <br />
            <input
              type="number"
              onChange={(e) => setAge(+e.target.value)}
              value={age}
            />
            <br />
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />
            status
            <br />
            <button type="submit">{!ajouter ? 'ajouter' : 'modifier'}</button>
          </form>
        )}
      </>
    );
  }
