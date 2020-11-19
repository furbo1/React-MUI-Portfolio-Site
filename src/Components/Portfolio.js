import React from 'react'
import Navbar from '../Components/Navbar'
import {makeStyles} from '@material-ui/core/styles'
import {Box, Grid, Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography } from '@material-ui/core'
import Project1 from '../images/realestate.jpg'
import Project2 from '../images/Screenshot_2020-10-19 Simple Life Website.png'
import Project3 from '../images/Snip20201019_2.png'
import Project4 from '../images/MovieBooking.png'
import Project5 from '../images/MUIReactPortfolio.png'
import Project6 from '../images/mernblog.jpg'
import Project7 from '../images/smart.png'
import Project8 from '../images/travelapp.jpg'

const useStyles = makeStyles({
    mainContainer:{
        background: '#233',
        height: '100%'
    },
    cardContainer: {
        maxWidth: 360,
        margin: '3rem',
        margin: '5rem auto'
    }

})

function Portfolio() {
    const classes = useStyles()
    return (
        <Box component='div' className={classes.mainContainer}>
            <Navbar/>
            <Grid container justify="center" >
            <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img' 
                            alt='Frist Project'
                            height='440px'
                            image={Project7}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                Project 5
                                </Typography>
                                <Typography variant='body2' color="textSecondary" component='p'>
                                Smart brain AI application using Carifai API to detect faces from pictures. Built with React,Express,Node & PostgresQL.
                    
                                </Typography>
                                

                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary' href='https://github.com/furbo1/smart-brain-app-fend/blob/main/README.md' target="_blank">
                                    See Code
                                </Button>
                                <Button size='small' color='primary' href='https://smart-brain-app-fend.herokuapp.com/' target="_blank">
                                    Live demo
                                </Button>
                            </CardActions>


                            

                        
                    </Card>


                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img' 
                            alt='Frist Project'
                            height='440px'
                            image={Project8}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                Travel App
                                </Typography>
                                <Typography variant='body2' color="textSecondary" component='p'>
                                Travel app built ontop of three APIs(geonames,darksky & pixabay), using JavaScript, Node & Express.
                    
                                </Typography>
                                

                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary' href='https://github.com/furbo1/UD-FED-Travel-App-Portfolio' target="_blank">
                                    See Code
                                </Button>
                                <Button size='small' color='primary' href='https://github.com/furbo1/UD-FED-Travel-App-Portfolio' target="_blank">
                                    Live demo
                                </Button>
                            </CardActions>
                    </Card>


                </Grid>
            <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea href='https://alexcocan.com/'  target="_blank">
                            <CardMedia component='img' 
                            alt='Frist Project'
                            height='400px'
                            image={Project5}
                            
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                Portfolio Site
                                </Typography>
                                <Typography variant='body2' color="textSecondary" component='p'>
                                Responsive web site built with React Materialize UI & Bootstrap4.
                    
                                </Typography>
                                

                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary' href='https://github.com/furbo1/React-MUI-Portfolio-Site'  target="_blank">
                                    Source Code
                                </Button>
                                <Button size='small' color='primary' href='https://alexcocan.com/'  target="_blank">
                                    Live demo
                                </Button>
                            </CardActions>


                            

                        
                    </Card>


                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea href='https://furbo1.github.io/Luxury-Estates-Portfolio-site/'  target="_blank">
                            <CardMedia component='img' 
                            alt='Frist Project'
                            height='400px'
                            image={Project6}
                            
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                MERN Blog example
                                </Typography>
                                <Typography variant='body2' color="textSecondary" component='p'>
                                MERN blog built with Materialize UI, MongoDB, Express JS and Node JS.
                    
                                </Typography>
                                

                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary' href='https://github.com/furbo1/MERN-Blog-Portfolio'  target="_blank">
                                    Source Code
                                </Button>
                                <Button size='small' color='primary' href='https://github.com/furbo1/MERN-Blog-Portfolio'  target="_blank">
                                    Live demo
                                </Button>
                            </CardActions>


                            

                        
                    </Card>


                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea href='https://furbo1.github.io/Luxury-Estates-Portfolio-site/'  target="_blank">
                            <CardMedia component='img' 
                            alt='Frist Project'
                            height='400px'
                            image={Project1}
                            
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                Luxury Real Estate Web site
                                </Typography>
                                <Typography variant='body2' color="textSecondary" component='p'>
                            Responsive three page web site built with HTML, CSS, JavaScript & Bootstrap4.
                    
                                </Typography>
                                

                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary' href='https://github.com/furbo1/Luxury-Estates-Portfolio-site'  target="_blank">
                                    Source Code
                                </Button>
                                <Button size='small' color='primary' href='https://furbo1.github.io/Luxury-Estates-Portfolio-site/'  target="_blank">
                                    Live demo
                                </Button>
                            </CardActions>


                            

                        
                    </Card>


                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea href='https://furbo1.github.io/Simple-Life-Blog-Portfolio/' target="_blank">
                            <CardMedia component='img' 
                            alt='Frist Project'
                            height='400px'
                            image={Project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                Simple Life Blog
                                </Typography>
                                <Typography variant='body2' color="textSecondary" component='p'>
                                A simple and responsive three page blog, built with only with HTML and CSS.
                    
                                </Typography>
                                

                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary' href='https://github.com/furbo1/Simple-Life-Blog-Portfolio' target="_blank">
                                    Source Code
                                </Button>
                                <Button size='small' color='primary' href='https://furbo1.github.io/Simple-Life-Blog-Portfolio/' target="_blank">
                                    Live demo
                                </Button>
                            </CardActions>


                            

                        
                    </Card>


                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea href='https://furbo1.github.io/Exchange-Rate-Calculator-Portfolio/' target="_blank">
                            <CardMedia component='img' 
                            alt='Frist Project'
                            height='400px'
                            image={Project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                Exchange Rate Calculator
                                </Typography>
                                <Typography variant='body2' color="textSecondary" component='p'>
                                For this project I used the Fetch exchange rates from API (https://api.exchangerate-api.com) to display two currencies in real time.
                                
                    
                                </Typography>
                                

                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary' href='https://github.com/furbo1/Exchange-Rate-Calculator-Portfolio' target="_blank">
                                    Source Code
                                </Button>
                                <Button size='small' color='primary' href='https://furbo1.github.io/Exchange-Rate-Calculator-Portfolio/' target="_blank">
                                    Live demo
                                </Button>
                            </CardActions>


                            

                        
                    </Card>


                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea href='https://furbo1.github.io/Movie-Seat-Booking-App-Portfolio/' target="_blank">
                            <CardMedia component='img' 
                            alt='Frist Project'
                            height='400px'
                            image={Project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                Movie Seat Booking App
                                </Typography>
                                <Typography variant='body2' color="textSecondary" component='p'>
                                For this project I used only HTML, CSS and Vanilla JavaScript. Users are able to select movie, number of seats, and price will update based on selection.
                    
                                </Typography>
                                

                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary' href='https://github.com/furbo1/Movie-Seat-Booking-App-Portfolio' target="_blank">
                                    Source Code
                                </Button>
                                <Button size='small' color='primary' href='https://furbo1.github.io/Movie-Seat-Booking-App-Portfolio/' target="_blank">
                                    Live demo
                                </Button>
                            </CardActions>


                            

                        
                    </Card>


                </Grid>
                
            </Grid>
            

                
        </Box>
    )
}

export default Portfolio

