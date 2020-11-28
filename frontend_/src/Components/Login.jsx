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
import {Link} from "react-router-dom";
import requester from "axios";

import routes from "../routes";

class Login extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      user: '',
      pass: ''    
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event){
    this.setState({
      user: event.target.user,
      pass: event.target.pass
    });    
  }
  
  handleSubmit(event){
    event.preventDefault();    
    requester.get(routes.testing.login)
      .then((res) => {
        console.log(res);
        // if (res.data.status === "error") {
        //   //this.props.history.push({ pathname: "/error", data: res });
        // }
        // else{
        //   //console.log(res);
        //   //this.props.history.push({ pathname: "/result", data:res});
        // }
      })
      .catch((err) => {
        console.log(err);
        //this.props.history.push({ pathname: "/error", data: err });
      });    
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
          <Grid   className="center-vertical">
            <Greeting id="Greeting" />

            <Paper variant="elevation" elevation={4} className="loginpaper">
              <form onSubmit={this.handleSubmit}>
                <Grid item>
                  <TextField label="Username"  onChange={this.handleChange}/>
                </Grid>
                <Grid item>
                  <TextField  label="Password"  onChange={this.handleChange}/>
                </Grid>
                <Box
                  mt={2}
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                >
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>                  
                  <Button color="secondary"><Link to="/register" style={{textDecoration:"none"}}>Register</Link></Button>
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
