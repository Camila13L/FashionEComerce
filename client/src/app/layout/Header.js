import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
const midLinks = [
    { title: "catalog", path: "/catalog" },
    { title: "about", path: "/about" },
    { title: "contact", path: "/contact" },
]

const rightLinks = [
    { title: "login", path: "/login" },
    { title: "register", path: "/register" },
]

const navStyles = {
    color: "inherit",
    textDecoration: "none",
    typography: "h6",
    "&:hover": {
        color: "grey.500"
    },
    "&.active": {
        color: "secondary.main"
    }
}

function Header({ darkMode, handleChange }) {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between",
                alingItems: "center"
            }}
            >
                <Box display="flex" alignItems="center">
                    <Switch
                        checked={darkMode}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <Typography
                        variant="h6"
                        exact
                        component={NavLink}
                        to="/"
                        sx={navStyles}
                    >
                        RE - STORE
                    </Typography>
                </Box>
                <List sx={{ display: "flex" }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            key={path}
                            to={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display="flex" alignItems="center">
                    <IconButton size="large" sx={{ color: "inherit" }}>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: "flex" }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                key={path}
                                to={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>


            </Toolbar>
        </AppBar>
    );
}

export default Header;