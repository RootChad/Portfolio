import React from 'react'
import "./App.css"
import Sidebar from './components/Sidebar'
import Home from './components/home/Home'
import About from './components/About'
import Services from './components/Services'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
       
        <Resume />
        <Portfolio />
        <Contact/>
      </main>
    </>
  )
}
