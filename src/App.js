import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './index.css';
import Login from './components/login/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
