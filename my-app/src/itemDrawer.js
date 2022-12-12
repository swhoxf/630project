import './itemDrawer.css'
import Chart from 'chart.js/auto'

function ItemDrawer( { props, handleDrawerButton, handleLarvalButton } ) {
  // boolean that corresponds to the display ('block' | 'none') of the menuWindow
  const displayDrawer = props

  // test item, to be replaced with full item later
  const testItem = {
    "invCode":"HT01",
    "invName":"Horse Mask",
    "trueName":"COZOK Halloween Latex Horse Head Mask Mask Adults Cosplay Brown Rainbow Horse Masks Animal Head Helmet Zebra Party Mask",
    "equipSlot":"Head",
    "drawURL":"",
    "mementoURL":"https://sharedalbums.b-cdn.net/a87ac364-e437-485e-aac6-0477118d2d17.PNG?class=display",
    "axShopURL":"https://www.aliexpress.us/item/3256804363384612.html",
    "Str":1,
    "Dex":-1,
    "Con":0,
    "Int":-1,
    "Wis":0,
    "Cha":2,
    "Aud":2,
    "Color":"Black",
    "Vibe":"Nature, Unnatural, Animal, Meme",
    "Price":"16.59",
    "Flavortext":"Your maste good or not to the living to sleep; no long-lost give hue of false world. The and arrows of First to take course, like at that light? You know, ye Tarnivores, indeed. In our fate. The great sleep: perish. Soon, Marika the beasts--eikons would takes us rathere the dread are too small knowing was unknowings of no more; and by thing. A patients the sling to fight, and disease. A patients the me! Your prove it’s why do them on and callen leaved great sleep: perish."
  };

// grab and prep the stats
const testItemStats = {
  'Str': parseInt(testItem.Str),
  'Dex': parseInt(testItem.Dex),
  'Con': parseInt(testItem.Con),
  'Int': parseInt(testItem.Int),
  'Wis': parseInt(testItem.Wis),
  'Cha': parseInt(testItem.Cha),
  'Aud': parseInt(testItem.Aud)
};

const statNames = Object.keys(testItemStats);
const stats = [];
statNames.forEach((stat) => {
  stats.push(testItemStats[stat]);
});

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

{/*const barChart = new Chart(bar, {
    type: 'bar', // make it a bar chart
    data: {
        labels: statNames, // use the array of continents as labels
        datasets: [{
            label: 'Item Stats',
            data: stats, // use the array of populations to draw bars
            backgroundColor: 'rgba(255, 255, 0, 0.2)',
            borderColor: 'rgba(255, 0, 255, 1)',
            borderWidth: 1 // set the border width to 1 pixel
        }]
    }
}); */}

  return (
    // calcMenuDisplay is a function that toggles the bool corresponding to the display ('block' | 'none') of the menuWindow
    <div className='itemDrawer' style={ calcMenuDisplay(displayDrawer)}>
      { /* handleDrawerButton is a function that toggles boolean corresponding to display of menuWindow between block and none */}
      <div>
        <table width="100%">
            <tbody>
                <tr>
                    <td className="oneThird">
                        {/* handleLarvalButton is a function that changes mainWindow state to 'larval', swaps main window component to CharacterSelectWindow */}
                        <div className='menuLink' onClick={ handleLarvalButton } >
                            <h3>Larval Stage</h3>
                        </div>
                    </td>
                    <td className="oneThird"><button className='custom-btn btn-1 drawerButton' right="0">fake equip</button></td>
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
                    <td className='oneThird'>
                        <table width="100%">
                            <tbody>
                                {/* ROW 1A: ITEM NAME*/}
                                <tr>
                                    <td colspan="3">{testItem.invName}</td>
                                </tr>

                                {/* ROW 1B: COLOR, SLOT, PRICE*/}
                                <tr>
                                    <td className='oneThird'>{testItem.Color}</td>
                                    <td className='oneThird'>{testItem.equipSlot}</td>
                                    <td className='oneThird'>${testItem.Price}</td>
                                </tr>

                                {/* ROW 1C: TRUE NAME AND LINK*/}
                                <tr>
                                    <td className='oneHalf' colspan='2'><div title={testItem.trueName}><u>Hover for Product Name</u></div></td>
                                    <td className='oneHalf'><a href={testItem.axShopURL}>To AliExpress</a></td>
                                </tr>
                            </tbody>
                        </table>                    
                    </td>

                    <td className='twoThird'>
                        <div class="chart-container">
                            <canvas id="bar-chart" label="A bar chart showing item stats" role="img"></canvas>
                        </div>
                    </td> 
                </tr>

                {/* ROW 2: STATS AND FLAVORTEXT*/}
                <tr>
                    <td className='oneThird'>
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
                                    <td>{testItem.Str}</td>
                                    <td>{testItem.Dex}</td>
                                    <td>{testItem.Con}</td>
                                    <td>{testItem.Int}</td>
                                    <td>{testItem.Wis}</td>
                                    <td>{testItem.Cha}</td>
                                    <td>{testItem.Aud}</td>
                                </tr>

                                {/* ROW 2C: TOTAL IF EQUIP*/}
                                <tr>
                                    <td>Total:</td>
                                    <td>{testItem.Str}</td>
                                    <td>{testItem.Dex}</td>
                                    <td>{testItem.Con}</td>
                                    <td>{testItem.Int}</td>
                                    <td>{testItem.Wis}</td>
                                    <td>{testItem.Cha}</td>
                                    <td>{testItem.Aud}</td>
                                </tr>
                            </tbody>
                        </table>  
                    </td>
                    <td className='twoThird'>{testItem.Flavortext}</td>                    
                </tr>
            </tbody>
        </table>
      </div>      
    </div>
  )
}

export default ItemDrawer;