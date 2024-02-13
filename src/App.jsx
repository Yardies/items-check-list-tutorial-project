import { useState } from 'react'
import { Form } from './Form'
import { nanoid } from 'nanoid'
import Items from './Items'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const setLocalStorage = (array) => {
    localStorage.setItem(`list`, JSON.stringify(array))
  }
  const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

  const [items, setItems] = useState(defaultList)

  const addItem = (itemName) => {
    const newItem = { name: itemName, completed: false, id: nanoid() }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)

    toast(`item is added`)
  }

  const removeItem = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <div className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} toast={toast} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </div>
  )
}

export default App
