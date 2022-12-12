import './CharacterSelectWindow.css'


function CharacterSelectWindow( { handleShoppingButton, handleCharStats, handleCharName, handleCharPronouns } ) {
  const character = {
    "Name": "",
    "Pronouns": "",
    "Base Stats": [],
    "Char Stats": [],
    "Head": [],
    "Top": [],
    "Hands": [],
    "Bottom": [],
    "Feet": [],
    "Accessory": [],
    "Final Stats": [],
  };
  
  // Basic variable declarations- Name, Pronouns, Stat Names & Elite Array
  let charName = ""
  let charPronouns = ""
  const statNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA", "AUD"]
  const eliteArray = [15, 14, 13, 12, 11, 10, 8]
  const charBonuses = [0, 1, 2]
  
  // Char creation stat variables; Base + Char (ie race, later) = Final
  let baseStats = [0, 0, 0, 0, 0, 0, 0]
  let charStats = [0, 0, 0, 0, 0, 0, 0]
  let finalStats = [0, 0, 0, 0, 0, 0, 0]

  function finalizeChar(e) {
    e.preventDefault();
    
    charName = e.target.writeName.value;
    charPronouns = e.target.pickPronoun.value;
    baseStats = [
      parseInt(e.target.strSelect.value), parseInt(e.target.dexSelect.value),
      parseInt(e.target.conSelect.value), parseInt(e.target.intSelect.value),
      parseInt(e.target.wisSelect.value), parseInt(e.target.chaSelect.value),
      parseInt(e.target.audSelect.value)
    ];
    charStats = [
      parseInt(e.target.strBonus.value), parseInt(e.target.dexBonus.value),
      parseInt(e.target.conBonus.value), parseInt(e.target.intBonus.value),
      parseInt(e.target.wisBonus.value), parseInt(e.target.chaBonus.value),
      parseInt(e.target.audBonus.value)
    ];
    
    
    for (let i = 0; i < baseStats.length; i++) {
      finalStats[i] = baseStats[i] + charStats[i];
    }
    
    // alert(
    //   "Name: " + charName + "\n" + 
    //   "Pronouns: " + charPronouns + "\n" + 
    //   "Base Stats: " + baseStats + "\n" + 
    //   "Char Stats: " + charStats + "\n" + 
    //   "Final Stats: " + finalStats)
    handleCharStats(finalStats)
    handleCharName(charName)
    handleCharPronouns(charPronouns)
  }

  function handleReset() {
    handleCharStats([0, 0, 0, 0, 0, 0, 0])
  }

  return (
    <div className='window'>
      
      <div className="windowContainer" >
        
        <div className="formContainer" >
          <div className='header'>
            <h1>Larval Stage</h1>
          </div>

          
          {/* Character Creator */}
          <div id="CharacterCreator">
            <form name="creatorWiz" onSubmit={finalizeChar}>
            
              {/* 
                IDENTIFY YOURSELF
                  > Name
                  > Pronouns
              */}
              <div id="IdentifyYourself">
                <h2>Identify Yourself</h2>  
                <table>
                  
                  {/* Form Field for Name */}
                  <tr>
                    <td><label>Name: </label></td>
                    <td><input type="text" name="writeName" placeholder="Maidenless..." /></td>
                  </tr>
                  
                  {/* Form Field for Pronouns */}
                  <tr>
                    <td><label>Pronouns: </label></td>
                    <td><input type="text" name="pickPronoun" list="basicPronouns" placeholder="Dropdown or type in." /></td>
                    {/* Datalist allows for choosing from dropdown or adding your own. */}
                    <datalist id="basicPronouns">
                      <option>he/him/his</option>
                      <option>she/her/hers</option>
                      <option>they/them/theirs</option>
                    </datalist>
                  </tr>
                  
                </table>
                <br />
              </div>

              {/* 
                ASSIGN YOUR STATS
                  > Assign Elite Array from single set to all stats. 
                  > #TODO: Remove selected stat values from the dropdowns. 
                  > #TODO: Implement 4d6 drop lowest, MAYBE?!
                  > #TODO: Implement Point Buy, MAYBE?! god that'd suck!
              */}
              <div className="AssignScores">
                <h2>Assigning Ability Scores</h2>            
                  {/* Stat Selection */}
                  <div id="statPicker">            
                    <p>
                      <strong>Ability Scores</strong> are numbers representing your character's physical, mental, and social capacities. <br />
                      The <strong>Ability Scores</strong> are: <strong>Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma, and Audacity.</strong><br/>
                      <br/>

                      The <strong>Elite Array</strong> is a list of values for your abilities that show your character's strengths and weaknesses; higher numbers are better. <br/>
                      The <strong>Elite Array</strong> consists of: <strong>15, 14, 13, 12, 11, 10, 8.</strong>
                    </p>
                  <div>
                    <table className="aboutStats">

                      {/* Form Field for STR */}
                      <tr>
                        <td><label for="strSelect"><strong>Strength</strong></label></td>
                        <td>STR</td>
                        <td>
                          <select name="strSelect" id="dropdownMenu">
                            <option value="10">---</option>
                            <option value="15">15</option>
                            <option value="14">14</option>
                            <option value="13">13</option>
                            <option value="12">12</option>
                            <option value="11">11</option>
                            <option value="10">10</option>
                            <option value="8" selected="true">8</option>
                          </select>
                        </td>
                        <td>
                          <select name="strBonus" id="dropdownMenu">
                            <option value="0">---</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2" selected="true">2</option>
                          </select>
                        </td>
                        <td>Physical; muscle, power, and might.</td>
                      </tr>

                      {/* Form Field for DEX */}
                      <tr>
                        <td><label for="dexSelect"><strong>Dexterity</strong></label></td>
                        <td>DEX</td>
                        <td>
                          <select name="dexSelect" id="dropdownMenu">
                            <option value="10">---</option>
                            <option value="15">15</option>
                            <option value="14">14</option>
                            <option value="13">13</option>
                            <option value="12" selected="true">12</option>
                            <option value="11">11</option>
                            <option value="10">10</option>
                            <option value="8">8</option>
                          </select>
                        </td>
                        <td>
                          <select name="dexBonus" id="dropdownMenu">
                            <option value="0">---</option>
                            <option value="0" selected="true">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </td>
                        <td>Physical; agility and reflexes.</td>
                      </tr>

                      {/* Form Field for CON */}
                      <tr>
                        <td><label for="conSelect"><strong>Constitution</strong></label></td>
                        <td>CON</td>
                        <td>
                          <select name="conSelect" id="dropdownMenu">
                            <option value="10">---</option>
                            <option value="15">15</option>
                            <option value="14">14</option>
                            <option value="13" selected="true">13</option>
                            <option value="12">12</option>
                            <option value="11">11</option>
                            <option value="10">10</option>
                            <option value="8">8</option>
                          </select>
                        </td>
                        <td>
                          <select name="conBonus" id="dropdownMenu">
                            <option value="0">---</option>
                            <option value="0" selected="true">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </td>
                        <td>Physical; endurance and immunity.</td>
                      </tr>

                      {/* Form Field for INT */}
                      <tr>
                        <td><label for="intSelect"><strong>Intelligence</strong></label></td>
                        <td>INT</td>
                        <td>
                          <select name="intSelect" id="dropdownMenu">
                            <option value="10">---</option>
                            <option value="15">15</option>
                            <option value="14">14</option>
                            <option value="13">13</option>
                            <option value="12">12</option>
                            <option value="11">11</option>
                            <option value="10" selected="true">10</option>
                            <option value="8">8</option>
                          </select>
                        </td>
                        <td>
                          <select name="intBonus" id="dropdownMenu">
                            <option value="0">---</option>
                            <option value="0" selected="true">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </td>
                        <td>Mental; intellect, logic, and reasoning.</td>
                      </tr>

                      {/* Form Field for WIS */}
                      <tr>
                        <td><label for="wisSelect"><strong>Wisdom</strong></label></td>
                        <td>WIS</td>
                        <td>
                          <select name="wisSelect" id="dropdownMenu">
                            <option value="10">---</option>
                            <option value="15">15</option>
                            <option value="14">14</option>
                            <option value="13">13</option>
                            <option value="12">12</option>
                            <option value="11" selected="true">11</option>
                            <option value="10">10</option>
                            <option value="8">8</option>
                          </select>
                        </td>
                        <td>
                          <select name="wisBonus" id="dropdownMenu">
                            <option value="0">---</option>
                            <option value="0" selected="true">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </td>
                        <td>Mental; intuition, senses, and resilience.</td>
                      </tr>

                      {/* Form Field for CHA */}
                      <tr>
                        <td><label for="chaSelect"><strong>Charisma</strong></label></td>
                        <td>CHA</td>
                        <td>
                          <select name="chaSelect" id="dropdownMenu">
                            <option value="10">---</option>
                            <option value="15">15</option>
                            <option value="14" selected="true">14</option>
                            <option value="13">13</option>
                            <option value="12">12</option>
                            <option value="11">11</option>
                            <option value="10">10</option>
                            <option value="8">8</option>
                          </select>
                        </td>
                        <td>
                          <select name="chaBonus" id="dropdownMenu">
                            <option value="0">---</option>
                            <option value="0">0</option>
                            <option value="1" selected="true">1</option>
                            <option value="2">2</option>
                          </select>
                        </td>
                        <td>Social; charm and power of personality.</td>
                      </tr>

                      {/* Form Field for AUD */}
                      <tr>
                        <td><label for="audSelect"><strong>Audacity</strong></label></td>
                        <td>AUD</td>
                        <td>
                          <select name="audSelect" id="dropdownMenu">
                            <option value="10">---</option>
                            <option value="15" selected="true">15</option>
                            <option value="14">14</option>
                            <option value="13">13</option>
                            <option value="12">12</option>
                            <option value="11">11</option>
                            <option value="10">10</option>
                            <option value="8">8</option>
                          </select>
                        </td>
                        <td>
                          <select name="audBonus" id="dropdownMenu">
                            <option value="0">---</option>
                            <option value="0" selected="true">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </td>
                        <td>Social: externalized sense of self and pride.</td>
                      </tr>

                    </table>
                  </div>
                </div>            
              </div>
              <br />

              {/* Submit data and move on to equipment... or reset. */}
              <table>
                <tr>
                  <td><button className="custom-btn btn-1" type="submit" onClick="finalizeChar()">Finalize Character</button></td>
                  <td></td>
                  <td><button className="custom-btn btn-1" type="reset" onClick={ handleReset }>Reset Character</button></td>
                  <td></td>
                  <td><button className="custom-btn btn-1" onClick={ handleShoppingButton }>Start Shopping</button></td>
                </tr>
              </table>
            </form>
          </div>


        </div>
        
  
        
      </div>
    </div>
    
  );
}

export default CharacterSelectWindow;
