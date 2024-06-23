
import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';

const SubscribeNewsletter = () => {
  return (
    <Box style={{ marginTop: '2rem' }}>
      <Grid container spacing={0} style={{ backgroundColor: '#003366', overflow: 'hidden' }}>
        <Grid item xs={12} md={6} style={{ padding: '5rem', color: 'white' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Subscribe Newsletter  
          </Typography>
          <Typography variant="body1" gutterBottom>
            Get started by choosing from one of our prebuilt page templates to showcase <br /> your properties  
          </Typography>
          <Box component="form" noValidate autoComplete="off" mt={2}>
            <TextField  
              placeholder="Enter your email"
              type="email"
              fullWidth  
              variant="standard"
              InputLabelProps={{
                style: { color: 'white' },
              }}
              InputProps={{
                style: { color: 'white' },
                disableUnderline: true,
                sx: {
                    
                    '&::placeholder': {
                        color: 'white',
                        opacity: 1, 
                    },
                    borderBottom: '1px solid white',
                },
              }}
              sx={{
                my: '30px',
                input: { color: 'white', borderBottom: '.5px solid white' }
              }}
            />
            <Button variant="contained" color="primary" size="large">
              Subscribe  
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img  
            src="https://preview.colorlib.com/theme/konato/assets/img/gallery/subscribe-img.jpg.webp"
            alt="House"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubscribeNewsletter;