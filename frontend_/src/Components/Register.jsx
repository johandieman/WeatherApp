import React from "react";
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

function Register() {
  return (
    <div id="Register">
      <ThemeProvider theme={theme}>
        
      </ThemeProvider>
    </div>
  );
}

export default Register;
