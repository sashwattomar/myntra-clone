import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles({
  btn: {
    padding: '0',
    margin: '0',
    transition: 'transform .2s',
  },
});
const CardProduct = (props) => {
  const classes = useStyles();
  const {url} = props;
  return (
    <Card className={classes.btn} sx={{maxWidth: 765}}>
      <CardMedia component='img' height='409' image={url} alt='shirt' />
    </Card>
  );
};
export default CardProduct;
