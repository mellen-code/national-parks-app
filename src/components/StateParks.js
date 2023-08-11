import { useState } from 'react';

function StateParks({parks}) {
    const [showParkDetails, setShowParkDetails] = useState(false);

    const handleClick = () => {
        setShowParkDetails(!showParkDetails)
    }

    return (
        <>
        <ul>
        <>
            {parks.map(park => (
            

            <li key={park.id} onClick={handleClick}><strong>{park.fullName}</strong>
            <br />
            {park.description}

            <br />
            <button onClick={handleClick}>Show Details</button>

            <br />
            {showParkDetails && (
                <p>{park.directionsUrl}</p>
            )}
            </li>
           
            ))}
        </>
        </ul>
        </>
    )
}

export default StateParks;