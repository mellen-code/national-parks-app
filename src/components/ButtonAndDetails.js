import { Grid } from '@mui/material';

const ButtonAndDetails = ({ onClick, isSelected, description }) => {

    return (
    <Grid item>
      {isSelected ? (
        <>
        <button onClick={onClick}>Hide Details
      </button>
        <p>{description}</p>
        </>
      ) : (
        <button onClick={onClick}>Show Details
      </button>
      )}
    </Grid>
    )
    
  }

export default ButtonAndDetails