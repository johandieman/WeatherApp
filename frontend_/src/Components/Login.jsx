import React, { Component } from "react";
import {
  TextField,
  Grid,
  Paper,
  Button,
  ThemeProvider,
  Box,
} from "@material-ui/core";
import "../Styles/login.css";
import theme from "./theme";
import Greeting from "./greeting";

class Login extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      user: '',
      pass: '',
      objuser:null,
      objpass:null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event){
    this.setState({
      user: event.target.user,
      pass: event.target.pass
    });

    this.state.user!=''?this.setState({ objuser:{shrink:true} }):this.setState({objuser:null});
    this.state.pass!=''?this.setState({ objpass:{shrink:true} }):this.setState({objpass:null});
    
  }
  
  handleSubmit(event){
    event.preventDefault();
    //requests
  }

  render() {
    
    return(
    <div id="Login">
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={0}
          justify="center"
          direction="row"
          className=""
        >
          <Grid direction="column" className="center-vertical">
            <Greeting id="Greeting" />

            <Paper variant="elevation" elevation={4} className="loginpaper">
              <form onSubmit={this.handleSubmit}>
                <Grid item>
                  <TextField id="" InputLabelProps={this.state.objuser} label="Username" value={this.state.user} onChange={this.handleChange}/>
                </Grid>
                <Grid item>
                  <TextField id="" InputLabelProps={this.state.objpass} label="Password" value={this.state.pass } onChange={this.handleChange}/>
                </Grid>
                <Box
                  mt={2}
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                >
                  <Button variant="contained" color="primary">
                    Submit
                  </Button>
                  <Button color="secondary">Register</Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>);
  }
}

export default Login;
