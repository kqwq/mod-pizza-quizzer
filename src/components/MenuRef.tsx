import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { menuItemNames } from '../util/makeline';
import MenuBox from './MenuBox';
import OutsideClickHandler from 'react-outside-click-handler';
import { StateContext } from '../util/Provider';


const MenuRef = () => {
  const { setMenuItemSelected } = useContext(StateContext)
  const [show, setShow] = useState(true);

  return (

    show ? (<div className="flex md:w-[800px] flex-col">
      <div className="mt-4 md:mt-auto md:h-20 flex items-center">
        <h2 className="text-xl md:text-2xl ml-6">Menu reference</h2>
        {/* Blue text that says "hide" */}
        <div className="ml-auto mr-6 md:mr-12 text-blue-500 hover:underline hover:cursor-pointer"
          onClick={() => setShow(false)}
        >Hide</div>

      </div>
      <div id="grid-container" className="overflow-y-scroll h-full">
        <OutsideClickHandler onOutsideClick={() => setMenuItemSelected("none")}>
          <div className="inline-grid grid-flow-col md:grid-flow-row md:grid-cols-3 gap-1 mx-4 min-h-0 bg-gray-400 border-gray-400 border-4">

            {
              menuItemNames.map((menuItem) => (
                <MenuBox key={menuItem} menuItem={menuItem} />
              ))
            }
          </div>
        </OutsideClickHandler>
      </div>
    </div>) : <div>
      <div className='absolute w-40 h-16 flex justify-center items-center'>

        <span className=" text-blue-500 hover:underline hover:cursor-pointer"
          onClick={() => setShow(true)}
        >Show menu</span>
      </div>
    </div>
  )


};

export default MenuRef;
