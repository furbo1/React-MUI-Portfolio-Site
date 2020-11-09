import React,{useState} from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import Navbar from '../Components/Navbar'
import {TextField, Typography, Button, Grid, Box,createMuiTheme, ThemeProvider, MuiThemeProvider} from '@material-ui/core'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SendIcon from '@material-ui/icons/Send'
import {db} from './Firebase'

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
    },
    textArea:{
        marginTop: '1rem',
        background: '#233',
        color: 'tan',
        borderColor: 'tan',
        borderRadius: 5,
        fontSize: '1.2rem',
        width: '300px'

    },
    

}))

const CrazyInput = withStyles({
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

const Contact = () => {

    const classes = useStyles()
  

    const [name, setName] = useState('')
    const [email,setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('');

    
    const handleSubmit =(e)=>{
        e.preventDefault()
        
        db.collection("contacts").add({
            name: name,
            email: email,
            company:company,
            message: message
        })
        .then(()=> {
            alert("Message has been sent!")
        })
        .catch((error)=>
        alert(error.message))
        setName('')
        setEmail('')
        setCompany('')
        setMessage('')
    }
  
    return (
        <Box component='div' style={{background:'#233',height:'100vh'}}>
            <Navbar/>
            <Grid container justify='center'>
                <Box component='form' className={classes.form} noValidate autoComplete="off">
                    <Typography variant='h5' className={classes.button}>
                        HIRE OR CONTACT ME!

                    </Typography>
                   
                    <CrazyInput fullWidth={true} 
                    className={classes.margin}
                    onChange={(e)=> setName(e.target.value) }
                    required
                    id="filled-required"
                    label='Name' 
                    variant='outlined' 
                   
                    inputProps={{style:{color:'tan'}}}
                    margin='dense'
                    value={name}
                    type="text"
                    autoFocus
                    
                    />
                   
                    <br/>
                    
                    <CrazyInput fullWidth={true} 
                    className={classes.margin}
                    required
                    id="filled-required"
                    label='Email' 
                    variant='outlined'
                    inputProps={{style:{color:'tan'}}}
                    margin='dense'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    type="email"
                    autoFocus
                    />
                    
                    <br/>
                   
                    <CrazyInput 
                    className={classes.margin}
                    fullWidth={true} 
                    required
                    id="filled-required"
                    label='Company' 
                    variant='outlined'
                    margin='dense'
                    value={company}
                    onChange={(e)=> setCompany(e.target.value)}
                    type="text"
                    inputProps={{style:{color:'tan'}}}
                    autoFocus
                    />
                    
                    <br/>
                    <TextareaAutosize 
                    fullWidth={true}
                    required
                    id="filled-required"
                    aria-label="minimum height" 
                    rowsMin={5} 
                    placeholder="Your message" 
                    variant='outlined' 
                    inputProps={{style:{color:'tan'}}}
                    margin='dense'
                    className={classes.textArea}
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                    
                    />
                    <br/>
                    <Button className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon/>} onClick={handleSubmit}>
                        CONTACT ME
                    </Button>

                </Box>

            </Grid>
            
        </Box>
    )
}

export default Contact
