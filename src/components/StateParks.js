import { useState } from 'react';


function StateParks({parks}) {
    const [selectedParkId, setSelectedParkId] = useState(null);

    const handleClick = (parkId) => {
       setSelectedParkId(parkId);
    }

    return (
        <>
        <ul>
        <>
            {parks.map(park => (

            <li key={park.id}><strong>{park.fullName}</strong>
            <br />
            {park.description}

            <br />
            <button onClick = {() => handleClick(park.id)}>Show Details</button>

            <br />
            {selectedParkId === park.id && (
                <>
                <p>{park.url}</p>
                <p>{park.description}</p>
                </>
            )}
           
            </li>
           
            ))}
        </>
        </ul>
        </>
    )
}

export default StateParks;