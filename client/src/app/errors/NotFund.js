import { Button, Divider, Typography } from "@mui/material";
import { Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";

function NotFund() {
    return(
        <Container component={Paper} sx={{height: 200}}>
            <Typography gutterBottom variant="h3">Ooops - we cannot find what you are looking for</Typography>
            <Divider/>
            <Button fullWidth component={Link} to='/catalog'></Button>
        </Container>
    );
}
export default NotFund;