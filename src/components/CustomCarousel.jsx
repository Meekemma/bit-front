import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/CustomCarousel.css'; // Adjust the path if necessary
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bitcoin from '../assets/images/bitcoin.png';
import ethereum from '../assets/images/ethereum.png';

const carouselItems = [
  {
    imgSrc: bitcoin,
    text: 'Slide 1 Text',
    button1Text: 'Trade Now',
    button2Text: 'Try Demo',
  },
  {
    imgSrc: ethereum,
    text: 'Slide 2 Text',
    button1Text: 'Trade Now',
    button2Text: 'Try Demo',
  },
];

const CustomCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {carouselItems.map((item, index) => (
        <div key={index} className="carousel-container">
          <img src={item.imgSrc} alt={`Slide ${index + 1}`} className="carousel-image" />
          <Box sx={{ position: 'absolute', bottom: '20%', left: '5%', color: 'white', textAlign: 'left' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              {item.text}
            </Typography>
            <Box>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                {item.button1Text}
              </Button>
              <Button variant="outlined" color="secondary">
                {item.button2Text}
              </Button>
            </Box>
          </Box>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
