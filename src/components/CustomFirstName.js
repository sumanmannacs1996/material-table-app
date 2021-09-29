import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

function CustomFirstName({ name }) {
 return (
  <Grid container alignItems="center">
   <Grid item sm={7}>
    <Avatar style={{ backgroundColor: 'lightsalmon' }}>{name[0]}</Avatar>
   </Grid>
   <Grid item sm={5}>
    {name}
   </Grid>
  </Grid>
 );
}

export default CustomFirstName;
