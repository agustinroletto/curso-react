import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="divLoading">
      <CircularProgress className="circulo" />
    </div>
  );
}
