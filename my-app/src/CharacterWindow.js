import './CharacterWindow.css'

function CharacterWindow() {
  return (
    <div className='characterWindowContainer'>
      <div className="dummyCharacterImage">character image</div>
      <div className="informationBox">
        <h2 className='characterName'>Character name</h2>
        <h3 className='pronouns'>Pronouns</h3>
      </div>
    </div>
  );
}

export default CharacterWindow;