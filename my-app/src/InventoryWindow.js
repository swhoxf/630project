import './InventoryWindow.css'
import MenuWindow from './MenuWindow'

function InventoryWindow() {
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
                </div>
                <div className='itemDescription'>
                  lorem ipsum
                  <button>Equip</button>
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