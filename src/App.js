import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './scss/main.scss';
import {Home} from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { Logout } from './components/Logout.js';
import { Give } from './components/Give';
import {AuthProvider} from './components/Auth';


function App() {
  return (
    <div className="App">

      <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/give' element={<Give/>}/>
        </Routes>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
