import React from 'react'
import Header from "./components/header/Header";
import Home from './components/home/Home'
import Projects from './components/project/Projects'
import Footer from "./components/footer/footer" 
import './App.css'

function App() {
  return (
    <main className='main'>
      <Header/>
      <Home />
      <Projects/>
      <Footer/>
    </main>
  )
}

export default App
