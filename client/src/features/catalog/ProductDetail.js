import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import agent from "../../app/api/agent";
import NotFund from "../../app/errors/NotFund";
import LoadingComponents from "../../app/layout/Loadingcomponents"
function ProductDetail() {
    const [product, setProduct] = useState(null);
    const [loading, setloading] = useState(true);
    let { id } = useParams();
    
    useEffect(() => {
        agent.Catalog.details(parseInt(id))
            .then(response => setProduct(response))
            .catch(error => console.log(error))
            .finally(() => setloading(false));
    },[id])
    
    if (loading) return <LoadingComponents message={"Product loading..."}/>
    if (!product) return <NotFund/>

    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={product.pictureUrl}  alt={product.name} style={{width: "100%"}}/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h3">
                    {product.name}
                </Typography>
                <Divider sx={{mb: 2}}/>
                <Typography variant="h4" color="secondary.main">
                    ${(product.price/100).toFixed(2)}
                </Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity In Stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}
export default ProductDetail;