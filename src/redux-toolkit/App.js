import { Provider } from 'react-redux';
import { store } from './components/store'; // Changement : plus de store1
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/view/userList';
import ModUser from './components/view/updateUser';
import AjouterUser from './components/view/addUser';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/upd/:id" element={<ModUser />} />
          <Route path="/add" element={<AjouterUser />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
