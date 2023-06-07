import React, { useEffect } from 'react'
import { putMakeline } from '../util/injectHtml'
import Makeline from './Makeline'
import MenuRef from './MenuRef'
import QuizContainer from './QuizContainer'
import Top from './Top'

const MainLayout = () => {

  useEffect(() => {
    // putMakeline()
  }, [])

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