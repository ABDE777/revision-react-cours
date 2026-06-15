import { useDispatch, useSelector } from 'react-redux';
import { suprimer } from '../reducer'; // Changement ici !
import { Link } from 'react-router-dom';

export default function List() {
  const data = useSelector((state) => state.users); 
  const dispatch = useDispatch();

  return (
    <div>
      <Link to={'/add'}>
        <button>ajouter user</button>
      </Link>
      {data.length === 0 ? (
        <h1>pas de users</h1>
      ) : (
        <table border={1}>
          <thead>
            <tr>
              <th>id</th>
              <th>nom</th>
              <th>prenom</th>
              <th>age</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((u) => {
              return (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.nom}</td>
                  <td>{u.prenom}</td>
                  <td>{u.age}</td>
                  <td>
                    <Link to={`/upd/${u.id}`}>
                      <button>modifier</button>
                    </Link>
                    <button
                      onClick={() => {
                        return dispatch(suprimer(u.id));
                      }}
                    >
                      supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
