import Topbar from './components/topbar/topbar.component'
import Home from './pages/home/homepage.component'
import Settings from './pages/settings/settings.component'
import SinglePost from './pages/single/single.component'
import WritePost from './pages/write-post/write-post.component'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Settings />
    </div>
  )
}

export default App
