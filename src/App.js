import logo from './logo.svg';
import './scss/main.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Layout} from './components/Layout.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
