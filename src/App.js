import './App.css';

import Home from "./components/Home"
import Search from "./components/Search"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(props) {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} >
          <Route path=":q" element={<Search />} />
        </Route>
      </Routes>
    </Router>


  );
}

export default App;
