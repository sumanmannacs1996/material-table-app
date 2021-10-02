import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TablePagination } from '@material-ui/core';

function CustomPagination(props) {
 return (
  <Grid container alignItems="center">
   <Grid item sm={6}>
    <Typography>{`Total Number of Row is ${props.count}`}</Typography>
   </Grid>
   <Grid item sm={6}>
    <TablePagination {...props} />
   </Grid>
  </Grid>
 );
}

export default CustomPagination;
