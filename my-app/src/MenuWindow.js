import './MenuWindow.css'

function MenuWindow( { props, handleMenuButton, handleLarvalButton } ) {
  // boolean that corresponds to the display ('block' | 'none') of the menuWindow
  const displayMenu = props

  // function that toggles the bool corresponding to the display ('block' | 'none') of the menuWindow
  function calcMenuDisplay(showMenu) {
    if (showMenu) return (
      {//'display': 'block', 
      'transform': 'rotate3d(0, 1, 0, 0deg)', 
      'transition': 'transform 250ms ease-in-out'
      }
      )
    return (
      {//'display': 'none', 
      'transform': 'rotate3d(0, 1, 0, -90deg)', 
      'transition': 'transform 250ms ease-in-out'
      }
      )
  }

  return (
    // calcMenuDisplay is a function that toggles the bool corresponding to the display ('block' | 'none') of the menuWindow
    <div className='menuWindow' style={ calcMenuDisplay(displayMenu)}>
      { /* handleMenuButton is a function that toggles boolean corresponding to display of menuWindow between block and none */}
      <button className='custom-btn btn-1 menubutton' onClick={ handleMenuButton }>=</button>
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

      {/* handleLarvalButton is a function that changes mainWindow state to 'larval', swaps main window component to CharacterSelectWindow */}
      <div className='menuLink' onClick={ handleLarvalButton } >
        <h3>Larval Stage</h3>
      </div>
      
    </div>
  )
}

export default MenuWindow;