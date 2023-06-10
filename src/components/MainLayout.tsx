import React, { useEffect } from 'react'
import Makeline from './Makeline'
import MenuRef from './MenuRef'
import QuizContainer from './QuizContainer'
import Top from './Top'

const MainLayout = () => {


  return (
    <main className="h-screen flex flex-col"  >
      <div className=''>
        <Top />
        <Makeline />
      </div>
      <div id="bottom" className="flex flex-row min-h-0 flex-grow-[1]">
        <MenuRef />
        <QuizContainer />
      </div>
    </main>
  )
}

export default MainLayout