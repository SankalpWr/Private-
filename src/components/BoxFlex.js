// import React from 'react'

// const CustomBox = ({data}) => {
//     console.log("Inside CustomBox",data)
//   return (
//     <div
//     style={{
//       backgroundColor: "#273D49BF",
//       display: "flex",
//       height: "100%",
//       width: "100%",
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//   >
//     CustomBox
//   </div>
//   )
// }

// export default CustomBox

import React from 'react'
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';
import Chart from './HighChart';
import HighChart from './HighChart';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function BoxFlex(props) {

 
  const classes = useStyles();
  return (
    <div>
   
      <Box display="flex" flexDirection="row" p={1}>
        <Box style={{height:"30vh",width:"55vh",borderRadius:"2%"}} p={2} bgcolor="#273D49BF">
          <Box>
          <Typography style={{marginLeft:"2%",marginTop:"-2%",color:"#FFFFFF80"}}>{props.customerName}</Typography>
          <Typography style={{marginLeft:"85%",marginTop:"-5%",fontSize:"13px",color:"#FFFFFF80"}}>{props.customerNumber}</Typography>
          <Divider orientation="vertical" style={{right:"20px"}} dividerColor="white"/>
          {/* <Box ><img style={{width:"60px",marginLeft:"86%"}} src="promise.svg"></img>
          <Typography>Promise</Typography>
          </Box> */}
          <HighChart pastDueBucketDocumentCount = {props.pastDueBucketDocumentCount} bucketNames = {props.bucketNames}/>
        
          </Box>
          </Box>
        </Box>
        {/* <div>
        <Grid container spacing={1} >
        <Grid item xs={1}>
        <Fab size="small" color="secondary" aria-label="add" >
          <AddIcon />
        </Fab>
        </Grid>
        <Grid item xs={11}>
        <Fab size="small" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        </Grid>
        </Grid>
        </div> */}
    
    
    </div>
  )
}

export default BoxFlex;
