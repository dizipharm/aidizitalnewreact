import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './components/Landing Page/Landing'
import About from './components/Pages/About'
import Accessories from './components/Pages/Accessories'
import Contact from './components/Pages/Contact'
import Features from './components/Pages/Features'
import Price from './components/Pages/Price'
import Privacystatement from './components/Pages/Privacystatement'


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/allfeatures' element={<Features/>}/>
      <Route path='/accessories' element={<Accessories/>}/>
      <Route path='/pricing' element={<Price/>}/>
      <Route path='/privacystatement' element={<Privacystatement/>}/>
      </Routes>
      </Router>
  )
}

export default App
