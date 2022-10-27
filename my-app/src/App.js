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
  const [equippedTop, setEquippedTop] = useState({'name': '', 'src':'#', 'alt':'top'})
  const [equippedBottom, setEquippedBottom] = useState({'name': '', 'src':'#', 'alt':'bottom'})
  // const [equippedBottom, setEquippedBottom] = useState({})
  // const [equippedHat, setEquippedHat] = useState({})
  // const [equippedAccessory, setEquippedAccessory] = useState({})
  // const [equippedShoes, setEquippedShoes] = useState({})
  // const [equippedGloves, setEquippedGloves] = useState({})
  // const [equippedScarf, setEquippedScarf] = useState({})

  function handleEquipButton(event) {
    // have the button equip the top associated with the item in the same item class as it
    const button = event.target
    const itemParent = button.parentElement
    const itemGParent = itemParent.parentElement
    const itemDesc = itemGParent.lastChild
    const itemName = itemDesc.firstChild.textContent
    const topToEquip = testInventory[itemName]

    if (itemName !== equippedTop.name) {
      setEquippedTop(topToEquip) 
      button.textContent = 'Unequip'
    } else {
      setEquippedTop(emptyItem)
      button.textContent = 'Equip'
    }
    

    // setEquippedBottom(testBottom)
  }

  return (
    <div className="App">
      {/* <CharacterSelectWindow /> */}
      
      <InventoryWindow  
        props={ {'top': equippedTop, 'bottom': equippedBottom} } // should contain all of the item slots
        handleClick={ handleEquipButton } 
      /> 
      
      <CharacterWindow props={ {'top': equippedTop, 'bottom': equippedBottom} } /> {/*should contain all of the item slots*/}
    </div>
  );
}

export default App;
