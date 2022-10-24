import './MenuWindow.css'

function MenuWindow() {
  return (
    <div className='menuWindow'>
      <button className='menubutton'>=</button>
      <h3>Character Profile</h3>
      
      <label>Sort by</label>
      <select>
        <option>Price Ascending</option>
        <option>Price Descending</option>
        <oprion>Maximize Attack</oprion>
        <oprion>Maximize Attack</oprion>
        <oprion>Maximize Attack</oprion>
        <oprion>Maximize Attack</oprion>
        <oprion>Maximize Attack</oprion>
        <oprion>Maximize Attack</oprion>
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