import * as React from 'react';

import { CardActionArea, CardContent, CardMedia, Typography, Card } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardMovie({title, id, backdrop_path, overview}) {
  const image_path = "https://image.tmdb.org/t/p/original"
  
  return (
    
      <Card sx={{ maxWidth: 345 }}>
        <Link to={`/detailMovies/${id}`} style={{textDecoration:"none", color:"black"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={`${image_path}${backdrop_path}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`}
            alt={title}
            key={id}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {overview}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
    
      
    
  
  );
}
