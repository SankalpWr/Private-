import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Freeda from "./Freeda";
import Tab from "./Tab";
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: "60px",
    backgroundColor: alpha(theme.palette.info.dark, 1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.info.dark, 1),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#58687E",height:"80px" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <ArrowBackIcon></ArrowBackIcon>
          <p>&nbsp;</p>
          <Typography style={{color:"#5DAAE0"}} className={classes.title} variant="h6" noWrap>
            CALL WORKBOARD
          </Typography>
        
          <Button  style={{position:"fixed",backgroundColor:"#FC7500",right:"600px",marginBottom:"70px",width:"140px",height:"21px",borderRadius:"12px"}} variant="contained" disabled>
        <Typography style={{fontSize:"7px",color:'white',top:"3px"}}>AUTONOMOUS REVIEVEABLES</Typography>
      </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search Name"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            /> 
            <ArrowDropDownIcon style={{paddingTop:"8px"}}/>
          </div>
          
          
          <Button  style={{backgroundColor:"#FC7500",left:"40px",width:"110px",height:"35px",borderRadius:"40px"}} variant="contained" disabled>
        FREEDA<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      </Button>  
      <Freeda/>
      
        </Toolbar>
      </AppBar>
     <Tab/>
    </div>
  );
}
