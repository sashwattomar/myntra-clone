import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

export default function ButtonC(props) {
  return (
    <Box
      sx={{'& > :not(style)': {m: 1}}}
      style={{
        marginRight: '0.5rem',
        outlineColor: 'rgb(3, 108, 219)',
        backgroundColor: 'white',
      }}
    >
      <Fab
        size='large'
        color='white'
        style={{
          border: 'solid 2.5px grey',
          backgroundColor: 'white',
        }}
      >
        <span
          style={{fontWeight: '700', fontHeight: '1.2rem', margin: '0.5rem'}}
        >
          {props.size}
        </span>
      </Fab>
    </Box>
  );
}
