import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import Navbar from '../Components/Navbar'
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles(theme =>({
    form:{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
    },
    button:{
        marginTop: '1rem',
        color: 'tomato',
        borderColor: 'tomato'
    }


}))

const Contact = () => {
    const classes = useStyles()
    const InputField = withStyles({
        root:{
        '& label.Mui-focused':{
            color:'tomato',
        }
        ,
        '& label':{
            color: 'tan'
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:"tan"
            },
            "&:hover fieldset":{
                borderColor: 'tan'
            },
            '&.Mui-focused fieldset':{
                borderColor: 'tan'
            }
        }
    }
    })(TextField)
    return (
        <Box component='div' style={{background:'#233',height:'100vh'}}>
            <Navbar/>
            <Grid container justify='center'>
                <Box component='form' className={classes.form} >
                    <Typography variant='h5' className={classes.button}>
                        HIRE OR CONTACT ME!

                    </Typography>
                    <InputField fullWidth={true} 
                    label='Name' 
                    variant='outlined' 
                    inputProps={{style:{color:'tan'}}}
                    margin='dense'
                    />
                    <br/>
                    <InputField fullWidth={true} 
                    label='Email' 
                    variant='outlined'
                    inputProps={{style:{color:'tan'}}}
                    margin='dense'
                    />
                    <br/>
                    <InputField 
                    fullWidth={true} 
                    label='Company' 
                    variant='outlined'
                    inputProps={{style:{color:'tan'}}}
                    margin='dense'
                    />
                    <br/>
                    <Button className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon/>}>
                        CONTACT ME
                    </Button>

                </Box>

            </Grid>
            
        </Box>
    )
}

export default Contact
