import React, { useContext, useState } from 'react'
import { menuItemFriendlyNameOf, menuItemImageSourceOf, menuItems as menuItemsList } from '../util/makeline'
import { StateContext } from '../util/Provider'

const MenuBox = ({
  menuItem
}: {
  menuItem: string
}) => {
  const { correctMenuItems, incorrectMenuItems } = useContext(StateContext)
  const isCorrect = correctMenuItems.includes(menuItem)
  const isIncorrect = incorrectMenuItems.includes(menuItem)
  const ingredients = menuItemsList[menuItem as keyof typeof menuItemsList]
  const friendlyName = menuItemFriendlyNameOf(menuItem)
  const imgSrc = menuItemImageSourceOf(menuItem)
  const [isHovered, setIsHovered] = useState(false)


  return (
    <>
      <div className="relative h-36 bg-white flex justify-center items-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {
          // A tooltip (black rounded box) with white text that has a bullet list of ingredients for the menu item that follows the mouse cursor
          isHovered && <div className="absolute bg-black rounded-md text-white p-2 max-h-full overflow-y-auto select-none">
            <div className="text-center">
              {friendlyName}
            </div>
            <ul className="list-disc ml-4">
              {
                ingredients.map((ingredient) => (
                  <li className={`text-xs " ${ingredient.startsWith("XPO") ? " italic text-gray-500" : ""}`} key={ingredient}>{ingredient}</li>
                ))
              }
            </ul>
          </div>
        }
        <div className="flex flex-col justify-center items-center">
          <img src={imgSrc} alt={friendlyName} className="h-24 w-24" />
          <div className="text-center px-1">
            {friendlyName}
          </div>
        </div>
      </div>

    </>
  )
}

export default MenuBox