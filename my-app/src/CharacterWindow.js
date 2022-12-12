import './CharacterWindow.css'
import guy from './assets/mannequin.svg'

function CharacterWindow({ props }) {
  // props is a json storing the state of equipped items 
  // keys are item slots, values are equipped items
  const top = props.top
  const bottom = props.bottom
  const head = props.head
  const shoes = props.shoes
  const hands = props.hands
  const accessories = props.accessories
  const characterStats = props.characterStats
  const characterName = props.characterName
  const characterPronouns = props.characterPronouns

  // function that toggles visibility of equipped item in CharacterWindow 
  function calcImageVisibility(item) {
    if (item.invName === '') return {'display': 'none'}
    return {'display': 'block'}
  }

  return (
    <div className='characterWindowContainer'>
      <div className='characterImageContainer'>
        {/* image of user character */}
        <img className='characterImage' src={ guy } alt='character' />
        {/* images of equipped items 
            calcImageVisibility is a function that takes item as an argument and 
            sets the equipped item in that slot to the item */}
        <img className='topImage' src={ top.mementoURL } alt={ top.invName } style={ calcImageVisibility(top) } />
        <img className='bottomImage' src={ bottom.mementoURL } alt={ bottom.invName } style={ calcImageVisibility(bottom) } />
        <img className='headImage' src={ head.mementoURL } alt={ head.invName } style={ calcImageVisibility(head) } />
        <img className='shoesImage' src={ shoes.mementoURL } alt={ shoes.invName } style={ calcImageVisibility(shoes) } />
        <img className='handsImage' src={ hands.mementoURL } alt={ hands.invName } style={ calcImageVisibility(hands) } />
        <img className='accessoriesImage' src={ accessories.mementoURL } alt={ accessories.invName } style={ calcImageVisibility(accessories) } />
      </div>
      
      <div className="informationBox">
        <h2 className='characterName'>{ characterName }</h2>
        <h3 className='pronouns'>{ characterPronouns }</h3>
        <table width="100%">
          <tbody>
              {/* ROW 2A: STAT NAMES*/}
              <tr>
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
                <td>{ characterStats.strength }</td>
                <td>{ characterStats.dexterity }</td>
                <td>{ characterStats.constitution }</td>
                <td>{ characterStats.intelligence }</td>
                <td>{ characterStats.wisdom }</td>
                <td>{ characterStats.charisma }</td>
                <td>{ characterStats.audacity }</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default CharacterWindow;