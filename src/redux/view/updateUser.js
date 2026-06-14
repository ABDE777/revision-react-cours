import { useDispatch, useSelector } from 'react-redux';
import { UpdateUser } from '../action';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export default function ModUser() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const nomR = useRef('');
  const prenomR = useRef('');
  const ageR = useRef('');
  const navig = useNavigate();
  const usrs = useSelector((state) =>
    state.users.find((e) => e.id === Number.parseInt(id))
  );
  const handlSubmit = (e) => {
    e.preventDefault();
    dispatch(
      UpdateUser({
        id: Number.parseInt(id),
        nom: nomR.current.value,
        prenom: prenomR.current.value,
        age: ageR.current.value,
      })
    );
    navig('/');
  };
  return (
    <form onSubmit={handlSubmit}>
      <label htmlFor="nom">nom</label> <br />
      <input name="nom" type="text" defaultValue={usrs.nom} ref={nomR} />
      <br />
      <label htmlFor="prenom">prenom</label> <br />
      <input id="prenom" type="text" defaultValue={usrs.prenom} ref={prenomR} />
      <br />
      <label htmlFor="age">age</label> <br />
      <input id="age" type="number" defaultValue={usrs.age} ref={ageR} />
      <br />
      <button type="submit">ajouter</button>
    </form>
  );
}
