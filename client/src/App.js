import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Context } from './context/context'
import Login from './pages/login/login.component'
import Topbar from './components/topbar/topbar.component'
import Home from './pages/home/homepage.component'
import Settings from './pages/settings/settings.component'
import SinglePost from './pages/single/single.component'
import WritePost from './pages/write-post/write-post.component'
import Register from './pages/register/resgister.component'
import NotFound from './pages/not-found/not-found.component'
import About from './pages/about/about.component'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  position: 'top-center',
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})

function App() {
  const { user } = useContext(Context)
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          exact
          element={user ? <Home /> : <Register />}
        />
        <Route path="/login" exact element={user ? <Home /> : <Login />} />
        <Route
          path="/settings"
          exact
          element={user ? <Settings /> : <Login />}
        />
        <Route
          path="/writepost"
          exact
          element={user ? <WritePost /> : <Login />}
        />
        <Route path="/post/:postid" exact element={<SinglePost />} />
        <Route path="/about" exact element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
