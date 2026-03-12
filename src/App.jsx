import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import AboutPAge from './pages/AboutPage'

function App() {

  return (
    <div id='all-container'>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/item/:itemId' element={<ItemDetailsPage />}/>
        <Route path='/about' element={<AboutPAge />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
