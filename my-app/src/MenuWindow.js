import './MenuWindow.css'

function MenuWindow( { handleClick } ) {
  return (
    <div className='menuWindow'>
      <button className='menubutton' onClick={ handleClick }>=</button>
      <h3>Larval Stage</h3>
      
      <label>Sort by</label>
      <select>
        <option>Price Ascending</option>
        <option>Price Descending</option>
      </select>

      <label>Filter Category</label>

      <input type='checkbox'/>
      <label>Tops</label>

      <input type='checkbox'/>
      <label>Bottoms</label>
    </div>
  )
}

export default MenuWindow;