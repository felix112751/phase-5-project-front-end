import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Bookclub from './Pages/Bookclub';
import Recommended from './Pages/Recommended';
import Blog from './Pages/Blog';
import Media from './Pages/Media';
import About from './Pages/About';
import Join from './Pages/Join';



function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='bookclub' element={<Bookclub />} />
              <Route path='recommended' element={<Recommended />} />
              <Route path='blog' element={<Blog />} />
              <Route path='media' element={<Media />} />
              <Route path='about' element={<About />} />
              <Route path='join' element={<Join />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
