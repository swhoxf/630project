import './App.css'
import CharacterSelectWindow from './CharacterSelectWindow'
import InventoryWindow from './InventoryWindow'
import CharacterWindow from './CharacterWindow'
import React, { useState } from 'react'


function App() {
  const [equippedTop, setEquippedTop] = useState({})
  // const [equippedBottom, setEquippedBottom] = useState({})
  // const [equippedHat, setEquippedHat] = useState({})
  // const [equippedAccessory, setEquippedAccessory] = useState({})
  // const [equippedShoes, setEquippedShoes] = useState({})
  // const [equippedGloves, setEquippedGloves] = useState({})
  // const [equippedScarf, setEquippedScarf] = useState({})

  function handleEquipButton() {
    console.log('hello world')

  }

  return (
    <div className="App">
      {/* <CharacterSelectWindow /> */}
      
      <InventoryWindow  handleClick={ handleEquipButton } />
      
      <CharacterWindow props={ equippedTop } />
    </div>
  );
}

export default App;
