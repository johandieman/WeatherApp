import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";

const useStyles = makeStyles((theme) => ({
  base: {
    maxWidth: 500,
    margin: "auto",
  },
  media:{
    paddingTop:'46%'
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.base}>
      <CardContent>
        <CardMedia 
          className={classes.media}
        />

        <Typography variant="h5" component="h2">
          {/* location */}

        </Typography>




      </CardContent>
    </Card>
  );
}
