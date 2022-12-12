import './CharacterWindow.css'
import guy from './assets/mannequin.svg'

function CharacterWindow({ props }) {
  // props is a json storing the state of equipped items 
  // keys are item slots, values are equipped items
  const top = props.top
  // const bottom = props.bottom
  // const head = props.head
  // const shoes = props.shoes
  // const hands = props.hands
  // const accessories = props.accessories

  // function that toggles visibility of equipped item in CharacterWindow 
  function calcImageVisibility(item) {
    if (item.name === '') return {'display': 'none'}
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
        <img className='topImage' src={ top.src } alt={ top.alt } style={ calcImageVisibility(top) } />
        {/* <img className='bottomImage' src={ bottom.src } alt={ bottom.alt } style={ calcImageVisibility(bottom) } />
        <img className='headImage' src={ head.src } alt={ head.alt } style={ calcImageVisibility(head) } />
        <img className='shoesImage' src={ shoes.src } alt={ shoes.alt } style={ calcImageVisibility(shoes) } />
        <img className='handsImage' src={ hands.src } alt={ hands.alt } style={ calcImageVisibility(hands) } />
        <img className='accessoriesImage' src={ accessories.src } alt={ accessories.alt } style={ calcImageVisibility(accessories) } /> */}
      </div>
      
      <div className="informationBox">
        <h2 className='characterName'>Link Fromthelegendofzelda</h2>
        <h3 className='pronouns'>he/him</h3>
      </div>
    </div>
  );
}

export default CharacterWindow;