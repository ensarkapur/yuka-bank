import React from 'react'
import {Typography, CardContent, Card, CardMedia, CardActions} from '@mui/material'

const CardItem =  ({title, description, image, index}) => 
  (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={image}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">{description}</Typography>
    </CardContent>
    <CardActions style={{justifyContent: 'flex-end'}}>
      <Typography style={{color: 'gray', fontSize: '14px'}}>{index}</Typography>
    </CardActions>
  </Card>
  )

export default CardItem;
