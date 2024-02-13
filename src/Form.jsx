import { useState } from 'react'

export const Form = ({ addItem, toast }) => {
  const [newItem, setNewItem] = useState(``)
  const handleSubmit = (e) => {
    e.preventDefault()
    newItem ? addItem(newItem) : toast(`no item added`)
    setNewItem(``)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value)
          }}
        />
        <button className="btn" type="submit">
          add
        </button>
      </div>
    </form>
  )
}
