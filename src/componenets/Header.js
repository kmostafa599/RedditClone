import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    makeStyles,
    Grid
}
    from '@material-ui/core'
import { MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Reddit from '../icons/Reddit.svg'
import { Link } from 'react-router-dom';
import PostFormContainer from './PostFormContainer';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const useStyles = makeStyles((theme) => ({
    appBar: {
        color: "#ffff"
    },
    search: {
        border: props => props ? `solid 2px red` : ''
    },
    newPostButton: {
        color: "#E11D00"
    }

}))
const ResponsiveAppBar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [border, setBorder] = React.useState(false)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const classes = useStyles(border)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
                <Box sx={{ flexGrow: 1, marginBottom: "8rem" }}>
                    <AppBar position="static" color='#ffff' sx={{ display: { xs: 'none', md: 'flex' } ,boxShadow: "none",} } >
                        <Toolbar>
                            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
                            <div style={{ width: "8rem" }}>
                                <Link to='/'>
                                    <img style={{ width: "100%" }} src={Reddit} />
                                </Link>
                                
                            </div>
                            <Search className={classes.search} style={{ margin: "auto" }} onFocus={() => { setBorder(true); console.log(border) }}
                                onBlur={() => { setBorder(false); console.log(border) }} >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <div>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, border: "solid 2px red", borderColor: "red" }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Button onClick={handleOpen}  variant='contained' style={{ borderRadius: "15px", color: "#ffff", backgroundColor: "#E11D00", border: "none", boxShadow: "none" }} >New Post</Button>
                                <PostFormContainer open={open} handleClose={handleClose}/>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
            

    );
};
export default ResponsiveAppBar;