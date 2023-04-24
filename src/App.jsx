import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './components/Landing Page/Landing'
import About from './components/Pages/About'
import Accessories from './components/Pages/Accessories'
import Contact from './components/Pages/Contact'
import Features from './components/Pages/Features'
import Price from './components/Pages/Price'
import Privacystatement from './components/Pages/Privacystatement'
import Tracepharm from './components/Tracepharm/Tracepharm'
import Sustain from './components/Sustain/Sustain'
import Nft from './components/NFT Marlet Place/Nft'
import Trade from './components/Trade/Trade'
import Section1 from './components/Consultancy/Section1'
import Team from './components/Team/Team'
import File from './components/Innovation/File'
import Careers from './components/Careers/Careers'


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
      <Route path='/tracepharm' element={<Tracepharm/>}/>
      <Route path='/sustainability' element={<Sustain/>}/>
      <Route path='/nftmarket' element={<Nft/>}/>
      <Route path='/trade' element={<Trade/>}/>
      <Route path='/consultancy' element={<Section1/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/innovation' element={<File/>}/>
      <Route path='/careers' element={<Careers/>}/>

      </Routes>
      </Router>
  )
}

export default App
