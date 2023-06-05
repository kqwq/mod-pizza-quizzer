import React from 'react'

const QuizContainer = () => {
  return (
    <div id="info-box">
      <div id="question ">
        How do you make a <span id="quiz-menu-item"></span>?
      </div>
      <div id="buttons">
        <button id="btn0 ">Skip</button>
        <button id="btn1">Done</button>
      </div>
      <div id="score">
        <p>Correct:</p>
        <p id="num-correct">0</p>
        /
        <p id="num-total">0</p>
      </div>
    </div>
  )
}

export default QuizContainer