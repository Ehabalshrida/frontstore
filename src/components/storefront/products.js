import React, { useEffect, useLayoutEffect, useState } from "react";
import SuperAgent from "superagent";
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
import {
  addProduct,
  inventoryAction,
  activatedCategory,
  productDetails,
} from "../../store/actions";
import "../../style/product.scss";
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
  const classes = useStyle();
  const [productAPI, setproductAPI] = useState([]);
  useEffect(() => {
    props.activatedCategory();
    async function fetchData(params) {
      try {
        const data = await SuperAgent.get(
          "https://api-server-ps.herokuapp.com/product"
        );
        setproductAPI(data.body);
        console.log("hiiii", productAPI);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  async function addToCart(body) {
    try {
      let res = await SuperAgent.post(
        "https://api-server-ps.herokuapp.com/cartItem"
      ).send(body);
      console.log("res", res);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {productAPI.map((product) => {
          if (props.active === product.category) {
            return (
              <Grid item key={product.item} xs={12} sm={6} md={4}>
                <Card className={classes.card} className="prodect-card">
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography>
                      Category: {product.category} <br />
                      Price: {product.price} Jd <br />
                      Inventory: {product.inventory}
                      <br />
                      <hr />
                      Description: {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <a href="/details">
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => props.productDetails(product)}
                      >
                        
                        View
                        
                      </Button>
                      </a>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          } else if (props.active == "ALL") {
            return (
              <Grid item key={product.item} xs={12} sm={6} md={4}>
                <Card className={classes.card} className="prodect-card">
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography>
                      Category: {product.category} <br />
                      Price: {product.price} Jd <br />
                      Inventory: {product.inventory}
                      <br />
                      <hr />
                      Description: {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <a href="/details">
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => props.productDetails(product)}
                      >
                        
                        View
                        
                      </Button>
                      </a>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          }
        })}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  active: state.categories.activeCategory,
});
const mapDispatchToProps = {
  addProduct,
  inventoryAction,
  activatedCategory,
  productDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
