import React, { useContext } from 'react'
import { MAKELINE_BOX_HEIGHT, MAKELINE_BOX_WIDTH } from '../util/contsants'
import type { Ingredient } from '../util/makeline'
import { IngredientsContext } from '../util/Provider'

const IngBox = ({ x, y, i, w = 1, h = 1 }: { x: number, y: number, i: Ingredient | "spacer" | "sauces", w?: number, h?: number }) => {
  const width = (MAKELINE_BOX_WIDTH * w)
  const height = (MAKELINE_BOX_HEIGHT * h)
  const xPos = (MAKELINE_BOX_WIDTH * x)
  const yPos = (MAKELINE_BOX_HEIGHT * y)
  const { toggleIngredient } = useContext(IngredientsContext);

  return (
    <div
      onClick={
        () => {
          if (i !== "spacer" && i !== "sauces") {
            toggleIngredient(i)
          }
        }
      }
      className={
        `w-[${width}px] h-[${height}px] bg-gray-300 top-[${yPos}px] left-[${xPos}px] absolute flex justify-center items-center`
      }>
      <span className="text-sm">{i}</span>
    </div>
  )
}

export default IngBox 