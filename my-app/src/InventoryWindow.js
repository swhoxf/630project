import './InventoryWindow.css'
import MenuWindow from './MenuWindow'
import React, { useState } from 'react'

function InventoryWindow({ handleClick }) {

  const [displayMenu, setDisplayMenu] = useState(false)

  function handleMenuButton(event) {
    setDisplayMenu(!displayMenu)
    console.log('hello')
  }

  return (
    <>
      <div className='inventoryWindow'>
        <div className='inventoryWindowContainer'>
          <div className='header'>
            <h1>Ye Olde Shoppe</h1>
            <button className='menuButton' onClick={ handleMenuButton }>=</button>
          </div>
          <div className='galleryContainer'>
            <div className='gallery'>
              <div className='item'>
                <div className='itemImageContainer'>
                  <img className='itemImage' src="https://www.nicepng.com/png/detail/9-98580_shirt-clipart-transparent-background-kids-t-shirt-clip.png" alt="Shirt Clipart Transparent Background - Kids T Shirt Clip Art@nicepng.com" />
                  
                </div>
                <div className='itemDescription'>
                  <div className='itemName'>Epic Shirt</div>
                  <button onClick={ handleClick }>Equip</button> 
                </div>
              </div>

              



            </div>
            
          </div>
          
        </div>
        
        <button className='minimizeButton'>&#8249;</button>
      </div>

      { displayMenu && <MenuWindow handleClick={ handleMenuButton }/> }
    </>
  );
}

export default InventoryWindow;