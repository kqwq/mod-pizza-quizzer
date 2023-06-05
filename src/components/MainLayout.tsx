import React from 'react'

const MainLayout = () => {
  return (
    <main className="flex flex-col space-y-10">
      <h1 className="text-2xl">Mod Pizza Quizzer</h1>
      <div id="makeline">Makeline</div>
      <div id="bottom" className="flex flex-row justify-around">
        <div id="menu">Menu refa</div>
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
      </div>
    </main>
  )
}

export default MainLayout