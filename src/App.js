import { useState } from 'react';
import ParkSearch from './components/ParkSearch';
import StateParks from './components/StateParks';
import './App.css';


function App() {
  const [stateParkInfo, setStateParkInfo] = useState(null);

  const getParksList = async function(state) {
    try {
      const response = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${process.env.REACT_APP_PARKS_API_TOKEN}`);
      const data = await response.json();
      setStateParkInfo(data.data);
      console.log(stateParkInfo)
    } 
    catch(error) {
      console.error(error)
    }
  }

  return (
    <>
      <ParkSearch getParksList={getParksList}/>

      {stateParkInfo && (
        <StateParks parks={stateParkInfo} />
      )}
    </>
  )
}

export default App;
