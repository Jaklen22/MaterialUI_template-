import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SearchIcon from '@mui/icons-material/Search';

const HowWeHelp = () => {
  const items = [
    {
      icon: <HomeWorkIcon sx={{ fontSize: 50 }} />,
      title: 'Sell home or office',
      description: 'Get started by choosing from one of our prebuilt page templates to showcase your properties',
    },
    {
      icon: <ApartmentIcon sx={{ fontSize: 50 }} />,
      title: 'Rent home or office',
      description: 'Get started by choosing from one of our prebuilt page templates to showcase your properties',
    },
    {
      icon: <SearchIcon sx={{ fontSize: 50 }} />,
      title: 'Find next',
      description: 'Get started by choosing from one of our prebuilt page templates to showcase your properties',
    },
  ];

  return (
    <Box  
      sx={{
        backgroundImage: `url('https://preview.colorlib.com/theme/konato/assets/img/gallery/section-bg1.jpg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 10,
        textAlign: 'center',
        color: 'white',
        my : '50px'
        
      }}
    >
      <Typography variant="h4" marginBottom={'30px'}  gutterBottom>
        How we help people?
      </Typography>
      <Grid container spacing={0} justifyContent="center" alignContent="center" >
        {items.map((item, index) => (
          <Grid item  key={index} >
            <Card sx={{ minHeight: 300  ,maxWidth:300 ,backgroundColor:"#00A0EB" , color:"white" ,borderRadius:'0px' ,
                
            }}>
              <CardContent sx={{ textAlign: 'center' ,marginTop:"40px" }}>
                <Box sx={{ mb: 2 }}>
                  {item.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="p" color="white">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowWeHelp;