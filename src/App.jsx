import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import CreateEvent from './components/CreateEvent/CreateEvent'
import JoinEvent from './components/JoinEvent/JoinEvent'
import ManageEvents from './components/ManageEvents/ManageEvents'
import ErrorPage from './components/ErrorPage/ErrorPage'



function App() {
  return (
    <>
      <BrowserRouter>
   <Routes>
   <Route path='/' element={<LandingPage/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/createEvent' element={<CreateEvent/>}/>
   <Route path='/joinEvent' element={<JoinEvent/>}/>
   <Route path='/manageEvents' element={<ManageEvents/>}/>
   <Route path='*' element={<ErrorPage/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
