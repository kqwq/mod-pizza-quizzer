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
      <div id="bottom" className="h-full flex flex-col md:flex-row md:min-h-0 md:flex-grow-[1]">
        <MenuRef />
        <QuizContainer />
      </div>
    </main>
  )
}

export default MainLayout