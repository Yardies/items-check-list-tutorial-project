import { useState } from 'react'
export const SingleItem = ({ item, removeItem, editItem }) => {
  const { name, completed, id } = item
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: `capitalize`,
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => {
          removeItem(id)
        }}
      >
        delete
      </button>
    </div>
  )
}
