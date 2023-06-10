import React, { useContext, useState } from 'react'
import { MAKELINE_BOX_HEIGHT, MAKELINE_BOX_WIDTH, MAKELINE_BOX_MARGIN } from '../util/contsants'
import type { Ingredient } from '../util/makeline'
import { StateContext } from '../util/Provider'

const IngBox = ({ x, y, i, w = 1, h = 1, round = false }: { x: number, y: number, i: Ingredient | "spacer" | "sauces", w?: number, h?: number, round?: boolean }) => {
  const marginRatio = MAKELINE_BOX_MARGIN;
  const width = MAKELINE_BOX_WIDTH * (w - marginRatio * 2)
  const height = MAKELINE_BOX_HEIGHT * (h - marginRatio * 2)
  const xPos = MAKELINE_BOX_WIDTH * (x + marginRatio)
  const yPos = MAKELINE_BOX_HEIGHT * (y + marginRatio)
  const { toggleIngredient, selectedIngredients } = useContext(StateContext);
  const color = selectedIngredients.includes(i as Ingredient) ? "bg-green-400 hover:bg-green-500" : "bg-gray-300 hover:bg-slate-400"
  const roundStyle = round ? "rounded-full" : "rounded-md"

  function underscoreCase(txt: string): string {
    // remove non-alphanumeric characters
    txt = txt.replace(/[^a-zA-Z0-9 ]/g, "");
    const words = txt.split(" ");
    return words.join("_").toLowerCase();
  }
  const imgSrc = `/assets/topping/${underscoreCase(i as string)}.webp`

  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div
      onClick={
        () => {
          if (i !== "spacer" && i !== "sauces") {
            toggleIngredient(i)
          }
        }
      }
      onMouseOver={() => setTooltipVisible(true)}
      onMouseOut={() => setTooltipVisible(false)}
      className={
        `w-[${width}px] h-[${height}px] ${color} top-[${yPos}px] left-[${xPos}px] ${roundStyle} absolute flex justify-center items-center cursor-pointer select-none`
      }>
      {/* <span className="text-sm">{i}</span> */}
      <img className={`max-w-[85%] max-h-[85%] ${roundStyle}`} src={imgSrc} alt={i as string} />
      <div id={`${i}-tooltip`} role="tooltip" className={`absolute z-10 pointer-events-none inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700 transition-opacity duration-50 ${tooltipVisible ? 'opacity-100' : 'opacity-0'} translate-y-[-100%] -translate-x-1/2 top-0 left-1/2`}>
        {i}
        <div className="tooltip-arrow " data-popper-arrow></div>
      </div>
    </div>
  )
}

export default IngBox 