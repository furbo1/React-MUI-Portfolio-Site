import React from 'react'
import Navbar from '../Components/Navbar'
import {makeStyles} from '@material-ui/core/styles'
import {Box, Grid, Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography } from '@material-ui/core'
import Project1 from '../images/Screenshot_2020-10-19 Luxury homes.jpg'
import Project2 from '../images/Screenshot_2020-10-19 Simple Life Website.png'
import Project3 from '../images/Snip20201019_2.png'

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
                                Simple, responsive three page web site built with HTML, CSS, JavaScript & Bootstrap4.
                    
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
                                <Button size='small' color='primary 'href='https://furbo1.github.io/Simple-Life-Blog-Portfolio/' target="_blank">
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
                        <CardActionArea>
                            <CardMedia component='img' 
                            alt='Frist Project'
                            height='440px'
                            image={Project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                Project 4
                                </Typography>
                                <Typography variant='body2' color="textSecondary" component='p'>
                                Lorem imspum dadadadadadad
                    
                                </Typography>
                                

                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    See Code
                                </Button>
                                <Button size='small' color='primary'>
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
                            image={Project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                Project 5
                                </Typography>
                                <Typography variant='body2' color="textSecondary" component='p'>
                                Lorem imspum dadadadadadad
                    
                                </Typography>
                                

                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    See Code
                                </Button>
                                <Button size='small' color='primary'>
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
                            image={Project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                Project 6
                                </Typography>
                                <Typography variant='body2' color="textSecondary" component='p'>
                                Lorem imspum dadadadadadad
                    
                                </Typography>
                                

                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    See Code
                                </Button>
                                <Button size='small' color='primary'>
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

