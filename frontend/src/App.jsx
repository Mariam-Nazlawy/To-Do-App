import EditTask from './components/EditTask';
import PasswordForm from './components/PasswordForm';
import Home from './pages/home';
import Login from './pages/login'
import Signup from './pages/signup'
import Task from './pages/TaskPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login/> } />
          <Route path='/signup' element={<Signup />} />
          <Route path='/task' element={<Task />} />
          <Route path='/edit-task' element={<EditTask/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/reset-password' element={<PasswordForm/>} />
        </Routes>
      </BrowserRouter>     
    </>
         
  )
}

export default App
