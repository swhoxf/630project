import './InventoryWindow.css'
import MenuWindow from './MenuWindow'
import ItemDrawer from './itemDrawer'
import Item from './Item'
import Foo from './Foo'
import React, { useState } from 'react'
import Inventory from './assets/inventory.json'

function InventoryWindow({ handleEquipButton, handleLarvalButton }) {

  // boolean; true: menu/drawer display block | false: menu/drawer display none
  const [displayMenu, setDisplayMenu] = useState(false)
  const [displayDrawer, setDisplayDrawer] = useState(false)

  // toggles boolean corresponding to menuWindow display between block and none
  function handleMenuButton(event) {
    setDisplayMenu(!displayMenu)
  }

  // toggles boolean corresponding to menuWindow display between block and none
  function handleDrawerButton(event) {
    setDisplayDrawer(!displayDrawer)
  }

  return (
    <>
      <div className='inventoryWindow'>
        <div className='inventoryWindowContainer'>
          <div className='header'>
            <h1>Ye Olde Shoppe</h1>
            {/* handleMenuButton toggles a bool that corresponds to display of menuWindow */}
            <button className='custom-btn btn-1 menuButton' onClick={ handleMenuButton }>=</button>
            <button classname='custom-btn btn-1 drawerButton' onClick={ handleDrawerButton }>==</button>
          </div>
          <div className='galleryContainer'>
            <div className='gallery'>

              { Object.keys(Inventory).map(item => { return <Item itemInfo={ Inventory[item] } handleEquipButton={ handleEquipButton } /> }) } 
              

            </div>
            
          </div>
          
        </div>

        
        <button className='custom-btn btn-1 minimizeButton'>&#8249;</button>
      </div>
      {/* handleMenuButton is a function that toggles a bool that corresponds to display of menuWindow 
          displayMenu is the bool that corresponds to the display of menuWindow
          handleLarvalButton is a function that changes the state of the main window to 'larval' (switches main window component to CharacterSelectionWindow component) */}
      
      <MenuWindow props={displayMenu} handleMenuButton={ handleMenuButton } handleLarvalButton={ handleLarvalButton } handleDrawerButton={ handleDrawerButton }/>

      {/* handleDrawerButton is a function that toggles a bool that corresponds to display of ItemDrawer 
          displayDrawer is the bool that corresponds to the display of ItemDrawer
          handleLarvalButton is a function that changes the state of the main window to 'larval' (switches main window component to CharacterSelectionWindow component) */}
      <ItemDrawer props={displayDrawer} handleDrawerButton={ handleDrawerButton } handleLarvalButton={ handleLarvalButton } />
      
      <Foo />
    </>
  );
}

export default InventoryWindow;