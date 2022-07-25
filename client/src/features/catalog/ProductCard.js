import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardHeader,
    Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "secondary.main" }} >
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
              }
              title={product.name}
              titleTypographyProps={{
                sx: {fontWeight: "bold", color: "primary.main"}
              }}
            />
            <CardMedia
                sx={{height: 140, backgroundSize:  "contain", bgcolor:"primary.light"}}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color="secondary" variant="h5">
                    ${(product.price/100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                  component={Link}
                  to={`/catalog/${product.id}`}
                  size="small"
                  exact="true"
                >
                    View
                </Button>
                <Button size="small">Add to card</Button>
            </CardActions>
        </Card>
    );
}
export default ProductCard; 