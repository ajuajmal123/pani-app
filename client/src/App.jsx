import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import Jobs from './pages/Jobs'
function App() {
  return <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/browse-jobs' element={<Jobs />} />
        <Route path='/about' element={<About />}/>
        </Routes>
  
  </BrowserRouter>
}

export default App
