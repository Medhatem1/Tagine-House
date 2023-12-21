import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Footer from './Footer';
import Header from './Header';
import Reservation from './pages/Reservation';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    
    <div className="App">
        <Header />
        <div>
       <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About/>} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/menu" element={<Menu />} /> 
          <Route path="/reservation" element={<Reservation/>} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path='/Login' element={<Login />}/>
        </Routes>
        </div>

      <Footer/>
    </div>
  );
}

export default App;
