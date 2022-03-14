import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {useEffect} from 'react';

export default function MultiActionAreaCard({product}) {
  useEffect(() => {
    console.log('reached product');
    console.log(product);
  }, []);
  return (
    <Card
      sx={{maxWidth: 205}}
      className='productCard'
      style={{paddingLeft: '12px', marginRight: '2rem'}}
    >
      <CardActionArea className='productContent'>
        <CardMedia
          className='productImage'
          component='img'
          height='290'
          image={product.images[0]}
          alt='green iguana'
        />
        <CardContent className='productOptions'>
          <Typography
            className='productBrand'
            gutterBottom
            variant='h5'
            component='div'
          >
            {product.brand}
          </Typography>
          <Typography
            className='productName'
            variant='body2'
            color='text.secondary'
          >
            {product.name}
          </Typography>
          <Typography
            className='productPrice'
            gutterBottom
            variant='h6'
            component='div'
          >
            {`₹ ${product.price}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}
