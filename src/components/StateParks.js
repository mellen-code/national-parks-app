// import { useState } from 'react';


function StateParks({data}) {
    // const {fullName, description} = data[0];

    return (
        <>
        <ul>
            {data.map(name => (
            <li key={data.id}>{data.fullName}</li>
            ))}
        </ul>
        </>
    )
}

export default StateParks;