import { useState } from 'react';
import { Grid, Button, Select, FormControl, InputLabel, MenuItem, Typography } from '@mui/material';

function ParkSearch({getParksList}) {
    const [stateCode, setStateCode] = useState(null)

    const handleSearch = (e) => {
        e.preventDefault();
        getParksList(stateCode);
    }

    return (
    <>
    <div>
        <Grid container justifyContent="center">
            <Grid item>
                <Typography variant="h3" color="primary" >Explore U.S. National Parks</Typography>
            </Grid>
        </Grid>
    
        <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-label">Select a State</InputLabel>
            
                <Select 
                onChange={e => setStateCode(e.target.value)} 
                name="state" >
                    <MenuItem value="al">Alabama</MenuItem>
                    <MenuItem value="ak">Alaska</MenuItem>
                    <MenuItem value="az">Arizona</MenuItem>
                    <MenuItem value="mn">Minnesota</MenuItem>
                    <MenuItem value="wy">Wyoming</MenuItem>
                </Select> 
            </FormControl>
        </Grid>
       
        <Grid item>
            <Button onClick={handleSearch} variant="contained">Find Parks</Button>
        </Grid>
        </Grid>
    </div>
    </>
    )

}

export default ParkSearch;