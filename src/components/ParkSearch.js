import { useState } from 'react';
import { Grid, Button, Select, FormControl, InputLabel, MenuItem, Typography } from '@mui/material';



function ParkSearch({getParksList}) {
    const [stateCode, setStateCode] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        getParksList(stateCode);
    }

    return (
    <div>
        <Grid container justifyContent="center">
            <Grid item>
                <Typography variant="h3" color="#283221" mt={3} mb={1}>Explore U.S. National Parks & Monuments</Typography>
            </Grid>
        </Grid>
    
        <Grid container spacing={2} justifyContent="center" alignItems="center" mb={3}>
        <Grid item>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-label"><Typography color='#283221'>Select a State</Typography></InputLabel>
            
                <Select 
                onChange={e => setStateCode(e.target.value)} 
                name="state">
                    <MenuItem value="al">Alabama</MenuItem>
                    <MenuItem value="ak">Alaska</MenuItem>
                    <MenuItem value="az">Arizona</MenuItem>
                    <MenuItem value="ar">Arkansas</MenuItem>
                    <MenuItem value="ca">California</MenuItem>
                    <MenuItem value="co">Colorado</MenuItem>
                    <MenuItem value="ct">Connecticut</MenuItem>
                    <MenuItem value="de">Delaware</MenuItem>
                    <MenuItem value="dc">District of Columbia</MenuItem>
                    <MenuItem value="fl">Florida</MenuItem>
                    <MenuItem value="ga">Georgia</MenuItem>
                    <MenuItem value="hi">Hawaii</MenuItem>
                    <MenuItem value="id">Idaho</MenuItem>
                    <MenuItem value="il">Illinois</MenuItem>
                    <MenuItem value="in">Indiana</MenuItem>
                    <MenuItem value="ia">Iowa</MenuItem>
                    <MenuItem value="ks">Kansas</MenuItem>
                    <MenuItem value="ky">Kentucky</MenuItem>
                    <MenuItem value="la">Louisiana</MenuItem>
                    <MenuItem value="me">Maine</MenuItem>
                    <MenuItem value="md">Maryland</MenuItem>
                    <MenuItem value="ma">Massachusetts</MenuItem>
                    <MenuItem value="mi">Michigan</MenuItem>
                    <MenuItem value="mn">Minnesota</MenuItem>
                    <MenuItem value="ms">Mississippi</MenuItem>
                    <MenuItem value="mo">Missouri</MenuItem>
                    <MenuItem value="mt">Montana</MenuItem>
                    <MenuItem value="ne">Nebraska</MenuItem>
                    <MenuItem value="nv">Nevada</MenuItem>
                    <MenuItem value="nh">New Hampshire</MenuItem>
                    <MenuItem value="nj">New Jersey</MenuItem>
                    <MenuItem value="nm">New Mexico</MenuItem>
                    <MenuItem value="ny">New York</MenuItem>
                    <MenuItem value="nc">North Carolina</MenuItem>
                    <MenuItem value="nd">North Dakota</MenuItem>
                    <MenuItem value="oh">Ohio</MenuItem>
                    <MenuItem value="ok">Oklahoma</MenuItem>
                    <MenuItem value="or">Oregon</MenuItem>
                    <MenuItem value="pa">Pennsylvania</MenuItem>
                    <MenuItem value="ri">Rhode Island</MenuItem>
                    <MenuItem value="sc">South Carolina</MenuItem>
                    <MenuItem value="sd">South Dakota</MenuItem>
                    <MenuItem value="tn">Tennessee</MenuItem>
                    <MenuItem value="tx">Texas</MenuItem>
                    <MenuItem value="ut">Utah</MenuItem>
                    <MenuItem value="vt">Vermont</MenuItem>
                    <MenuItem value="va">Virginia</MenuItem>
                    <MenuItem value="wa">Washington</MenuItem>
                    <MenuItem value="wv">West Virginia</MenuItem>
                    <MenuItem value="wi">Wisconsin</MenuItem>
                    <MenuItem value="wy">Wyoming</MenuItem>
                </Select> 
            </FormControl>
        </Grid>
       
        <Grid item>
            <Button onClick={handleSearch} variant="contained" color="primary">Find Parks</Button>
        </Grid>
        </Grid>
    </div>
    )

}

export default ParkSearch;