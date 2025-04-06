import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import About from './pages/About'
import Profile from './pages/Profile'
function App() {
  return <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />}/>
        </Routes>
  
  </BrowserRouter>
}

export default App
