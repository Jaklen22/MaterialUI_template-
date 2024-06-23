import React from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '40px',
  },
  marginRight: 8,
});

const StyledButton = styled(Button)({
  height: '40px',
  marginRight: 8,
});

const BedBathButton = styled(Button)({
  height: '40px',
  marginRight: 8,
  color: 'GrayText',  
  borderColor: 'GrayText', 
});

const SearchSection = () => {
  const [rentOrBuy, setRentOrBuy] = React.useState('Rent');

  const handleChange = (event) => {
    setRentOrBuy(event.target.value);
  };

  return (
    <Container maxWidth="large" >
      <Box display="flex" alignItems="center" my={2} p={1} justifyContent="center">
        <StyledTextField
          variant="outlined"
          placeholder="Enter Keyword.."
          InputProps={{
            startAdornment: (
              <SearchIcon />
            ),
          }}
        />
        <FormControl variant="outlined" style={{ marginRight: 8, minWidth: 120, height: '40px' }}>
          <InputLabel>Rent</InputLabel>
          <Select
            value={rentOrBuy}
            onChange={handleChange}
            label="Rent"
            style={{ height: '40px' }}
          >
            <MenuItem value="Rent">Rent</MenuItem>
            <MenuItem value="Rent1">Rent1</MenuItem>
            <MenuItem value="Rent2">Rent2</MenuItem>
            <MenuItem value="Rent3">Rent3</MenuItem>
          </Select>
        </FormControl>
        <BedBathButton
          variant="outlined"
          startIcon={<BedIcon />}
        >
          Bed
        </BedBathButton>
        <BedBathButton
          variant="outlined"
          startIcon={<BathtubIcon />}
        >
          Bath
        </BedBathButton>
        <StyledButton
          variant="contained"
          color="primary"
        >
          Search
        </StyledButton>
      </Box>
    </Container>
  );
};

export default SearchSection;