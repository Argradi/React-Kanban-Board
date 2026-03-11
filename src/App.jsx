import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import List from './components/List/List'

function App() {

  return (
    <div id='all-container'>
      <Navbar />
      <Sidebar />
      <List />
      <Footer />
    </div>
  )
}

export default App
