import './App.css'
import CharacterSelectWindow from './CharacterSelectWindow'
import InventoryWindow from './InventoryWindow'
import CharacterWindow from './CharacterWindow'
import React, { useState } from 'react'
import Inventory from './assets/inventory.json'

const emptyItem = {
  'invName': '',
  'src': '#'
}

function App() {
  // state of which mian window components ('larval' | 'shoppe') are rendered
  const [mainWindow, setMainWindow] = useState('larval')
  // state of the user's equipped items
  const [equippedTop, setEquippedTop] = useState(emptyItem)
  const [equippedBottom, setEquippedBottom] = useState(emptyItem)
  const [equippedHead, setEquippedHead] = useState(emptyItem)
  const [equippedAccessories, setEquippedAccessories] = useState(emptyItem)
  const [equippedShoes, setEquippedShoes] = useState(emptyItem)
  const [equippedHands, setEquippedHands] = useState(emptyItem)
  // state of user's stats
  const [characterStats, setCharacterStats] = useState({})

  // pass this function to the inventory window
  // handles when the user clicks the equip/unequip button for an item
  function handleEquipButton(event) {
    // have the button equip the top associated with the item in the same item class as it
    const button = event.target
    const itemParent = button.parentElement
    const itemGParent = itemParent.parentElement
    const itemDesc = itemGParent.lastChild
    const itemName = itemDesc.firstChild.textContent // string containing item's name
    const itemToEquip = findItemObject(itemName) // item object
    console.log(itemToEquip)
    const slot = itemToEquip.equipSlot.toLowerCase()
    console.log(slot)
    console.log('itemName', itemName)
    console.log('equippedTop.invName', equippedTop.invName)
    // button toggles between equip and unequip
    if (slot === 'top') {
      if (itemName !== equippedTop.invName) {
        setEquippedTop(itemToEquip) 
        button.textContent = 'Unequip'
      } else {
        setEquippedTop(emptyItem)
        button.textContent = 'Equip'
      }
    } else if (slot === 'bottom') {
      if (itemName !== equippedBottom.invName) {
        setEquippedBottom(itemToEquip) 
        button.textContent = 'Unequip'
      } else {
        setEquippedBottom(emptyItem)
        button.textContent = 'Equip'
      }
    } else if (slot === 'head') {
      if (itemName !== equippedHead.invName) {
        setEquippedHead(itemToEquip) 
        button.textContent = 'Unequip'
      } else {
        setEquippedHead(emptyItem)
        button.textContent = 'Equip'
      }
    } else if (slot === 'feet') {
      if (itemName !== equippedShoes.invName) {
        setEquippedShoes(itemToEquip) 
        button.textContent = 'Unequip'
      } else {
        setEquippedShoes(emptyItem)
        button.textContent = 'Equip'
      }
    } else if (slot === 'hands') {
      if (itemName !== equippedHands.invName) {
        setEquippedHands(itemToEquip) 
        button.textContent = 'Unequip'
      } else {
        setEquippedHands(emptyItem)
        button.textContent = 'Equip'
      }
    } else if (slot === 'accessory') {
      if (itemName !== equippedAccessories.invName) {
        setEquippedAccessories(itemToEquip) 
        button.textContent = 'Unequip'
      } else {
        setEquippedAccessories(emptyItem)
        button.textContent = 'Equip'
      }
    }
    
  }

  // takes string containing inventory name of item, returns json object of item with that name
  function findItemObject(itemName) {
    const item = Object.keys(Inventory).find(index => {
      return Inventory[index].invName === itemName
    })
    return Inventory[item]
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

  function initCharStats(finalStats) {
    setCharacterStats({
      'strength': finalStats[0],
      'dexterity': finalStats[1], 
      'constitution': finalStats[2], 
      'intelligence': finalStats[3], 
      'wisdom': finalStats[4], 
      'charisma': finalStats[5],
      'audacity': finalStats[6]
    })
  }

  function handleCharStatChange(item) {
    
  }

  return (
    <div className="App">
      {/* display the initial window for character selection */}
      { mainWindow === 'larval' && <CharacterSelectWindow handleShoppingButton={ handleShoppingButton } handleCharStats = { initCharStats }/> }
      
      {/* display the window with the inventory */}
      { mainWindow === 'shoppe' && <InventoryWindow  
        props={ {'top': equippedTop, 'bottom': equippedBottom} } // should contain all of the item slots
        handleEquipButton={ handleEquipButton } 
        handleLarvalButton={ handleLarvalButton }
      /> }
      
      {/* display the character window at all times */}
      <CharacterWindow props={ {
        'top': equippedTop, 
        'bottom': equippedBottom, 
        'head': equippedHead, 
        'hands': equippedHands, 
        'shoes': equippedShoes, 
        'accessories': equippedAccessories, 
        'characterStats': characterStats
      } } /> {/*should contain all of the item slots*/}
    </div>
  );
}

export default App;
