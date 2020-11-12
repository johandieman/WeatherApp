import React from "react";
import {
  TextField,
  Grid,
  Paper,
  Button,
  ThemeProvider,
  Box
} from "@material-ui/core";
import "../Styles/login.css";
import theme from "./theme";

function Login() {
  return (
    <div>
        <div  className="Background" style={{backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}></div>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={0}
          justify="center"
          direction="row"
          className="center-vertical"
        >
          <Paper variant="elevation" elevation={2} className="loginpaper">
            <form action="">
              <Grid item>
                <TextField id="" label="Username" />
              </Grid>
              <Grid item>
                <TextField id="" label="Password" />
              </Grid>
              <Box mt={2} alignItems="center" display="flex" justifyContent="center">
                <Button variant="contained" color="primary">
                  Submit
                </Button>
                <Button color="secondary">Register</Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Login;
