import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import AboutPage from './pages/AboutPage'
import AddItemPage from './pages/AddItemPAge'
import kanban from './data/kanban.json'
import { useState } from 'react'

function App() {

  const [list, setList] = useState(kanban)

  const toDo = list.filter((item) => {
    return item.status === 'To Do'
  })

  const inProgress = list.filter((item) => {
    return item.status === 'In Progress'
  })

  const done = list.filter((item) => {
    return item.status === 'Done'
  })

  const deleteItem = (itemId) => {
    setList(list.filter((item) => {
      return item.id !== itemId
    }))
  }

  const createItem = (newListDetails) => {

    const listIds = list.map((item) => Number(item.id));

    const maxId = Math.max(...listIds);
    const nextId = (maxId + 1).toString()

    const neList = {
      ...newListDetails,
      id: nextId,
    }

    const newList = [neList, ...list]

    setList(newList)
  }

  const updateItem = (updatedItemDetails) => {
    const updatedList = list.map((item) => {
      return item.id === updatedItemDetails.id 
      ? updatedItemDetails 
      : item;
    });

    setList(updatedList);
  };

  return (
    <div id='all-container'>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path='/'
          element={
            <DashboardPage
              toDo={toDo}
              inProgress={inProgress}
              done={done}
              onDelete={deleteItem}
              onCreate={createItem}
            />
          }
        />
        <Route path='/item/:itemId' element={<ItemDetailsPage list={list} onUpdate={updateItem}/>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/create' element={<AddItemPage onCreate={createItem} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
