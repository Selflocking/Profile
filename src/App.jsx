import './App.css'
import Footer from './Footer'
import Profile from './Profile'
import Content from './Content'

const SplitLine = () => {
  return (
    <hr
      style={{
        borderWidth: "1px 0 0 0",
        // borderColor: "rgb(48 54 61)"
        margin: "20px 0"
      }}
    />
  )
}


function App() {
  return (
    <div className="App">
      <Profile />
      <SplitLine/>
      <Content />
      <SplitLine/>
      <Footer />
    </div>
  )
}

export default App
