import { useDispatch, useSelector } from 'react-redux';
import { AddUser } from '../action';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AjouterUser() {
  const dispatch = useDispatch();
  const nomR = useRef();
  const prenomR = useRef();
  const ageR = useRef();
  const navig = useNavigate();
  const MaxId = useSelector((state) => state.users);
  const handlSubmit = (e) => {
    e.preventDefault();
    const nexID =
      MaxId.length === 0 ? 1 : Math.max(...MaxId.map((e) => e.id)) + 1;
    dispatch(
      AddUser({
        id: nexID,
        nom: nomR.current.value,
        prenom: prenomR.current.value,
        age: ageR.current.value,
      })
    );
    navig('/');
  };
  return (
    <form onSubmit={handlSubmit}>
      <label>nom</label> <br />
      <input type="text" ref={nomR} />
      <br />
      <label>prenom</label> <br />
      <input type="text" ref={prenomR} />
      <br />
      <label>age</label> <br />
      <input type="number" ref={ageR} />
      <br />
      <button type="submit">ajouter</button>
    </form>
  );
}
