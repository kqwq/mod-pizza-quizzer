import React from 'react';
import MenuBox from './MenuBox';

const MenuRef = () => {
  return (
    <div className="w-[600px] flex flex-col">
      <div className="h-24 flex items-center">
        <h2 className="text-2xl ml-6">Menu</h2>
      </div>
      <div id="grid-container" className="overflow-y-scroll h-full">
        <div className="grid grid-cols-3 gap-4 m-6 min-h-0 ">
          <MenuBox menuItem="Pizza 1" />
          <MenuBox menuItem="Pizza 1" />
          <MenuBox menuItem="Pizza 1" />
          <MenuBox menuItem="Pizza 1" />
          <MenuBox menuItem='Pizza 1' />
          <MenuBox menuItem='Pizza 1' />
          <MenuBox menuItem='Pizza 1' />
        </div>
      </div>
    </div>
  );
};

export default MenuRef;
