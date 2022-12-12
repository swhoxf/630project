import './InventoryWindow.css'
import MenuWindow from './MenuWindow'
import ItemDrawer from './itemDrawer'
import Item from './Item'
import React, { useState } from 'react'
import Inventory from './assets/inventory.json'

function InventoryWindow({ handleEquipButton, handleLarvalButton }) {

  // boolean; true: menu/drawer display block | false: menu/drawer display none
  const [displayMenu, setDisplayMenu] = useState(false)
  const [displayDrawer, setDisplayDrawer] = useState(false)
  
  // state of which item is being displayed in the item drawer
  const [selectedItem, setSelectedItem] = useState({})

  // toggles boolean corresponding to menuWindow display between block and none
  function handleMenuButton(event) {
    setDisplayMenu(!displayMenu)
  }

  // toggles boolean corresponding to menuWindow display between block and none
  function handleDrawerButton(event) {
    setDisplayDrawer(!displayDrawer)
    const element = event.target
    const elemClass = element.classList[0]
    console.log('elemClass', elemClass)
    if (elemClass === "itemName") {
      const itemIndex = Object.keys(Inventory).find(index => Inventory[index].invName === element.textContent)
      if (selectedItem.invName !== Inventory[itemIndex]) setDisplayDrawer(true)
      setSelectedItem(Inventory[itemIndex])
    } else if (elemClass === "itemImageContainer") {
      const elemItem = element.parentElement
      const elemDescrip = elemItem.lastChild
      const elemName = elemDescrip.firstChild
      const itemIndex = Object.keys(Inventory).find(index => Inventory[index].invName === elemName.textContent)
      if (selectedItem.invName !== Inventory[itemIndex]) setDisplayDrawer(true)
      setSelectedItem(Inventory[itemIndex])
    } else if (elemClass === "itemImage") {
      const elemItem = element.parentElement.parentElement
      const elemDescrip = elemItem.lastChild
      const elemName = elemDescrip.firstChild
      const itemIndex = Object.keys(Inventory).find(index => Inventory[index].invName === elemName.textContent)
      console.log('selectedItem', itemIndex)
      if (selectedItem.invName !== Inventory[itemIndex]) setDisplayDrawer(true)
      setSelectedItem(Inventory[itemIndex])
    }
  }

  return (
    <>
      <div className='inventoryWindow'>
        <div className='inventoryWindowContainer'>
          <div className='header'>
            <h1>Ye Olde Shoppe</h1>
            {/* handleMenuButton toggles a bool that corresponds to display of menuWindow */}
            <button className='custom-btn btn-1 menuButton' onClick={ handleMenuButton }>=</button>
          </div>
          <div className='galleryContainer'>
            <div className='gallery'>

              { Object.keys(Inventory).map(item => { 
                return <Item itemInfo={ Inventory[item] } 
                  handleEquipButton={ handleEquipButton }
                  handleDrawerButton={ handleDrawerButton } /> 
                }) } 
              

            </div>
            
          </div>
          
        </div>

        
      </div>
      {/* handleMenuButton is a function that toggles a bool that corresponds to display of menuWindow 
          displayMenu is the bool that corresponds to the display of menuWindow
          handleLarvalButton is a function that changes the state of the main window to 'larval' (switches main window component to CharacterSelectionWindow component) */}
      
      <MenuWindow props={displayMenu} handleMenuButton={ handleMenuButton } handleLarvalButton={ handleLarvalButton } />

      {/* handleDrawerButton is a function that toggles a bool that corresponds to display of ItemDrawer 
          displayDrawer is the bool that corresponds to the display of ItemDrawer
          handleLarvalButton is a function that changes the state of the main window to 'larval' (switches main window component to CharacterSelectionWindow component) */}
      <ItemDrawer props={{'displayDrawer': displayDrawer, 'selectedItem': selectedItem} }handleDrawerButton={ handleDrawerButton } />
      
    </>
  );
}

export default InventoryWindow;