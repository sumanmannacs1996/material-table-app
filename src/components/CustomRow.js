import React, { useState } from 'react';
import { MTableBodyRow } from 'material-table';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/Delete';

function CustomRow(props) {
 const [showOverlay, setShowOverlay] = useState(false);
 return (
  <Grid
   style={{ display: 'contents' }}
   onMouseOver={() => setShowOverlay(true)}
   onMouseLeave={() => setShowOverlay(false)}>
   {showOverlay && (
    <Grid className="button-overlay-style">
     <Grid
      container
      justifyContent="space-around"
      style={{
       backgroundColor: 'white',
       borderRadius: '5px',
       margin: 'auto',
      }}
      sm={4}>
      <Grid item>
       <IconButton
        title="Downloard"
        onClick={() => alert(props.data.first_name)}>
        <GetAppIcon />
       </IconButton>
      </Grid>
      <Grid item>
       <IconButton
        title="Delete"
        onClick={() => props.handleDelete(props.data)}>
        <DeleteIcon />
       </IconButton>
      </Grid>
     </Grid>
    </Grid>
   )}
   <MTableBodyRow {...props} />
  </Grid>
 );
}

export default CustomRow;
