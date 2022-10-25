import './InventoryWindow.css'
import MenuWindow from './MenuWindow'
import React, { useState } from 'react'

function InventoryWindow({ handleClick }) {
  
  const [equippedTop, setEquippedTop] = useState({})

  return (
    <>
      <div className='inventoryWindow'>
        <div className='inventoryWindowContainer'>
          <div className='header'>
            <h1>Ye Olde Shoppe</h1>
            <button className='menuButton'>=</button>
          </div>
          <div className='galleryContainer'>
            <div className='gallery'>
              <div className='item'>
                <div className='itemImageContainer'>
                  <img className='itemImage' src="https://www.nicepng.com/png/detail/9-98580_shirt-clipart-transparent-background-kids-t-shirt-clip.png" alt="Shirt Clipart Transparent Background - Kids T Shirt Clip Art@nicepng.com" />
                  
                </div>
                <div className='itemDescription'>
                  Epic Shirt
                  <button onClick={ handleClick }>Equip</button> {/* this is the callback function to fix!!! */}
                </div>
              </div>

              



            </div>
            
          </div>
          
        </div>
        
        <button className='minimizeButton'>&#8249;</button>
      </div>

      {/* <MenuWindow /> */}
    </>
  );
}

export default InventoryWindow;