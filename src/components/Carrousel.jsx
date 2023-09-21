import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const images = [
  { src: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/marvels-avengers-2750719.jpg?tf=3840x', title: 'Imagen 1', description: 'Descripción de la imagen 1' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkS8nR5lQp3D1FEl7bmMYZFWXzK3blRtO8xn3leDPA9o_SIeEBiEhekkCP7XjGg8m5hG4&usqp=CAU', title: 'Imagen 2', description: 'Descripción de la imagen 2' },
  { src: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/marvels-avengers-2750719.jpg?tf=3840x', title: 'Imagen 1', description: 'Descripción de la imagen 1' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkS8nR5lQp3D1FEl7bmMYZFWXzK3blRtO8xn3leDPA9o_SIeEBiEhekkCP7XjGg8m5hG4&usqp=CAU', title: 'Imagen 2', description: 'Descripción de la imagen 2' },
  { src: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/marvels-avengers-2750719.jpg?tf=3840x', title: 'Imagen 1', description: 'Descripción de la imagen 1' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkS8nR5lQp3D1FEl7bmMYZFWXzK3blRtO8xn3leDPA9o_SIeEBiEhekkCP7XjGg8m5hG4&usqp=CAU', title: 'Imagen 2', description: 'Descripción de la imagen 2' },
  // Agrega más imágenes y descripciones aquí
];

const Carrousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoplay, setAutoplay] = useState(true); // Nuevo estado para autoplay

  const handlePrevClick = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000); // Intervalo de 3 segundos entre transiciones

      return () => clearInterval(interval);
    }
  }, [autoplay, currentImage]);

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={images[currentImage].src}
        alt={images[currentImage].title}
      />
      <CardContent>
        <Typography variant="h5">{images[currentImage].title}</Typography>
        <Typography>{images[currentImage].description}</Typography>
      </CardContent>
      <Box>
        <Button onClick={handlePrevClick}>Anterior</Button>
        <Button onClick={handleNextClick}>Siguiente</Button>
      </Box>
    </Card>
  );
};

export default Carrousel;





// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// import React from 'react'

// export default function Carrousel() {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => ('slide change')}
//       onSwiper={(swiper) => (swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   )
// }

















// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];

// function Carrousel() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 50,
//           pl: 2,
//           bgcolor: 'background.default',
//         }}
//       >
//         <Typography>{images[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: 255,
//                   display: 'block',
//                   maxWidth: 400,
//                   overflow: 'hidden',
//                   width: '100%',
//                 }}
//                 src={step.imgPath}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

// export default Carrousel;
