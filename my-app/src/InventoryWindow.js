import './InventoryWindow.css'
import MenuWindow from './MenuWindow'
import Item from './Item'
import React, { useState } from 'react'
import Papa from "papaparse" 


const testTop = {
  'name': 'Epic Shirt',
  'src': 'https://www.nicepng.com/png/detail/9-98580_shirt-clipart-transparent-background-kids-t-shirt-clip.png',
  'alt': 'Epic Shirt'
}

const testBottom = {
  'name': 'Epic Pants',
  'src': 'https://www.nicepng.com/png/detail/9-98580_shirt-clipart-transparent-background-kids-t-shirt-clip.png', 
  'alt': 'Epic Pants'
}

const testInventory = {
  'Epic Shirt': testTop,
  'Epic Pants': testBottom
}

function InventoryWindow({ handleEquipButton, handleLarvalButton }) {

  // boolean; true: menu display block | false: menu display none
  const [displayMenu, setDisplayMenu] = useState(false)

  // PULL IN DATA FROM UPLOADED FILE VIA PAPA PARSE
  // shamelessly from: https://medium.com/how-to-react/how-to-parse-or-read-csv-files-in-reactjs-81e8ee4870b0
  
  // State to store parsed data
  // parsedData = full data dictionary
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  // tableRows = column headers, ie "invName"
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  // values = exclusively data, no labels, ie "HT01"
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  // SEARCH/FILTER ALGORITHMS FOR REFERENCE
  // console.log(parsedData[0]);
  console.log(parsedData.filter(function(value) {
    // return value.equipSlot == "Accessory";
    // return value.Color == "Yellow";
    // return value.Price >= 50;
    // return value.Aud > 0;
    // return value.Vibe.includes("Meme");
    // return value.invName.includes('Prism');
    return value.invCode == "BT01";
    })
  );

  // toggles boolean corresponding to menuWindow display between block and none
  function handleMenuButton(event) {
    setDisplayMenu(!displayMenu)
  }

  return (
    <>
      <div className='inventoryWindow'>
        <div className='inventoryWindowContainer'>
          <div className='header'>
            <h1>Ye Olde Shoppe</h1>
            {/* handleMenuButton toggles a bool that corresponds to display of menuWindow */}
            <button className='custom-btn btn-1 menuButton' onClick={ handleMenuButton }>=</button>
          </div>
          <div className='galleryContainer'>
            <div className='gallery'>

              <Item itemInfo={ testInventory['Epic Shirt'] } handleEquipButton={ handleEquipButton } />
              

            </div>
            
          </div>
          
        </div>
        
        <button className='custom-btn btn-1 minimizeButton'>&#8249;</button>
      </div>
      {/* handleMenuButton is a function that toggles a bool that corresponds to display of menuWindow 
          displayMenu is the bool that corresponds to the display of menuWindow
          handleLarvalButton is a function that changes the state of the main window to 'larval' (switches main window component to CharacterSelectionWindow component) */}
      <MenuWindow props={displayMenu} handleMenuButton={ handleMenuButton } handleLarvalButton={ handleLarvalButton }/>
    </>
  );
}

export default InventoryWindow;