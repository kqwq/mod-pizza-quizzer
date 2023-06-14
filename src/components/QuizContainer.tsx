import React, { useContext, useEffect, useState } from 'react'
import { menuItemFriendlyNameOf, menuItemToppingsMinusExpo } from '../util/makeline';
import { StateContext } from '../util/Provider';

const titles = {
  hidden: "",
  instructions: "Instructions",
  wrong: "Incorrect",
  complete: "Quiz Complete"
}
const paragraphs = {
  hidden: () => [],
  instructions: () => [

    "Click on the toppings you think are on the menu item.",
    "When you are done, click the large \"Finish\" box on the makeline.",
    "You will get a point for each correct answer.",
    "There is no time limit.",
    "Click \"Start Quiz\" to begin."
  ],
  wrong: (stateContext: any) => [
    "Not quite!",
    `The correct toppings for ${menuItemFriendlyNameOf(stateContext.quizOrderMenuItems[stateContext.numMenuItemsCompleted - 1])} are:`,
    menuItemToppingsMinusExpo(stateContext.quizOrderMenuItems[stateContext.numMenuItemsCompleted - 1]).join(", ") + ".",
    "---",
    `You selected:`,
    `${stateContext.wrongIngredients.join(", ")}.`

  ],
  complete: (stateContext: any) => [
    `You got ${stateContext.score} out of ${stateContext.quizOrderMenuItems.length} correct!`,
    "Click \"Start Quiz\" to try again."
  ]
}


const QuizContainer = () => {
  const stateContext = useContext(StateContext)
  const { selectedIngredients, initMenuItemsQuiz, score, wrongIngredients, stopQuiz, numMenuItemsCompleted, quizOrderMenuItems, started } = stateContext

  const currentMenuItem = quizOrderMenuItems.at(numMenuItemsCompleted) ?? "none";
  const friendlyNameMenuItem = menuItemFriendlyNameOf(currentMenuItem)
  const selectedText = selectedIngredients.length ? `Selected ${selectedIngredients.join(", ")}.` : `No ingredients selected.`;

  // There are 3 types of modals: instructions, wrong answer, and quiz complete
  const [modal, setModal] = useState<"hidden" | "instructions" | "wrong" | "complete">("hidden");

  useEffect(() => {
    if (numMenuItemsCompleted >= quizOrderMenuItems.length && numMenuItemsCompleted > 0 && wrongIngredients.length === 0) {
      setModal("complete")
    }
  }, [numMenuItemsCompleted, quizOrderMenuItems, wrongIngredients])

  // Wrong ingredients
  useEffect(() => {
    if (wrongIngredients.length) {
      setModal("wrong")
    }
  }, [wrongIngredients])

  const hideModal = () => {
    if (modal === "wrong") {
      if (numMenuItemsCompleted >= quizOrderMenuItems.length) {
        setModal("complete")
      } else {
        setModal("hidden")
      }
    } else {
      setModal("hidden")
    }
  }

  return (
    <>
      <div id="quiz-container" className="p-2 text-lg flex flex-col justify-center space-y-6 items-center w-full h-full">
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
              <button id="btn0" className="bg-blue-600 rounded-md p-2 text-white" onClick={() => setModal("instructions")}>Show instructions</button>
              <button id="btn0" className="bg-green-600 rounded-md p-2 text-white" onClick={initMenuItemsQuiz}>Start Quiz</button>
            </div>


          </>
        }


      </div>
      <div id="modal" className={`fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center ${modal === "hidden" ? "hidden" : ""}`}>
        <div id="modal-content" className="bg-white p-4 rounded-md m-2 w-full md:w-1/2 flex flex-col space-y-2">
          <div id="modal-header" className="flex flex-row justify-between items-center">
            <div id="modal-title" className="text-xl font-bold">{titles[modal]}</div>
            <button id="modal-close" onClick={hideModal}>X</button>
          </div>
          <hr />
          <div id="modal-body" className="text-sm">
            {paragraphs[modal](stateContext).map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </div>
          <hr />
          <div id="modal-footer">
            <button id="modal-close" onClick={hideModal} className="bg-gray-500 rounded-md p-2 text-sm text-white">Close</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuizContainer