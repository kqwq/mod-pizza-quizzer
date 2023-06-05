import React from 'react'
import { Greens } from '../util/makeline'
import IngBox from './IngredientBox'

const MakelineRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row h-20">
      {children}
    </div>
  )
}

const Makeline = () => {
  return (
    <div className="overflow-x-scroll">
      <MakelineRow>
        <IngBox w={1} i={Greens.romaine} />
      </MakelineRow>
      <MakelineRow>

      </MakelineRow>
      <MakelineRow>

      </MakelineRow>
    </div>
  )
}

export default Makeline