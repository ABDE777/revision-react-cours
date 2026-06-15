import { Provider } from 'react-redux';
import { store1 } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './view/userList';
import ModUser from './view/updateUser';
import AjouterUser from './view/addUser';

function App() {
  return (
    <Provider store={store1}>
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
