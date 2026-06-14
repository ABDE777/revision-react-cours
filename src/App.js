
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store1 } from './redux/store';
import List from './redux/view/userList';
import ModUser from './redux-toolkit/view/updateUser';


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
