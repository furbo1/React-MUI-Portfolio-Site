import React from 'react'
import {Typography, Avatar, Grid, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import avatar from '../images/Poza_pass.jpg'
import Typed from 'react-typed'
import { Translate } from '@material-ui/icons'

//CSS Styles
const useStyles = makeStyles(theme =>({
    avatar:{
        height: theme.spacing(15),
        width: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: 'tomato'
    },
    subtitle:{
        color: 'tan',
        marginBottom: '3rem'
    },
    typedContainer:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1

    },
    parallax:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '30vh',
        fontWeight: '700',
        fontSize: '55px',
        color: 'tomato',
        margin: 0,
        padding: 0,
    }

}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify='center'>
            <Avatar src={avatar} alt="Avatar" className={classes.avatar}/>
            </Grid>
            <Typography variant="h4" className={classes.title}>
                <Typed strings={['Alex Cocan']} typeSpeed={60} />


            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
                <Typed strings={['Web Design', 'Web Development',"Interested to find out more?Let's talk!"]} typeSpeed={60} backSpeed={60} loop/>


            </Typography>
            <Box component='div' className={classes.parallax} > <i class='fab fa-html5' ></i> <i class='fab fa-css3-alt' ></i>  <i class='fab fa-js-square' ></i> <i class='fab fa-react' ></i> <i class='fab fa-node' > </i> <i class='fab fa-git' ></i> 
            </Box>
            
        </Box>
    )
}

export default Header
