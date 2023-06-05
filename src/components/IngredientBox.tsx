import React from 'react'
import type { Ingredient } from '../util/makeline'

const IngBox = ({ w, i }: { w: number, i: Ingredient }) => {
  const width = (12 * w).toString() + 'px'

  return (
    <div className={
      `w-${width} bg-gray-300 flex flex-col justify-center items-center`
    }>
      <span className="text-4xl">{i}</span>
    </div>
  )
}

export default IngBox 