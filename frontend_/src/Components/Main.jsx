import React, { Component } from "react";
import {  
  ThemeProvider,
  Card,
  CardContent,
  CardHeader,
  makeStyles
    
} from "@material-ui/core";
import theme from "./theme";
import MediaCard from './MediaCard';

class Main extends Component {
  
  constructor(props){
    super(props);
    this.state ={}      
  }
  

  render() {  
     
    return(
    <div id="Main">
      <ThemeProvider theme={theme}>
        <MediaCard />
      </ThemeProvider>
    </div>);
  }
}

export default Main;
