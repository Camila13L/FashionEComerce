import { AppBar, Switch, Toolbar, Typography } from "@mui/material";



function Header({ darkMode, handleChange }) {
    return(
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Switch
                checked={darkMode}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                />
                <Typography variant="h6">
                    RE - STORE
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;