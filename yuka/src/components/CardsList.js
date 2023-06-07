import React from 'react'
import CardItem from './Card';
import CARDS from './constants';
import {Grid} from '@mui/material';

const CardList =  () => (
    <Grid container spacing={2} justifyContent="center" padding={2}>
        {
            CARDS.map((card, index) => 
            <Grid item xm={6} md={4} lg={2.4} > 
            <CardItem title={card.title} description={card.description} image={card.imagePath} index={index + 1}/>
            </Grid>
        )
        }
    </Grid>
  )

export default CardList;
