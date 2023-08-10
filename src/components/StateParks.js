
function StateParks({parks}) {

    return (
        <>
        <ul>
            {parks.map(name => (
            <li key={name.id}><strong>{name.fullName}</strong>
            <br />
             {name.description}</li>
            ))}
        </ul>
        </>
    )
}

export default StateParks;