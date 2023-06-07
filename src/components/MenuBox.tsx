import React from 'react'

const MenuBox = ({
  menuItem
}: {
  menuItem: string
}) => {
  return (
    <div className="h-36 bg-gray-300 rounded-md flex justify-center items-center">
      <span className="text-sm">{menuItem}</span>
    </div>
  )
}

export default MenuBox