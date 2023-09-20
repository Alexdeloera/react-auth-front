import { Routes, Route } from 'react-router-dom'
import { Register } from './pages/Register'
import './App.css'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Admin } from './layout/Admin'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { useAppDispatch } from './store/hooks'
import { useEffect } from 'react'
import { addUSers } from './store/users/actions'
import { PrivateRoute } from './router/PrivateRoute'



function App() {


  const dispatch = (useAppDispatch());
  useEffect(() => {
    const users = localStorage.getItem('users')
    if (users) {
      const userList = JSON.parse(users || '');
      dispatch(addUSers(userList));
    }
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Admin />}>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
