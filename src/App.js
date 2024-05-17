import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
