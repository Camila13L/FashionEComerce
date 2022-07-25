import React, { useState } from 'react'
import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, Typography } from "@mui/material";

import agent from '../../app/api/agent';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
    const [validationError, setValidationError] = useState([]);
    let navigate = useNavigate();

    function getServerError() {
        agent.testErrors.get500Error()
            .then(() => console.log("you dont seethis"))
            .catch( error => navigate("/server-error", {state: {error: "error"}}));
    }

    function getValidationError() {
        agent.testErrors.getValidationError()
            .then(() => console.log("we dont hace to see this"))
            .catch(error => setValidationError(error));
    };


    return (
        <Container>
            <Typography gutterBottom variant="h2">Errors for testion purposes</Typography>
            <ButtonGroup fullWidth>
                <Button variant="contained" onClick={() => agent.testErrors.get400Error().catch(error => console.log(error))}>Test 400 error</Button>
                <Button variant="contained" onClick={() => agent.testErrors.get401Error().catch(error => console.log(error))}>Test 401 error</Button>
                <Button variant="contained" onClick={() => agent.testErrors.get404Error().catch(error => console.log(error))}>Test 404 error</Button>
                <Button variant="contained" onClick={getServerError}>Test 500 error</Button>
                <Button variant="contained" onClick={ getValidationError }>Validation error</Button>
            </ButtonGroup>
            {validationError.length > 0 &&
             <Alert severity="error">
                <AlertTitle>Validation error</AlertTitle>
                <List>
                    {validationError.map(error => (
                        <ListItem key={error}>
                            {error}
                        </ListItem>
                    ))}
                </List>
             </Alert>
            }
        </Container>
    );
}

export default AboutPage;