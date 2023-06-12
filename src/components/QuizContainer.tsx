import React, { useContext } from 'react'
import { menuItemFriendlyNameOf } from '../util/makeline';
import { StateContext } from '../util/Provider';

const QuizContainer = () => {
  const { selectedIngredients, initMenuItemsQuiz, score, submitQuiz, stopQuiz, numMenuItemsCompleted, quizOrderMenuItems, started } = useContext(StateContext)

  const currentMenuItem = quizOrderMenuItems.at(numMenuItemsCompleted) ?? "none";
  const friendlyNameMenuItem = menuItemFriendlyNameOf(currentMenuItem)
  const selectedText = selectedIngredients.length ? `Selected ${selectedIngredients.join(", ")}.` : `No ingredients selected.`;



  return (
    <div id="quiz-container" className="text-lg flex flex-col justify-center space-y-6 items-center w-full min-h-[170px]">
      {
        started ? <>
          <div id="prompt ">
            How do you make a <span id="quiz-menu-item">{friendlyNameMenuItem}</span>?
          </div>
          <div id="selected">{selectedText}</div>
          <div id="feedback" className="flex flex-row justify-between items-center space-x-4">
            <button id="btn0" className="bg-orange-500 rounded-md p-2 text-white" onClick={stopQuiz}>Quit</button>
            <button id="btn1" className="bg-green-600 rounded-md p-2 text-white" onClick={submitQuiz}>Done</button>
            <div id="score">
              <span id="num-correct">{score}</span>
              &nbsp;out of&nbsp;
              <span id="num-total">{numMenuItemsCompleted}</span>
              &nbsp;correct
            </div>
          </div>
        </> : <>
          <div id="prompt">Click "Start Quiz" to begin.</div>
          <div className="flex flex-row justify-between items-center space-x-4">
            <button id="btn0" className="bg-blue-600 rounded-md p-2 text-white" onClick={initMenuItemsQuiz}>Show instructions</button>
            <button id="btn0" className="bg-green-600 rounded-md p-2 text-white" onClick={initMenuItemsQuiz}>Start Quiz</button>
          </div>


        </>
      }


    </div>
  )
}

export default QuizContainer