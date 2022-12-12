import './InventoryWindow.css'
import MenuWindow from './MenuWindow'
import ItemDrawer from './itemDrawer'
import React, { useState } from 'react'

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
              <div className='item'>
                <div className='itemImageContainer'>
                  <img className='itemImage' src="https://www.nicepng.com/png/detail/9-98580_shirt-clipart-transparent-background-kids-t-shirt-clip.png" alt="Shirt Clipart Transparent Background - Kids T Shirt Clip Art@nicepng.com" />
                  
                </div>
                <div className='itemDescription'>
                  <div className='itemName'>Epic Shirt</div>
                  {/* handleEquipButton is a function that changes href of item slot in CharacterWindow and toggles display between block and none; 
                      displays image of associated item in CharacterWindow */}
                  <button className='custom-btn btn-1 equip-button' onClick={ handleEquipButton }>Equip</button> 
                </div>
              </div>


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
    </>
  );
}

export default InventoryWindow;