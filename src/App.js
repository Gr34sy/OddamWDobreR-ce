import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {Home} from './components/Home.js';

import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
