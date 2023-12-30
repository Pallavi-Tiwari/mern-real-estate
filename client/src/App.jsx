import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import LogOut from './pages/LogOut'
import Header from './components/Header';


export default function App() {
  return (<BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/log-out' element={<LogOut />}/>
      </Routes>
  </BrowserRouter>
  )
}