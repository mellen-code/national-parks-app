
const ButtonAndDetails = ({ text, onClick, isSelected }) => {

    return (
    <>
      {isSelected ? (
        <>
        <button onClick={onClick}>Hide Details
      </button>
        <p>Details here!</p>
        </>
      ) : (
        <button onClick={onClick}>Show Details
      </button>
      )}
    </>
    )
    
  }

export default ButtonAndDetails