import { useDispatch, useSelector } from 'react-redux';
import { UpdateUser } from '../action';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ModUser() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navig = useNavigate();
  const user = useSelector((state) => state.users.find((e) => e.id === +id));
  const [inp, setInp] = useState({ id: +id, nom: user?.nom || '',prenom: user?.prenom || '', age: user?.age || '',
  });
  const handleChange = (e) => {
    setInp({
      ...inp,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateUser(inp));
    navig('/');
  };
  return (
    <form onSubmit={handleSubmit}>
      nom
      <br />
      <input name="nom" type="text" value={inp.nom}  onChange={handleChange} />
      <br />
      prenom
      <br />
      <input name="prenom"  type="text"value={inp.prenom}  onChange={handleChange}
      />
      <br />
      age
      <br />
      <input name="age" type="number" value={inp.age} onChange={handleChange} />
      <br />
      <button type="submit">modifier</button>
    </form>
  );
}
