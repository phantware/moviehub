import './app.scss'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch'
import { Routes, Route, Navigate } from 'react-router-dom'
function App() {
  const user = false
  return (
    <Routes>
      <Route exact path='/'>
        <Route path='/' element={user ? <Home /> : <Register />} />
        <Route
          path='/login'
          element={user ? <Navigate to='/' replace /> : <Login />}
        />
        <Route
          path='/register'
          element={user ? <Navigate to='/' replace /> : <Register />}
        />

        <Route path='/movies'>
          <Route path='/movies' element={<Home type='movies' />} />
        </Route>
        <Route path='/series'>
          <Route path='/series' element={<Home type='series' />} />
        </Route>
        <Route path='/watch' element={<Watch />} />
      </Route>
    </Routes>
  )
}

export default App
