import React, { useContext } from 'react'
import { menuItemFriendlyNameOf } from '../util/makeline'
import { StateContext } from '../util/Provider'

const MenuBox = ({
  menuItem
}: {
  menuItem: string
}) => {
  const { correctMenuItems, incorrectMenuItems } = useContext(StateContext)
  const isCorrect = correctMenuItems.includes(menuItem)
  const isIncorrect = incorrectMenuItems.includes(menuItem)
  const friendlyName = menuItemFriendlyNameOf(menuItem)

  return (
    <div className="h-36 bg-gray-300 rounded-md flex justify-center items-center">
      <span className="text-sm">{friendlyName}</span>
      {
        isCorrect && <span className="text-sm">✅</span>
      }
      {
        isIncorrect && <span className="text-sm">❌</span>
      }
    </div>
  )
}

export default MenuBox