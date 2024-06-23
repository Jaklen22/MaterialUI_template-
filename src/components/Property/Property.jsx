// src/PropertySection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
const backgroundImage = require('./19-2.jpg'); 
const BackgroundImage = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '90vh',
  backgroundImage: `url(${backgroundImage})`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    zIndex: 1,
  },
});

const ContentBox = styled(Box)({
  position: 'relative',
  paddingLeft: '200px' ,
  zIndex: 2,
  maxWidth: '500px',
});

const PropertySection = () => {
  return (
    <BackgroundImage>
      <ContentBox>
        <Typography variant="subtitle1">3 Bed - 2 Bath - 2200 Sq Ft</Typography>
        <Typography variant="h2" gutterBottom>Light House NY</Typography>
        <Typography variant="body1" gutterBottom>
          Get started by choosing from one of our pre-built page templates to showcase your properties.
        </Typography>
        <Typography variant="h4" gutterBottom>$ 3,272</Typography>
        <Button variant="contained" color="primary" >View Property</Button>
      </ContentBox>
    </BackgroundImage>
  );
};

export default PropertySection;
