// import logo from './logo.svg';
import './assets/sass/app.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';


function App() {
  return (
      <Router>
         <header className='Header'> 
         <div className="container">
           <div className="title">
              <h2>CobaaReact!</h2>
           </div>
           <div className="menu-ul">
            <ul>
            <li>
                <Link to="/">Home</Link>      
                </li>
                <li>
                <Link to="/about">About</Link>      
                </li>
            </ul>
           </div>
             </div>
         </header>
          <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
          </Routes>
      </Router>
  ); 
}

export default App;
