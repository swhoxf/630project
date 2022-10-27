import './MenuWindow.css'

function MenuWindow( { handleMenuButton, handleLarvalButton } ) {
  return (
    <div className='menuWindow'>
      <button className='menubutton' onClick={ handleMenuButton }>=</button>
      <div>
        <div className='menuLink'>
          <h3>Ye Olde Shoppe</h3>
        </div>
      
        <label>Sort by</label>
        <select>
          <option>Price Ascending</option>
          <option>Price Descending</option>
        </select>

        <br />

        <label>Filter</label>

        <input type='checkbox'/>
        <label>Tops</label>

        <input type='checkbox'/>
        <label>Bottoms</label>
      </div>

      
      <div className='menuLink' onClick={ handleLarvalButton } >
        <h3>Larval Stage</h3>
      </div>
      
    </div>
  )
}

export default MenuWindow;