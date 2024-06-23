
import React from 'react';
import { Grid, Box, Typography, Link, IconButton } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const SpinningIconButton = styled(IconButton)({
  '&:hover': {
    animation: `${spin} 1s linear infinite`,
  },
});

const Footer = () => {
  return (
    <Box sx={{ padding: '3rem', backgroundColor: 'white', borderTop: '1px solid #e0e0e0' }}>
      <Grid container spacing={2} display={'flex'} justifyContent={'center'} >
        <Grid item xs={12} md={3}>
          <Box mb={2}>
            <img 
              src="https://preview.colorlib.com/theme/konato/assets/img/logo/logo2_footer.png.webp"
              alt="Konato Logo"
              style={{ width: '150px' }}
            />
          </Box>
          <Typography variant="body2" color="textSecondary">
            Duis aute irure dolor in reprehenderit<br/> in voluptate velit esse cillum.
          </Typography>
          <Box my={2} >
            <SpinningIconButton href="#" color="textSecondary" sx={{ mr: 1 }}>
              <FacebookIcon />
            </SpinningIconButton>
            <SpinningIconButton href="#" color="textSecondary" sx={{ mr: 1 }}>
              <TwitterIcon />
            </SpinningIconButton>
            <SpinningIconButton href="#" color="textSecondary" sx={{ mr: 1 }}>
              <LinkedInIcon />
            </SpinningIconButton>
            <SpinningIconButton href="#" color="textSecondary">
              <InstagramIcon />
            </SpinningIconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={2} >
          <Typography variant="h6" gutterBottom>Navigation</Typography>
          <Typography variant="p" gutterBottom><Link href="#" color="textSecondary" underline="none" >Home</Link></Typography>
          <Typography variant="body2" gutterBottom><Link href="#"color="textSecondary" underline="none" >About</Link></Typography>
          <Typography variant="body2" gutterBottom><Link href="#" color="textSecondary" underline="none" >Services</Link></Typography>
          <Typography variant="body2" gutterBottom><Link href="#" color="textSecondary" underline="none">Blog</Link></Typography>
          <Typography variant="body2" gutterBottom><Link href="#" color="textSecondary" underline="none" >Contact</Link></Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom>Services</Typography>
          <Typography variant="body2" gutterBottom><Link href="#" color="textSecondary" underline="none">Drone Mapping</Link></Typography>
          <Typography variant="body2" gutterBottom><Link href="#" color="textSecondary" underline="none">Real Estate</Link></Typography>
          <Typography variant="body2" gutterBottom><Link href="#" color="textSecondary" underline="none">Commercial</Link></Typography>
          <Typography variant="body2" gutterBottom><Link href="#" color="textSecondary" underline="none">Construction</Link></Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom>Support</Typography>
          <Typography variant="body2" gutterBottom><Link href="#" color="textSecondary" underline="none" >Drone Mapping</Link></Typography>
          <Typography variant="body2" gutterBottom><Link href="#" color="textSecondary" underline="none" >Real Estate</Link></Typography>
          <Typography variant="body2" gutterBottom><Link href="#" color="textSecondary" underline="none">Commercial</Link></Typography>
          <Typography variant="body2" gutterBottom><Link href="#" color="textSecondary" underline="none">Construction</Link></Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom>Contact Us</Typography>
          <Typography variant="body2" gutterBottom><Link color="textSecondary">contact@konato.com</Link></Typography>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#0056CC' }}>
            <Link color="#003366">+1 (987) 738-3940 </Link> 
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;