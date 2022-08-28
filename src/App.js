import './app.scss'
// import Login from './pages/login/Login'
// import Register from './pages/register/Register'
import Home from './pages/home/Home'
// import Watch from './pages/watch/Watch'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route exact path='/'>
        <Route index element={<Home />} />
        <Route path='/movies'>
          <Route path='/movies' element={<Home type='movies' />} />
        </Route>
        <Route path='/series'>
          <Route path='/series' element={<Home type='series' />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
