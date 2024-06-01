import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from "./components/Nav"
import Hero from './components/Hero'
import Footer from './components/Footer'

function App(){

  return (
    <>
      <Nav/>
      <Hero></Hero>
      <Footer/>
    </>
  )
}
export default App;