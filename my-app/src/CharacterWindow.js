import './CharacterWindow.css'
import guy from './assets/guy.png'

function CharacterWindow({ props }) {
  const top = props.equippedTop
  return (
    <div className='characterWindowContainer'>
      <div className='characterImageContainer'>
        <img className='characterImage' src={ guy } alt='character' />
        {/* <img className='topImage' src={ top.src } alt='top' /> */}
        <img className='topImage' src='#' alt='top' />
      </div>
      
      <div className="informationBox">
        <h2 className='characterName'>Link Fromthelegendofzelda</h2>
        <h3 className='pronouns'>he/him</h3>
      </div>
    </div>
  );
}

export default CharacterWindow;