import { useState } from 'react'
import { SingleItem } from './singleItem'

const Items = ({ items, removeItem, editItem }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div className="items" key={item.id}>
            <SingleItem
              item={item}
              removeItem={removeItem}
              editItem={editItem}
            />
          </div>
        )
      })}
    </>
  )
}
export default Items
