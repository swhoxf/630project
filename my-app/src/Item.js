import React from 'react'

function Item({ itemInfo, handleEquipButton, handleDrawerButton }) {

  return (
    <div className='item'>
      <div className='itemImageContainer' >
        <img className='itemImage' onClick={ handleDrawerButton } src={ itemInfo.mementoURL } alt={ itemInfo.invName } />
  
      </div>
      <div className='itemDescription'>
        <div className='itemName' onClick={ handleDrawerButton }>{ itemInfo.invName }</div>
        {/* handleEquipButton is a function that changes href of item slot in CharacterWindow and toggles display between block and none; 
            displays image of associated item in CharacterWindow */}
        <button className='custom-btn btn-1 equip-button' onClick={ handleEquipButton }>Equip</button> 
      </div>
    </div>
  )
}

export default Item