import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FloatingActionButtons from "./Contador";
import "./Item.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useState } from "react";

import "./ItemListContainer.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
    aling: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 350,
  },
}));

function Item({ products }) {
  const classes = useStyles();

  const [visibilidad, setVisibilidad] = useState(false);

  function ChangeVisibilidad() {
    return setVisibilidad(!visibilidad);
  }

  return (
    <div className="divItem">
      {Array.from(products).map((product) => (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={product.avatar_url}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      {product.login}
                    </Typography>
                    <Typography component="p">{product.height}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Agregar al carrito
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={ChangeVisibilidad}
                  >
                    Ver más
                  </Button>
                  <FloatingActionButtons stock={product.id} />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          {visibilidad ? <ItemDetailContainer product={product} /> : null}
        </div>
      ))}
    </div>
  );
}

export default Item;
