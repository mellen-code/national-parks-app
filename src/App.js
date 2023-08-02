import ParkSearch from './components/ParkSearch'
import './App.css';

function App() {
  const getParksList = async function(state) {
    try {
      const response = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${process.env.REACT_APP_PARKS_API_TOKEN}`);
      const data = await response.json();
      console.log(data)
    } 
    catch(error) {
      console.error(error)
    }
  }

  return (
    <>
      <ParkSearch getParksList={getParksList}/>
    </>
  )
}

export default App;
