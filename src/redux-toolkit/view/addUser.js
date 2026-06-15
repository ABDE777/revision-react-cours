import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ajouter } from '../reducer'; // Changement ici !

export default function AjouterUser() {
  const dispatch = useDispatch();

  const navig = useNavigate();
  const MaxId = useSelector((state) => state.users);
  const [inp, setInp] = useState({
    id: MaxId.length === 0 ? 1 : Math.max(...MaxId.map((e) => e.id)) + 1,
    nom: '',
    prenom: '',
    age: '',
  });
  const handleChange = (e) => {
    setInp({
      ...inp,
      [e.target.name]: e.target.value,
    });
  };
  const handlSubmit = (e) => {
    e.preventDefault();
    dispatch(ajouter(inp)); // Changement ici
    navig('/');
  };
  return (
    <form onSubmit={handlSubmit}>
      <label>nom</label> <br />
      <input type="text" name="nom" onChange={handleChange} />
      <br />
      <label>prenom</label> <br />
      <input type="text" name="prenom" onChange={handleChange} />
      <br />
      <label>age</label> <br />
      <input type="number" name="age" onChange={handleChange} />
      <br />
      <button type="submit">ajouter</button>
    </form>
  );
}
