import React from 'react'
import Header from "./components/header/Header";
import Home from './components/home/Home'
import Projects from './components/project/Projects'
import Contact from './components/contact/Contact';
import Footer from "./components/footer/footer" 
import './App.css'

function App() {
  return (
    <main className='main'>
      <Header/>
      <Home />
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
