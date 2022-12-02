import './App.css'
import Footer from './Footer'
import Profile from './Profile'
import Content from './Content'

const SplitLine = () => {
  return (
    <hr className="SplitLine" />
  )
}


function App() {
  return (
    <div className="App">
      <Profile />
      <SplitLine />
      <Content />
      <SplitLine />
      <Footer />
    </div>
  )
}

export default App
