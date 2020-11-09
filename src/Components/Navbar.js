import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon,
    Grid
} from '@material-ui/core'
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail

}from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../images/Poza_pass.jpg'
import Footer from './Footer'

// CSS Styles
const useStyles = makeStyles( theme =>({
    menuSliderContiner: {
        width: 250,
        background: "#511",
        height: "100%",
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem:{
        color: "tan"
    }
}))

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: '/resume'
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: '/portfolio'
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: '/contact'
    }


]

const Navbar = () => {
    const classes = useStyles()
    const [state, setState]= useState({
        right: false
    })

const toggleSlider = ((slider, open) =>()=> {
    setState({...state, [slider]:open})

})

    const sideList = slider =>(
        <Box  className={classes.menuSliderContiner} onClick={toggleSlider(slider, false)} component="div">
            <Avatar className={classes.avatar} src={avatar} alt="Avatar"/>
            <Divider/>
            <List >
            {menuItems.map((lsItem, key) =>
                        <ListItem button key={key} component={Link} to={lsItem.listPath}>
                            <ListItemIcon className={classes.listItem} >
                                {lsItem.listIcon}
                            </ListItemIcon>
                            <ListItemText primary={lsItem.listText} className={classes.listItem}/>
                        </ListItem>
                        
                        
                        )}
            </List>
        </Box>
    )
    return (
        <>
        
        <Box component="nav">
            <AppBar position="fixed" style={{background:"#222"}} >
                <Toolbar>
                    <IconButton onClick={toggleSlider('right',true)}>
                    <MenuIcon style={{color:"tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}} >
                        Alex Cocan Portfolio
                    </Typography>
                    <MobilRightMenuSlider open={state.right} anchor='right' onClose={toggleSlider('right',false)}>
                    {sideList('right')}
                    <Footer/>
                    </MobilRightMenuSlider>
                    
                </Toolbar>


            </AppBar>

        </Box>
        </>
    )
}

export default Navbar
