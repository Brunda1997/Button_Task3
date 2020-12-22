import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Delete} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


const Buttons=()=>{
    const classes = useStyles();
const [color,setcolor]=useState('primary');
const [btndisable,setbtndisable]=useState(false)

const custome=()=>{
  setcolor('secondary');
  setbtndisable(true)
}

  return (
    <div className={classes.root}>
      <h1>React Material UI|Button</h1>
    <Button
    color={color}
    variant="contained"
    disabled={btndisable}
    endIcon={<Delete/>}
    size="small"
    component="span"
    onClick={()=>custome()}
    >  
      Click Me</Button>

      <div>
      <Button variant="contained" color="primary" disableElevation>DisableElevation</Button>
      </div>
      <div>
      <Button href="#home" color="secondary">Link</Button>
      </div>
      
    </div>
  );
}

export default Buttons;