import React from 'react';
import { menuItemNames } from '../util/makeline';
import MenuBox from './MenuBox';

const MenuRef = () => {
  return (
    <div className="w-[800px] flex flex-col">
      <div className="h-20 flex items-center">
        <h2 className="text-2xl ml-6">Menu reference</h2>
      </div>
      <div id="grid-container" className="overflow-y-scroll h-full">
        <div className="inline-grid grid-cols-3 gap-1 mx-4 min-h-0 bg-gray-400 border-gray-400 border-4">
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
