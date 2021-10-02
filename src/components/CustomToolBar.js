import React from 'react';
import { MTableToolbar } from 'material-table';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function CustomToolBar(props) {
 return (
  <Grid container alignItems="center">
   <Grid item sm={3}>
    <Typography>{`Total Number of Row is ${props.data.length}`}</Typography>
   </Grid>
   <Grid item sm={9}>
    <MTableToolbar {...props} />
   </Grid>
  </Grid>
 );
}

export default CustomToolBar;
