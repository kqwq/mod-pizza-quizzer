import React, { useContext } from 'react'
import { menuItemFriendlyNameOf } from '../util/makeline';
import { StateContext } from '../util/Provider';

const QuizContainer = () => {
  const { selectedIngredients, initMenuItemsQuiz, score, submitQuiz, stopQuiz, numMenuItemsCompleted, quizOrderMenuItems, started } = useContext(StateContext)

  const currentMenuItem = quizOrderMenuItems.at(numMenuItemsCompleted) ?? "none";
  const friendlyNameMenuItem = menuItemFriendlyNameOf(currentMenuItem)
  const selectedText = selectedIngredients.length ? `Selected ${selectedIngredients.join(", ")}.` : `No ingredients selected.`;



  return (
    <div id="quiz-container" className="text-lg flex flex-col justify-center space-y-6 items-center w-full h-full">
      {
        started ? <>
          <div id="prompt " className='text-xl text-gray-600'>
            Make a <span id="quiz-menu-item" className="underline">{friendlyNameMenuItem}</span>
          </div>
          <div id="selected" className="text-sm">{selectedText}</div>
          <div id="feedback" className="flex flex-row justify-between items-center space-x-4">
            {/* <button id="btn1" className="bg-green-600 rounded-md p-2 text-white" onClick={submitQuiz}>Done</button> */}
            <div id="score">
              <span id="num-correct">{score}</span>
              &nbsp;/&nbsp;
              <span id="num-total">{numMenuItemsCompleted}</span>
              &nbsp;correct
            </div>
            <button id="btn0" className="bg-gray-500 text-sm rounded-md p-2 text-white" onClick={() => {
              const confirm = window.confirm("Are you sure you want to quit? Your progress will be lost.")
              if (confirm) {
                stopQuiz()
              }

            }}>Quit</button>

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