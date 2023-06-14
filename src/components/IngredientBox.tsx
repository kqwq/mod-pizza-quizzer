import React, { useContext, useState } from 'react'
import { MAKELINE_BOX_HEIGHT, MAKELINE_BOX_WIDTH, MAKELINE_BOX_MARGIN } from '../util/contsants'
import type { Ingredient } from '../util/makeline'
import { StateContext } from '../util/Provider'

const IngBox = ({ x, y, i, w = 1, h = 1, round = false }: { x: number, y: number, i: Ingredient | "spacer" | "finish", w?: number, h?: number, round?: boolean }) => {
  const marginRatio = MAKELINE_BOX_MARGIN;
  const width = MAKELINE_BOX_WIDTH * (w - marginRatio * 2)
  const height = MAKELINE_BOX_HEIGHT * (h - marginRatio * 2)
  const xPos = MAKELINE_BOX_WIDTH * (x + marginRatio)
  const yPos = MAKELINE_BOX_HEIGHT * (y + marginRatio)
  const { toggleIngredient, selectedIngredients, started } = useContext(StateContext);
  const clickable = i !== "spacer" ? "cursor-pointer" : ""
  let colors;
  if (i === "spacer") {
    colors = "bg-gray-300 "
  } else {
    colors = selectedIngredients.includes(i as Ingredient) ? "bg-green-400 hover:bg-green-500" : "bg-gray-300 hover:bg-slate-400"
  }
  const roundStyle = round ? "rounded-full" : "rounded-md"
  const showImage = i !== "spacer" && i !== "finish"
  const { submitQuiz } = useContext(StateContext)

  function underscoreCase(txt: string): string {
    // remove non-alphanumeric characters
    txt = txt.replace(/[^a-zA-Z0-9 ]/g, "");
    const words = txt.split(" ");
    return words.join("_").toLowerCase();
  }
  const imgSrc = `/assets/topping/${underscoreCase(i as string)}.webp`

  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <>
      <div
        // title={i as string}
        onClick={
          () => {
            if (i === "spacer") {
              // do nothing
            } else if (i === "finish") {
              // finish pizza
              if (started) {
                submitQuiz();
              } else {
                alert("You must start the quiz first!")
              }
            } else {
              toggleIngredient(i)
            }
          }
        }
        onMouseOver={() => clickable && setTooltipVisible(true)}
        onMouseOut={() => setTooltipVisible(false)}
        className={
          `w-[${width}px] h-[${height}px] ${clickable} ${colors} top-[${yPos}px] left-[${xPos}px] ${roundStyle} absolute flex justify-center items-center select-none`
        }>
        {
          showImage ? <img className={` max-w-[85%] max-h-[85%] ${roundStyle}`} src={imgSrc} alt={i as string} /> : (i === "finish" ? <div className="p-4 text-xl font-bold text-white text-center">Click to Finish</div> : "")

        }
        <span className={`absolute bottom-0 right-0 ${tooltipVisible ? "block" : "hidden"} bg-black text-white text-xs p-1 rounded-md pointer-events-none`}>
          {i}
        </span>


      </div>
    </>
  )
}

export default IngBox 