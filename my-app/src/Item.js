import React from 'react'

function Item({ itemInfo, handleEquipButton }) {
  const src = itemInfo.src
  const alt = itemInfo.alt
  const name = itemInfo.name

  return (
    <div className='item'>
      <div className='itemImageContainer'>
        <img className='itemImage' src={ src } alt={ alt } />
  
      </div>
      <div className='itemDescription'>
        <div className='itemName'>{ name }</div>
        {/* handleEquipButton is a function that changes href of item slot in CharacterWindow and toggles display between block and none; 
            displays image of associated item in CharacterWindow */}
        <button className='custom-btn btn-1 equip-button' onClick={ handleEquipButton }>Equip</button> 
      </div>
    </div>
  )
}

export default Item