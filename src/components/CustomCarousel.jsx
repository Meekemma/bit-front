import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/CustomCarousel.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import nft from '../assets/images/nft.svg';
import pana from '../assets/images/pana.svg';
import svgexport from '../assets/images/svgexport.svg';
import svge from '../assets/images/svge.svg';
import '../styles/main.css';
import '../styles/registration.css';
import '../styles/CustomCarousel.css';

const carouselItems = [
  {
    imgSrc: nft,
    text: 'Invest in What Matters to You',
    button1Text: 'Trade Now',
  },
  {
    imgSrc: pana,
    text: 'Trade Bitcoin/Ethereum DeFi Token with BobbyGram',
    button1Text: 'Trade Now',
  },
  {
    imgSrc: svgexport,
    text: 'Bitcoin will Break all Time High Or Fall Back?',
    text2: 'Buy & Sell crypto futures / CFDs in MT5',
    button1Text: 'Trade Now',
  },
  {
    imgSrc: svge,
    text: 'Trade FX Currency Pair with Crypto & StableCoins',
    text2: 'ECN & DMA aggregated liquidity',
    button1Text: 'Trade Now',
  },
];

const CustomCarousel = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); 

  const handleOnClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="carousel-wrapper">
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-slide">
            <Box className="carousel-content">
              <img src={item.imgSrc} alt={`Slide ${index + 1}`} className="carousel-image" />
              <Box 
                className="carousel-text" 
                sx={{ 
                  paddingTop: { xs: '20px', md: '50px' }, // Smaller padding on mobile
                  paddingLeft: { xs: '10px', md: '50px' }, 
                  paddingRight: { xs: '10px', md: '50px' }, 
                  textAlign: { xs: 'center', md: 'left' } // Center text on mobile
                }}
              >
                <Typography 
                  variant="h4" 
                  component="h2" 
                  gutterBottom 
                  sx={{ fontSize: { xs: '1.5rem', md: '2.5rem' } }} // Smaller text on mobile
                >
                  {item.text}
                </Typography>
                {item.text2 && (
                  <Typography 
                    variant="h6" 
                    component="p" 
                    gutterBottom 
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }} // Adjust font size for mobile
                  >
                    {item.text2}
                  </Typography>
                )}
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mt: { xs: 2, md: 4 } }}>
                  <Button 
                    variant="contained" 
                    className="create-button" 
                    sx={{ 
                      fontSize: { xs: '0.8rem', md: '1rem' }, // Smaller button text on mobile
                      padding: { xs: '8px 16px', md: '12px 24px' } // Adjust button padding for mobile
                    }}
                    onClick={handleOnClick}
                  >
                    {item.button1Text}
                  </Button>
                </Box>
              </Box>
            </Box>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
