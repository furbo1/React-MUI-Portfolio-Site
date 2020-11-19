import React,{useState} from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import Navbar from '../Components/Navbar'
import {TextField, Typography, Button, Grid, Box,createMuiTheme, ThemeProvider, MuiThemeProvider} from '@material-ui/core'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {FormControl,Input} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'
import {db} from '../Firebase'
import emailjs from 'emailjs-com'


const useStyles = makeStyles(theme =>({
    form:{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
    },
    // button:{
    //     marginTop: '1rem',
    //     color: 'tomato',
    //     borderColor: 'tomato'
    // },
    // textArea:{
    //     marginTop: '1rem',
    //     background: '#233',
    //     color: 'tan',
    //     borderColor: 'tan',
    //     borderRadius: 5,
    //     fontSize: '1.2rem',
    //     width: '300px'

    // },
    

}))

// const CrazyInput = withStyles({
//     root:{
//     '& label.Mui-focused':{
//         color:'tomato',
//     }
//     ,
//     '& label':{
//         color: 'tan'
//     },
//     "& .MuiOutlinedInput-root":{
//         "& fieldset":{
//             borderColor:"tan"
//         },
//         "&:hover fieldset":{
//             borderColor: 'tan'
//         },
//         '&.Mui-focused fieldset':{
//             borderColor: 'tan'
//         }
//     }
// }
// })(TextField)

const Contact = () => {

    const classes = useStyles()
  

    // const [name, setName] = useState('')
    // const [email,setEmail] = useState('')
    // const [company, setCompany] = useState('')
    // const [message, setMessage] = useState('');

    
    // const handleSubmit =(e)=>{
    //     e.preventDefault()
        
    //     db.collection("contacts").add({
    //         name: name,
    //         email: email,
    //         company:company,
    //         message: message
    //     })
    //     .then(()=> {
    //         alert("Message has been sent!")
    //     })
    //     .catch((error)=>
    //     alert(error.message))
    //     setName('')
    //     setEmail('')
    //     setCompany('')
    //     setMessage('')
    // }

    const sendEmail =(e) =>{
        e.preventDefault()
        emailjs.sendForm('service_kvocpja', 'template_xavihu9', e.target, 'user_zatSlk70v8LZDAKtajs09')
          .then((result) => {
              console.log(result.text);
              alert("Message has been sent!")
              
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
       
      }
  
    return (

        
        <Box component='div' style={{background:'#233',height:'100vh'}}>
            <Navbar/>
            <Grid container justify='center'>
           
                
            
                
                <Box component='form' className={classes.form} noValidate autoComplete="off" >
                
         
                   
                    <form  className={classes.form} onSubmit={(e) => sendEmail(e)}>
                    <Typography variant='h5'  style={{ color: 'tomato'}}>
                        HIRE OR CONTACT ME!

                        </Typography>
                        <br/>
                        <input type="hidden" name="contact_number" />
                        <label style={{color: 'tan',fontSize: '1.2rem'}}>Name</label>
                        <input 
                        type="text" 
                        name="name"
                        style={{background:'#233',color: 'tan',borderColor:'tan',borderRadius: 5,fontSize: '1.2rem',width: '300px',marginTop:"0.5rem", marginBottom:"0.5rem"}}
                        required
                         />
                        <label style={{color: 'tan',fontSize: '1.2rem'}}>Email</label>
                        <input type="email" name="email" 
                        required
                        style={{background:'#233',color: 'tan',borderColor:'tan',borderRadius: 5,fontSize: '1.2rem',width: '300px',marginTop:"0.5rem",marginBottom:"0.5rem"}}
                        />
                        <label style={{color: 'tan',fontSize: '1.2rem'}}>Company</label>
                        <input type="text" name="company" 
                        required
                        style={{background:'#233',color: 'tan',borderColor:'tan',borderRadius: 5,fontSize: '1.2rem',width: '300px',marginTop:"0.5rem",marginBottom:"0.5rem"}}
                        />
                        <label style={{color: 'tan',fontSize: '1.2rem'}}>Message</label>
                        <textarea name="message" 
                        required
                        style={{background:'#233',color: 'tan',borderColor:'tan',borderRadius: 5,fontSize: '1.2rem',width: '300px', height: "150px",marginTop:"0.5rem",marginBottom:"0.5rem"}}
                        
                        />
                        <input type="submit" value="CONTACT ME" 
                        style={{background:'#233',color: 'tomato',fontSize: '1.1rem',marginTop:"1rem", borderColor:"tomato",width: '300px',borderRadius: 5,cursor:"pointer"}}
                        
                        />
                    </form>
                   
                    {/* <TextField fullWidth={true} 
                    className={classes.margin}
                    onChange={(e)=> setName(e.target.value) }
                    required
                    id="filled-required"
                    label='Name' 
                    variant='outlined' 
                   
                    inputProps={{style:{color:'tan'}}}
                    margin='dense'
                    value={name}
                    name={name}
                    type="text"
                    autoFocus
                    
                    />
                   
                    <br/>
                    
                    <TextField fullWidth={true} 
                    className={classes.margin}
                    required
                    id="filled-required"
                    label='Email' 
                    variant='outlined'
                    inputProps={{style:{color:'tan'}}}
                    margin='dense'
                    value={email}
                    name="email"
                    onChange={(e)=> setEmail(e.target.value)}
                    type={email}
                    autoFocus
                    />
                    
                    <br/>
                   
                    <TextField 
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
                    name={company}
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
                    name={message}
                    onChange={(e)=> setMessage(e.target.value)}
                    
                    />
                    <br/>
                    <Input type="submit" className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon/>} onClick={(e)=> handleSubmit(e)}>
                        CONTACT ME
                    </Input> */}

                </Box>
                
                
            </Grid>
            
        </Box>
    )
}

export default Contact
