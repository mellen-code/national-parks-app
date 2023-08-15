import { useState } from 'react';
import ButtonAndDetails from './ButtonAndDetails';

function StateParks({parks}) {
    const [selectedParkId, setSelectedParkId] = useState(null);

    const handleClick = (parkId) => {
        if (selectedParkId === parkId) {
            setSelectedParkId(!parkId)
        } else {
       setSelectedParkId(parkId)
        }
    }

    return (
        <>
        <ul>
     
            {parks.map(park => (

            <li key={park.id}><strong>{park.fullName}</strong>
            <br />
            {park.description}

            <br />
            
            <ButtonAndDetails 
            text 
            onClick={() => handleClick(park.id)} 
            isSelected={selectedParkId === park.id}
            />
           
            </li>
           
            ))}
        </ul>
        </>
    )
}

export default StateParks;