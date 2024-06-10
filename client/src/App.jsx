import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'

function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/signin' element={<SignIn/>}> </Route>
        <Route path='/signup' element={<SignUp/>}> </Route>
        <Route path='/projects' element={<Projects/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/dashboard' element={<Dashboard/>}> </Route>


      </Routes>
    </Router>
  )
}

export default App
