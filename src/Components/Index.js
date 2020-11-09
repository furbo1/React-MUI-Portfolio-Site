import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/styles'


const useStyles = makeStyles({
    particlesCanva:{
        position: 'absolute',
        opacity: '0.5'
    }
})



const Home = () => {
    const classes= useStyles()
    return (
        <>
            <Particles  canvasClassName={classes.particlesCanva}
            params={{
                particles:{
                    number:{
                        value:100,
                        density:{
                            enable: true,
                            value_area: 900
                        } 
                    },
                }
            }}
            
            
            />
           <Navbar/>
           <Header/>
        </>
    )
}

export default Home



