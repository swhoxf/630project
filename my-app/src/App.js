import './App.css'
import CharacterSelectWindow from './CharacterSelectWindow'
import InventoryWindow from './InventoryWindow'
import CharacterWindow from './CharacterWindow'
import React, { useState } from 'react'

const emptyItem = {
  'name': '',
  'src': '#',
  'alt': ''
}

const testTop = {
  'name': 'Epic Shirt',
  'src': 'https://www.nicepng.com/png/detail/9-98580_shirt-clipart-transparent-background-kids-t-shirt-clip.png',
  'alt': 'Epic Shirt'
}

const testBottom = {
  'name': 'Epic Pants',
  'src': 'https://www.nicepng.com/png/detail/9-98580_shirt-clipart-transparent-background-kids-t-shirt-clip.png', 
  'alt': 'Epic Pants'
}

const testInventory = {
  'Epic Shirt': testTop,
  'Epic Pants': testBottom
}

function App() {
  // state of which mian window components ('larval' | 'shoppe') are rendered
  const [mainWindow, setMainWindow] = useState('larval')
  // state of the user's equipped items
  const [equippedTop, setEquippedTop] = useState({'name': '', 'src':'#', 'alt':'top'})
  const [equippedBottom, setEquippedBottom] = useState({'name': '', 'src':'#', 'alt':'bottom'})
  // const [equippedHat, setEquippedHat] = useState({})
  // const [equippedAccessory, setEquippedAccessory] = useState({})
  // const [equippedShoes, setEquippedShoes] = useState({})
  // const [equippedGloves, setEquippedGloves] = useState({})
  // const [equippedScarf, setEquippedScarf] = useState({})

  // pass this function to the inventory window
  // handles when the user clicks the equip/unequip button for an item
  function handleEquipButton(event) {
    // have the button equip the top associated with the item in the same item class as it
    const button = event.target
    const itemParent = button.parentElement
    const itemGParent = itemParent.parentElement
    const itemDesc = itemGParent.lastChild
    const itemName = itemDesc.firstChild.textContent
    const topToEquip = testInventory[itemName]
    // button toggles between equip and unequip
    if (itemName !== equippedTop.name) {
      setEquippedTop(topToEquip) 
      button.textContent = 'Unequip'
    } else {
      setEquippedTop(emptyItem)
      button.textContent = 'Equip'
    }
    console.log('button clicked')
    // setEquippedBottom(testBottom)
  }

  // pass this function to the larval window, 
  // clicking shopping button brings user to inventory window
  function handleShoppingButton(event) {
    event.preventDefault()
    setMainWindow('shoppe')
  }

  // pass this function to the inventory window to pass to the menu,
  // clicking on the link to the larval stage in the menu options 
  // swaps out the inventory window for the character select window
  function handleLarvalButton() {
    setMainWindow('larval')
  }

  return (
    <div className="App">
      {/* display the initial window for character selection */}
      { mainWindow === 'larval' && <CharacterSelectWindow handleShoppingButton={ handleShoppingButton } /> }
      
      {/* display the window with the inventory */}
      { mainWindow === 'shoppe' && <InventoryWindow  
        props={ {'top': equippedTop, 'bottom': equippedBottom} } // should contain all of the item slots
        handleEquipButton={ handleEquipButton } 
        handleLarvalButton={ handleLarvalButton }
      /> }
      
      {/* display the character window at all times */}
      <CharacterWindow props={ {'top': equippedTop, 'bottom': equippedBottom} } /> {/*should contain all of the item slots*/}
    </div>
  );
}

export default App;
