import './App.css'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import About from './Pages/About'
import Test from './Pages/Test'
import ReviewChoice from './Pages/ReviewChoice'
import BasicModal from './Pages/BasicModal'
import AudienceList from './Pages/AudienceReport'

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<ReviewChoice />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/test" element={<Test />} />
          <Route path="/modal" element={<BasicModal />} />
          <Route path="/audience-report" element={<AudienceList />} />
      </Routes>
    </Router>
  )
}

export default App
