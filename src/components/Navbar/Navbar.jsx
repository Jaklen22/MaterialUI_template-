
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#003366',
});

const Title = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  marginRight: '16px',
});

const NavLinks = styled(Box)({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-start',
});

const NavItem = styled('a')(({ theme }) => ({
  color: 'white',
  padding : "10px" ,
  margin: theme.spacing(1),
  textDecoration: 'none',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '0',
    height: '2px',
    backgroundColor: '#00aaff',
    transition: 'width 0.3s',
    position: 'absolute',
    bottom: '-10px', 
    left: '0',
  },
  '&:hover':{
        color :'#00aaff '
      },
  '&:hover::after': {
    width: '100%',
  },
}));

const RightSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const CallButton = styled(Typography)({
  marginRight: '16px',
  color: 'white',
});

const SignInButton = styled(Button)({
  backgroundColor: '#00aaff',
  color: 'white',
  '&:hover': {
    backgroundColor: 'transparent', 
    color: '#00aaff', 
    borderColor: '#00aaff', 
    border: '1px solid',
  },
});

export default function Navbar() {
  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Title variant="h6">
            <img src="https://preview.colorlib.com/theme/konato/assets/img/logo/logo.png" alt="logo" height="30" style={{ marginRight: 16 ,color:"white" }} />
          </Title>
          <NavLinks>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/property">Property</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </NavLinks>
          <RightSection>
            <CallButton variant="body1">
              Call Us: +10 (78) 356 3276
            </CallButton>
            <SignInButton variant="contained">Sign In</SignInButton>
          </RightSection>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

