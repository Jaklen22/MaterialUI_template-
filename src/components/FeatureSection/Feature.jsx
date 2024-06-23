
import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import { styled } from '@mui/system';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const properties = [
    {
        title: "Appartment",
        price: "$6728",
        imageUrl: "https://preview.colorlib.com/theme/konato/assets/img/gallery/items2.jpg", 
        description: "Get started by choosing from one of our pre-built page templates to showcase your properties",
        beds: 2,
        baths: 2,
        area: 1050
    },
    {
        title: "Office",
        price: "$6728",
        imageUrl: "https://preview.colorlib.com/theme/konato/assets/img/gallery/items1.jpg", 
        description: "Get started by choosing from one of our pre-built page templates to showcase your properties",
        beds: 2,
        baths: 2,
        area: 1050
    },
    {
        title: "Classic Home",
        price: "$6728",
        imageUrl: "https://preview.colorlib.com/theme/konato/assets/img/gallery/items2.jpg",
        description: "Get started by choosing from one of our pre-built page templates to showcase your properties",
        beds: 2,
        baths: 2,
        area: 1050
    },
    {
        title: "Offic",
        price: "$6728",
        imageUrl: "https://preview.colorlib.com/theme/konato/assets/img/gallery/items1.jpg",
        description: "Get started by choosing from one of our pre-built page templates to showcase your properties",
        beds: 2,
        baths: 2,
        area: 1050
    },
];

const StyledCard = styled(Card)({
    maxWidth: 350,
    margin: 'auto',
    '&:hover img': {
        transform: 'scale(1.02)',
    },
});

const StyledCardMedia = styled(CardMedia)({
    height: 200,
    transition: 'transform 0.3s ease-in-out',
});

const PropertyCard = ({ property }) => (
    <StyledCard>
        <StyledCardMedia
            component="img"
            image={property.imageUrl}
            alt={property.title}
        />
        <CardContent>
            <Typography variant="p" color="primary">
                {property.price}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
                {property.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" marginBottom={'20px'}>
                {property.description}
            </Typography>
           
         <hr style={{ border: '0.5px solid text.secondary', width: '100%' }} />
        
            <Box display="flex" justifyContent="space-between" marginTop={2}>
                <Box display="flex" alignItems="center">
                    <BedIcon color="action" />
                    <Typography variant="body2" color="text.secondary" marginLeft={0.5}>
                        {property.beds} Bedroom
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <BathtubIcon color="action" />
                    <Typography variant="body2" color="text.secondary" marginLeft={0.5}>
                        {property.baths} Bathroom
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <SquareFootIcon color="action" />
                    <Typography variant="body2" color="text.secondary" marginLeft={0.5}>
                        {property.area} Sq Ft
                    </Typography>
                </Box>
            </Box>
        </CardContent>
    </StyledCard>
);

const FeatureSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box sx={{ padding: 3, marginTop: 5 }}>
            <Typography variant="h4" component="div" gutterBottom textAlign={'center'}>
                Display Latest & Featured Properties
            </Typography>
            <Typography variant="body1" component="div" gutterBottom color="text.secondary" textAlign={'center'} marginBottom={5}>
                Get started by choosing from one of our pre-built page templates to <br /> showcase your properties
            </Typography>
            <Slider {...settings}>
                {properties.map((property, index) => (
                    <div key={index}>
                        <PropertyCard property={property} />
                    </div>
                ))}
            </Slider>
        </Box>
    );
};

export default FeatureSection;
