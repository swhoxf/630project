import './CharacterSelectWindow.css'


function CharacterSelectWindow( { handleShoppingButton } ) {

  return (
    <div className='window'>
      <div className="windowContainer" >
        
        <div className="formContainer" >
          <div className='header'>
            <h1>Larval Stage</h1>
          </div>
  
          <h4>Character Profile</h4>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
  
            <label>
              Pronouns:
              <input type="text" name="pronouns" />
            </label>
            <br />
  
            <h4>Stats</h4>
            <label>
              Strength:
              <input type="number" name="strength" />
            </label>
            <br />
            
            <label>
              Dexterity:
              <input type="number" name="dexterity" />
            </label>
            <br />
            
            <label>
              Constitution:
              <input type="number" name="constitution" />
            </label>
            <br />
  
            <label>
              Wisdom:
              <input type="number" name="wisdom" />
            </label>
            <br />
  
            <label>
              Intelligence:
              <input type="number" name='intelligence' />
            </label>
            <br />
  
            <label>
              Charisma:
              <input type="number" name='charisma' />
            </label>
            <br />
  
            
            <input type="submit" value="Start Shopping" onClick={ handleShoppingButton }/>
          </form>
        </div>
        
  
        <div>
          <button className="minimizeButton">&#8249;</button>
        </div>
      </div>
    </div>
    
  );
}

export default CharacterSelectWindow;
