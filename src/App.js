import { Route, Routes } from 'react-router-dom';
import Header from './componets/Header';
import Autor from './pages/Autor';
import Posts from './pages/Posts';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<Posts />} />
          <Route path="/autor" element={<Autor />} />
          <Route path="/user/:id" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
