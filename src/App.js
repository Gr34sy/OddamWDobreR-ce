import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {Home} from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';

import './scss/main.scss';
import { Logout } from './components/Logout.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
