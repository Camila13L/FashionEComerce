import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
function ProductList({products}) {
    return(
        <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={3}>
                <ProductCard key={product.id} product={product}/>
              </Grid>
            ))}
        </Grid>
    );
}
export default ProductList;