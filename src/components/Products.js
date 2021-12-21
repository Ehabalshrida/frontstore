import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addProduct, inventoryAction,getProduct,getData } from "../store/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const useStyle = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));


const Products = (props) => {
  const dispatch=useDispatch()
  useEffect(() => {
    props.getProduct(dispatch(getData()))
  }, [props.products])
  console.log(props.products);
  const classes = useStyle();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.products.map((product,idx) => {
          return (
            <Grid item key={product.item} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={product.image}
                  title={product.item}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.item}
                  </Typography>
                  <Typography>
                    Category: {product.category} <br />
                    Price: {product.price} Jd <br />
                    Inventory: {product.inventory}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(inventory) => {
                      if (product.inventory) {
                        props.addProduct(product);
                        props.inventoryAction(product);
                       
                      } else {
                        alert("empty item");
                      }
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  products: state.ReduceProducts.activeProduct,
  activeCategory: state.ReduceCategory.activeCategory,
});
const mapDispatchToProps = { addProduct, inventoryAction ,getProduct};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
