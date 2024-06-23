

// import React from 'react';
// import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import DeckIcon from '@mui/icons-material/Deck';      
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import BusinessIcon from '@mui/icons-material/Business';

// const ExploreByPropertyType = () => {
//   const items = [
//     {
//       icon: <HomeIcon sx={{ fontSize: 70, color: '#1e88e5' }} />,
//       title: 'Home & Apartment',
//     },
//     {
//       icon: <DeckIcon sx={{ fontSize: 70, color: '#1e88e5' }} />,
//       title: 'Villa',
//     },
//     {
//       icon: <ApartmentIcon sx={{ fontSize: 70, color: '#1e88e5' }} />,
//       title: 'Studio',
//     },
//     {
//       icon: <BusinessIcon sx={{ fontSize: 70, color: '#1e88e5' }} />,
//       title: 'Office',
//     },
//   ];

//   return (
//     <Box sx={{ py: 8, px: 2,my:10, textAlign: 'center', backgroundColor: '#f4f8fb',display:'flex' }}>
//      <Box textAlign={'start'} marginLeft={'100px'}>
//      <Typography variant="h4" gutterBottom>
//      Explore by <br/> Property Type  
//    </Typography>
//    <Typography variant="body1" color="textSecondary" gutterBottom>
//      Get started by choosing from one of our pre-built page <br/>templates to showcase your properties  
//    </Typography>
//    <Button variant="contained" color="primary" sx={{ mt: 4 }}>
//      View All Property  
//    </Button>
//      </Box>
//       <Box sx={{ backgroundColor: 'white', boxShadow: 1, margin: '0 auto' }}>
//         <Grid container spacing={0} justifyContent="center">
//           {items.map((item, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card sx={{ backgroundColor: 'inherit', boxShadow: 'none', textAlign: 'center' ,
//               '&:hover': {
//                 backgroundColor: '#f4f8fb',
//                 '.MuiTypography-p': {
//                   color: '#1e88e5',
//                   textDecoration: 'underline',
//                 },
//               },
//                }}>
//                 <CardContent  
//                   sx={{
//                     transition: 'background-color 0.3s, color 0.3s',
                    
//                   }}
//                 >
//                   <Box sx={{ px: 5}}>
//                     {item.icon}
//                   </Box>
//                   <Typography variant="p">
//                     {item.title}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
      
//     </Box>
//   );
// };

// export default ExploreByPropertyType;


import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DeckIcon from '@mui/icons-material/Deck';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessIcon from '@mui/icons-material/Business';

const ExploreByPropertyType = () => {
  const items = [
    {
      icon: <HomeIcon sx={{ fontSize: 70, color: '#1e88e5' }} />,
      title: 'Home & Apartment',
    },
    {
      icon: <DeckIcon sx={{ fontSize: 70, color: '#1e88e5' }} />,
      title: 'Villa',
    },
    {
      icon: <ApartmentIcon sx={{ fontSize: 70, color: '#1e88e5' }} />,
      title: 'Studio',
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 70, color: '#1e88e5' }} />,
      title: 'Office',
    },
  ];

  return (
    <Box sx={{ py: 8, px: 2, my: 10, textAlign: 'center', backgroundColor: '#f4f8fb', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
      <Box textAlign={'start'}>
        <Typography variant="h4" gutterBottom>
          Explore by <br/> Property Type
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Get started by choosing from one of our pre-built page <br/>templates to showcase your properties
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          View All Property
        </Button>
      </Box>
      <Box sx={{ backgroundColor: 'white', boxShadow: 1, width: '60%' }}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{
                backgroundColor: 'inherit', 
                boxShadow: 'none', 
                textAlign: 'center',
                padding: 0,
                margin: 0,
                '&:hover': {
                  backgroundColor: '#f4f8fb',
                  '.MuiTypography-body1': {
                    color: '#1e88e5',
                    textDecoration: 'underline',
                  },
                },
              }}>
                <CardContent
                  sx={{
                    transition: 'background-color 0.3s, color 0.3s',
                    marginBottom:'20px',
                    marginTop:'20px'
                  }}
                >
                  <Box sx={{ px: 5 }}>
                    {item.icon}
                  </Box>
                  <Typography variant="body1">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ExploreByPropertyType;
