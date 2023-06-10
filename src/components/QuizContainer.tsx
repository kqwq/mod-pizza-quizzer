import React, { useContext } from 'react'
import { StateContext } from '../util/Provider';

const QuizContainer = () => {
  const { selectedIngredients } = useContext(StateContext)

  return (
    <div id="quiz-container" className="text-lg flex flex-col justify-center space-y-6 items-center w-full">
      <div id="prompt ">
        How do you make a <span id="quiz-menu-item"></span>?
      </div>
      <div id="selected">Selected: <span id="selected-lsit">{selectedIngredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}</span>.</div>
      <div id="feedback" className="flex flex-row justify-between items-center space-x-4">
        <button id="btn0 ">Skip</button>
        <button id="btn1">Done</button>
        <div id="score">
          <span id="num-correct">0</span>
          &nbsp;out of&nbsp;
          <span id="num-total">0</span>
          &nbsp;correct
        </div>
      </div>

    </div>
  )
}

export default QuizContainer