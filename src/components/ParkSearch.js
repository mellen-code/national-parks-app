import { useState } from 'react';

function ParkSearch({getParksList}) {
    const [stateCode, setStateCode] = useState('mn')

    const handleSearch = (e) => {
        e.preventDefault();
        setStateCode(e.target.value);
        getParksList(stateCode);
    }

    return (
        <>
        <h3>Select a State:</h3>
        <select onChange={e => setStateCode(e.target.value)} name="state" >
            <option value="mn">Minnesota</option>
            <option value="wy">Wyoming</option>
        </select>
        <button onClick={handleSearch}>Find Parks</button>
        </>
    )

}

export default ParkSearch;