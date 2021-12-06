import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.component';
import Home from './Pages/Home/Home.page';
import Search from './Pages/Search/Search.page';
import CardPage from './Pages/CardDisplay/Card.page';
function App() {
  return (
    <div className="App">
      <Router>  
        <Navbar/>
        <Routes>
          <Route path="/search" element={<Search/>} />
          <Route path="/" element={<Home/>} />
          <Route path='/Job-:JobId' element={<CardPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
