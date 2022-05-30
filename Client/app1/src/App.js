import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Components/Header';
import Nav from './Components/Nav';
import Flex from './Components/flex';
import User from './Components/User'
import Register from './Components/Register';
import Profile from './Components/Profile'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav />
     <Routes>
       <Route path="/" element={<Flex />} />
       <Route path="/user" element={<User />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/register" element={<Register />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
