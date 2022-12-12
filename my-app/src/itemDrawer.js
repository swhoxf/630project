import './itemDrawer.css'
import Chart from 'chart.js/auto'

function ItemDrawer( { props, handleDrawerButton } ) {
  // boolean that corresponds to the display ('block' | 'none') of the menuWindow
  const displayDrawer = props.displayDrawer
  const selectedItem = props.selectedItem

// function that toggles the bool corresponding to the display ('block' | 'none') of the menuWindow
function calcMenuDisplay(showDrawer) {
    if (showDrawer) return (
      {//'display': 'block', 
        'transform': 'rotate3d(1, 0, 0, 0deg)', 
        'transition': 'transform 250ms ease-in-out'
    })
    return (
      {//'display': 'none', 
        'transform': 'rotate3d(1, -1, 0, -90deg)', 
        'transition': 'transform 250ms ease-in-out'
    })
}

//const bar = document.getElementById('bar-chart');

// const barChart = new Chart(bar, {
//     type: 'bar', // make it a bar chart
//     data: {
//         labels: statNames, // use the array of continents as labels
//         datasets: [{
//             label: 'Item Stats',
//             data: stats, // use the array of populations to draw bars
//             backgroundColor: 'rgba(255, 255, 0, 0.2)',
//             borderColor: 'rgba(255, 0, 255, 1)',
//             borderWidth: 1 // set the border width to 1 pixel
//         }]
//     }
// }); 

  return (
    // calcMenuDisplay is a function that toggles the bool corresponding to the display ('block' | 'none') of the menuWindow
    <div className='itemDrawer' style={ calcMenuDisplay(displayDrawer)}>
      { /* handleDrawerButton is a function that toggles boolean corresponding to display of menuWindow between block and none */}
      <div>
        <table width="100%">
            <tbody>
                <tr>
                    <td className="oneThird"></td>
                    <td className="oneThird"></td>
                    <td className="oneThird"><button className='custom-btn btn-1 drawerButton' onClick={ handleDrawerButton } right="50%">X</button></td>
                </tr>
            </tbody>
        </table>
        
        
      </div>
      <div>
        <table className="itemDeets">
            <tbody>
                {/* ROW 1: BASE DETAILS AND BAR GRAPH*/}
                <tr>
                    <td className='oneHalf'>
                        <table width="100%">
                            <tbody>
                                {/* ROW 1A: ITEM NAME*/}
                                <tr>
                                    <td colspan="3">{selectedItem.invName}</td>
                                </tr>

                                {/* ROW 1B: COLOR, SLOT, PRICE*/}
                                <tr>
                                    <td className='oneThird'>{selectedItem.Color}</td>
                                    <td className='oneThird'>{selectedItem.equipSlot}</td>
                                    <td className='oneThird'>${selectedItem.Price}</td>
                                </tr>

                                {/* ROW 1C: TRUE NAME AND LINK*/}
                                <tr>
                                    <td className='oneHalf' colspan='2'><div title={selectedItem.trueName}><u>Hover for Product Name</u></div></td>
                                    <td className='oneHalf'><a href={selectedItem.axShopURL}>To AliExpress</a></td>
                                </tr>
                            </tbody>
                        </table>

                        <table width="100%">
                            <tbody>
                                {/* ROW 2A: STAT NAMES*/}
                                <tr>
                                    <td></td>
                                    <td><b>STR</b></td>
                                    <td><b>DEX</b></td>
                                    <td><b>CON</b></td>
                                    <td><b>INT</b></td>
                                    <td><b>WIS</b></td>
                                    <td><b>CHA</b></td>
                                    <td><b>AUD</b></td>
                                </tr>

                                {/* ROW 2B: STAT VALUES*/}
                                <tr>
                                    <td>Stats:</td>
                                    <td>{selectedItem.Str}</td>
                                    <td>{selectedItem.Dex}</td>
                                    <td>{selectedItem.Con}</td>
                                    <td>{selectedItem.Int}</td>
                                    <td>{selectedItem.Wis}</td>
                                    <td>{selectedItem.Cha}</td>
                                    <td>{selectedItem.Aud}</td>
                                </tr>

                                {/* ROW 2C: TOTAL IF EQUIP*/}
                                <tr>
                                    <td>Total:</td>
                                    <td>{selectedItem.Str}</td>
                                    <td>{selectedItem.Dex}</td>
                                    <td>{selectedItem.Con}</td>
                                    <td>{selectedItem.Int}</td>
                                    <td>{selectedItem.Wis}</td>
                                    <td>{selectedItem.Cha}</td>
                                    <td>{selectedItem.Aud}</td>
                                </tr>
                            </tbody>
                        </table>                    
                    </td>

                    <td className='oneHalf'>
                        <td>{selectedItem.Flavortext}</td>
                        {/*
                        <div class="chart-container">
                            <canvas id="bar-chart" label="A bar chart showing item stats" role="img"></canvas>
                        </div>
                        */}
                    </td> 
                </tr>
            </tbody>
        </table>
      </div>      
    </div>
  )
}

export default ItemDrawer;