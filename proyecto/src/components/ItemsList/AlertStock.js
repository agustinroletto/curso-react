import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import "./AlertStock.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AlertStock() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="warning">NO HAY STOCK</Alert>
    </div>
  );
}
