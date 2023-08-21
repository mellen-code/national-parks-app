import { Grid, Button, Link } from '@mui/material';

const ButtonAndDetails = ({ onClick, isSelected, description, directionsUrl, parkUrl }) => {

    return (
    <Grid item margin={4}>
      {isSelected ? (
        <>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Button onClick={onClick} variant="outlined" size="small">Hide Details</Button>
        </Grid>

        <p>{description}</p>

        <Link underline="hover" href={parkUrl} target="_blank" rel="noopener">Park Website</Link>

        <br/><br />

        <Link underline="hover" href={directionsUrl} target="_blank" rel="noopener">Directions</Link>
        </>
      ) : (
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Button onClick={onClick} variant="outlined" size="small">Show Details</Button>
      </Grid>
      )}
    </Grid>
    )
    
  }

export default ButtonAndDetails