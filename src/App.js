import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.component';
import Home from './Pages/Home/Home.page';
import Search from './Pages/Search/Search.page';
import CardPage from './Pages/CardDisplay/Card.page';
import About from './Pages/About/About.page';
import Contact from './Pages/Contact/Contact.page';
function App() {
  return (
    <div className="App">
      <Router>  
        <Navbar/>
        <Routes>
          <Route path="/search" element={<Search/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/Job-:JobId' element={<CardPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
