
import React from 'react'
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import './components/Navbar/navbar.css';
import './components/Header/Header.css';
import './components/Container/Container.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Container/>
    </div>
  )
}

export default App
