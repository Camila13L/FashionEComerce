import {Button, Container, Divider, Paper, Typography} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function ServerError() {
    const navigate = useNavigate();
    const { state } = useLocation();
    return(
        <Container component={Paper}>
            {state?.error ? (
                <>
                    <Typography variant="h3" color='error' gutterBottom>Server Error</Typography>
                    <Divider/>
                    <Typography>{state.error || "internal server error"}</Typography>
                </>
            ):(
                <Typography variant="h5" gutterBottom>Server Error</Typography>
            )}

            <Button onClick={() => navigate("/catalog")}>Go back to the store</Button>
        </Container>
    );
}
export default ServerError;