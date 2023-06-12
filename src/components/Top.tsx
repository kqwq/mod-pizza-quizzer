import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { MOD_PIZZA_RED } from '../util/contsants'

const Top = () => {
  function openInfoModal() {
    alert("This is a quizzer for Mod Pizza's menu. It is not affiliated with Mod Pizza in any way.")
  }


  return (
    <div className={`h-32 w-full flex items-center justify-between bg-orange-400`}>

      <h1 className="text-3xl ml-12 font-light hover:underline hover:decoration-dotted hover:cursor-pointer">Mod Pizza Quizzer</h1>
      <div id="information" className="mr-12 space-x-6">
        {/* Info icon "i" symbol */}

        <FontAwesomeIcon className='hover:cursor-pointer' onClick={openInfoModal} color="#333" size="xl" icon={faCircleInfo} />
        {/* GitHub icon */}
        <a href='https://github.com/kqwq/mod-pizza-quizzer' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon color="#333" size="xl" icon={faGithub} />
        </a>

      </div>
    </div>
  )
}

export default Top