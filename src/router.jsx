import React from 'react'
import './styles/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import aboutMe from './pages/a-propos'
import error404 from './pages/error404'
import lodgings from './pages/logements'


const App = () => {
    return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<error404 />} />
        <Route path='/a-propos' element={<aboutMe />} />
        <Route path='/logements/:id' element={<lodgings />} /> 
      </Routes>
    </Router>
    );
};

export default App;