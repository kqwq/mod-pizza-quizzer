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
    <main className="">
      <Top />
      <Makeline />
      <div id="bottom" className="flex flex-row justify-around">
        <MenuRef />
        <QuizContainer />
      </div>
    </main>
  )
}

export default MainLayout