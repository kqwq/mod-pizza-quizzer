import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { menuItemNames } from '../util/makeline';
import MenuBox from './MenuBox';

const MenuRef = () => {
  return (
    <div className="flex md:w-[800px] flex-col">
      <div className="mt-4 md:mt-auto md:h-20 flex items-center">
        <h2 className="text-xl md:text-2xl ml-6">Menu reference</h2>
        <FontAwesomeIcon icon="times" />
      </div>
      <div id="grid-container" className="overflow-y-scroll h-full">
        <div className="inline-grid grid-flow-col md:grid-flow-row md:grid-cols-3 gap-1 mx-4 min-h-0 bg-gray-400 border-gray-400 border-4">
          {
            menuItemNames.map((menuItem) => (
              <MenuBox key={menuItem} menuItem={menuItem} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default MenuRef;
