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
  const [characterStats, setCharacterStats] = useState({
    'strength': 0, 
    'dexterity': 0, 
    'constitution': 0, 
    'intelligence': 0, 
    'wisdom': 0, 
    'charisma': 0, 
    'audacity': 0
  })
  const [characterName, setCharacterName] = useState('')
  const [characterPronouns, setCharacterPronouns] = useState('')

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
        applyItemStatChanges(itemToEquip)
        button.textContent = 'Unequip'
      } else {
        setEquippedTop(emptyItem)
        removeItemStatChanges(itemToEquip)
        button.textContent = 'Equip'
      }
    } else if (slot === 'bottom') {
      if (itemName !== equippedBottom.invName) {
        setEquippedBottom(itemToEquip) 
        applyItemStatChanges(itemToEquip)
        button.textContent = 'Unequip'
      } else {
        setEquippedBottom(emptyItem)
        removeItemStatChanges(itemToEquip)
        button.textContent = 'Equip'
      }
    } else if (slot === 'head') {
      if (itemName !== equippedHead.invName) {
        setEquippedHead(itemToEquip) 
        applyItemStatChanges(itemToEquip)
        button.textContent = 'Unequip'
      } else {
        setEquippedHead(emptyItem)
        removeItemStatChanges(itemToEquip)
        button.textContent = 'Equip'
      }
    } else if (slot === 'feet') {
      if (itemName !== equippedShoes.invName) {
        setEquippedShoes(itemToEquip) 
        applyItemStatChanges(itemToEquip)
        button.textContent = 'Unequip'
      } else {
        setEquippedShoes(emptyItem)
        removeItemStatChanges(itemToEquip)
        button.textContent = 'Equip'
      }
    } else if (slot === 'hands') {
      if (itemName !== equippedHands.invName) {
        setEquippedHands(itemToEquip) 
        applyItemStatChanges(itemToEquip)
        button.textContent = 'Unequip'
      } else {
        setEquippedHands(emptyItem)
        removeItemStatChanges(itemToEquip)
        button.textContent = 'Equip'
      }
    } else if (slot === 'accessory') {
      if (itemName !== equippedAccessories.invName) {
        setEquippedAccessories(itemToEquip) 
        applyItemStatChanges(itemToEquip)
        button.textContent = 'Unequip'
      } else {
        setEquippedAccessories(emptyItem)
        removeItemStatChanges(itemToEquip)
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

  function applyItemStatChanges(item) {
    handleItemStatChanges([item.Str, item.Dex, item.Con, item.Int, item.Wis, item.Cha, item.Aud])
  }

  function removeItemStatChanges(item) {
    handleItemStatChanges([-item.Str, -item.Dex, -item.Con, -item.Int, -item.Wis, -item.Cha, -item.Aud])
  }

  function handleItemStatChanges(array) {
    setCharacterStats({
      'strength': characterStats.strength + array[0], 
      'dexterity': characterStats.dexterity + array[1],
      'constitution': characterStats.constitution + array[2],
      'intelligence': characterStats.intelligence + array[3],
      'wisdom': characterStats.wisdom + array[4],
      'charisma': characterStats.charisma + array[5],
      'audacity': characterStats.audacity + array[6]
    })
  }

  function handleCharName(name) {
    setCharacterName(name)
  }

  function handleCharPronouns(pronouns) {
    setCharacterPronouns(pronouns)
  }

  return (
    <div className="App">
      {/* display the initial window for character selection */}
      { mainWindow === 'larval' && <CharacterSelectWindow 
        handleShoppingButton={ handleShoppingButton } 
        handleCharStats = { initCharStats }
        handleCharName = { handleCharName }
        handleCharPronouns = { handleCharPronouns } /> }
      
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
        'characterStats': characterStats, 
        'characterName': characterName, 
        'characterPronouns': characterPronouns
      } } /> {/*should contain all of the item slots*/}
    </div>
  );
}

export default App;
