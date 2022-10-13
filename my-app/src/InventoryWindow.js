import './InventoryWindow.css'

function InventoryWindow() {
  return (
    <div className='inventoryWindow'>
      <div className='inventoryWindowContainer'>
        <div className='itemsGallery'>
          <div className='item'>
            <h3>item name</h3>
          </div>
        </div>
        
        <div>
          <button className="minimizeButton">&#8249;</button>
        </div>
      </div>

      
    </div>
    

  );
}

export default InventoryWindow;