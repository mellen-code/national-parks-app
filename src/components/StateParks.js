import { useState } from 'react';
import { Container, Grid, Card, CardHeader, CardMedia, Typography } from '@mui/material';
import alternateImage from '../assets/No_Image_Available-1.jpg';
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
        <Container maxWidth='lg'>
        <Grid container spacing={6}>

            {parks.map(park => (

            <Grid item xs={12} sm={6} md={4} key={park.fullName}>

            <Card sx={{ maxWidth: 345 }} >
            
                <CardHeader 
                    key={park.id} 
                    title={
                        <Typography component="h3"
                        sx={{
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            maxWidth: 290,
                        }} color="#313e29"><b>{park.fullName}</b></Typography>
                    } 
                    subheader={park.addresses[0].city} />
            

            <CardMedia 
                component="img"
                height="200"
                image={park.images[0]?.url || alternateImage}
                alt='image of park'
            /> 
            
            <ButtonAndDetails  
            onClick={() => handleClick(park.id)} 
            isSelected={selectedParkId === park.id}
            description={park.description}
            directionsUrl={park.directionsUrl}
            parkUrl={park.url}
            />
           
            </Card>
            </Grid>
           
            ))}
        
        </Grid>
        </Container>
    )
}

export default StateParks;