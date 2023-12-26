import React from 'react'
import './styles/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AboutMe from './pages/A-propos'
import Error404 from './pages/Error404'
import Lodgings from './pages/Logements'
import Home from './pages/Home'


const App = () => {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error404 />} />
          <Route path='/a-propos' element={<AboutMe />} />
          <Route path='/logements/:id' element={<Lodgings />} /> 
        </Routes>
      </Router>
    );
};

export default App;