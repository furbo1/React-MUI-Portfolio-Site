import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography,Box} from '@material-ui/core'
import Navbar from '../Components/Navbar'
import {List,ListItemText} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    mainContainer:{
        background: '#233'
    },
    timeLine:{
        position: 'relative',
        padding: '1rem', 
        margin: '0 auto',
        "&:before":{
            content: "''",
            position: 'absolute',
            height: '100%',
            border: '1px solid tan',
            right: '40px',
            top: 0,
        },
        "&:after":{
            content:"''",
            display:"table",
            clear:'both',
        },
        [theme.breakpoints.up("md")]: {
            padding:'2rem',
            "&:before": {
                left: 'calc(50% - 1px)',
                right: 'auto',
            }
        },
    },
    timeLineItem:{
        padding: '1rem',
        borderBottom: "2px solid tan",
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after':{
            content: "''",
            position: 'absolute'
        },
        '&:before':{
            content: "''",
            position: 'absolute',
            right: '-0.625rem',
            top: "calc(50% - 5px)",
            borderStyle: 'solid',
            borderColor: 'tomato tomato transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]:{
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)':{
                float: 'right',
                margin: '1rem',
                borderColor: 'tan'
            },
            '&:nth-of-type(2n):before':{
                right: 'auto',
                left: '-0.625rem',
                borderColor: 'transparent transparent tomato tomato'
            }
        },
    },
        timeLineYear:{
            textAlign:'center',
            maxWidth: '9.375rem',
            margin: '0 3rem 0 auto',
            fontSize: '1.8rem',
            background: 'tomato',
            color: 'white',
            lineHeight: 1,
            padding: '0.5rem 0 1rem',
            "&:before":{
                display: 'none',
            },
            [theme.breakpoints.up("md")]:{
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)':{
                float: 'none',
                margin: '0 auto',
            },
            '&:nth-of-type(2n):before':{
                display: 'none'
            }
            }
    },
    heading: {
        marginTop: '2rem',
        color: 'tomato',
        padding:'3rem 0',
        textTransform: 'uppercase'
    },
    subHeading:{
        color: 'white',
        padding: 0,
        textTransform: 'uppercase'

    }
}))



const Resume = () => {
    const classes = useStyles()
    return (
        <>
        <Navbar/>
        <Box component="header" className={classes.mainContainer}>
            <Typography variant='h4' align='center' className={classes.heading}>
                Education & Experience Highlights
                <Typography variant="h6" align='center' className={classes.subHeading}>
                    Access detailed CV on <a href='https://www.linkedin.com/in/alex-cocan-59a392139/' style={{color:"tomato"}} target="_blank">Linkedin {'  '}<i className="fab fa-linkedin-in" style={{color:"lightblue"}}></i>

</a>

                </Typography>
            </Typography>
            
            <Box component='div' className={classes.timeLine}>
                <Typography  variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`} data-aos="fade-right">
                    1994-1998
                </Typography> 
               
                <Box component='div' align='center' className={classes.timeLineItem} data-aos="fade-right">
                    <Typography variant='h6' align='center' className={classes.subHeading}>
                        High School - T.Vladimirescu - Math-Information Technologies profile
                    </Typography>
                    <Typography variant='body1' align='center' style={{color:'tomato'}}>
                        First interaction with Progamming
                    </Typography>
                    <Typography variant='subtitle1' align='left' style={{color:'tan'}}>
                        I learned the basics of programming. Among others,I was exposed to C,Pascal & Turbo Pascal ,MSDoS commands and logical schemes. 

                    </Typography>

                </Box>
                <Typography  variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`} data-aos="fade-left">
                    1998-2005
                </Typography> 
               
                <Box component='div' align='center' className={classes.timeLineItem} data-aos="fade-left">
                    <Typography variant='h6' align='center' className={classes.subHeading}>
                        University of Agricultural Studies & Veterrinary Medicine - Faculty of Management and Economical Engineering
                    </Typography>
                    <Typography variant='body1' align='center' style={{color:'tomato'}}>
                        Master Degree - Management and Rural Development
                    </Typography>
                    <Typography variant='subtitle1' align='left' style={{color:'tan'}}>
                        <List>
                            <ListItemText>
                                - Leraned a set of essential Management and Social skills that served as strong fundation and guide in my life.
                            </ListItemText>
                        </List>
                        

                    </Typography>

                </Box>
                <Typography  variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`} data-aos="fade-up">
                    2005-2010
                </Typography> 
               
                <Box component='div' align='center' className={classes.timeLineItem} data-aos="fade-up">
                    <Typography variant='h6' align='center' className={classes.subHeading}>
                        Cage Manager
                    </Typography>
                    <Typography variant='body1' align='center' style={{color:'tomato'}}>
                        Carnival Corporation
                    </Typography>
                    <Typography variant='subtitle1' align='left' style={{color:'tan'}}>
                        <List>
                        <ListItemText>
                        - Entrusted with conducting Casino counts on slots coin and bill counts, tables games soft counts, etc., and on auxiliary revenues streams including Bingo, Lotto, Scratch Cards, etc.); prepared the Casino Financial Statements with a high degree of accuracy.
                        </ListItemText>
                        <ListItemText>
                        - Safeguarded the company's assets, being in charge of Casino's Main Vault contents.
                        </ListItemText>
                        </List>
                    


                    </Typography>

                </Box>
                <Typography  variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`} data-aos="fade-up">
                    2010-2014
                </Typography> 
               
                <Box component='div' align='center' className={classes.timeLineItem} data-aos="fade-up">
                    <Typography variant='h6' align='center' className={classes.subHeading}>
                    Casino Manager | Assistant Casino Manager
                    </Typography>
                    <Typography variant='body1' align='center' style={{color:'tomato'}}>
                        Carnival Corporation
                    </Typography>
                    <Typography variant='subtitle1' align='left' style={{color:'tan'}}>
                        <List>
                        <ListItemText>
                        - Directed teams of 12-40 employees across casino operations, generating $1M+ USD in monthly gaming revenue.
                        </ListItemText>
                        <ListItemText>
                        - Focused on maximizing Casino's revenues through implementation of various fun events and activities, introducing and promoting new games and products while continuously monitoring each game and/or promotion's performance and looking for ways to improve its effectiveness, ensuring an adequate work schedules, reducing liabilities and expenditures, etc. 
                        </ListItemText>
                        <ListItemText>
                        - Oversaw revenue reporting and final verification of the Casino Financial Statement, ensuring all revenues are accurately recorded and reported.
                        </ListItemText>
                        <ListItemText>
                        - Cultivated a strong culture around the Casino team, with emphasis on customer experience  professionalism and team work.
                        </ListItemText>
                    


</List>


                    </Typography>

                </Box>
                <Typography  variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`} data-aos="fade-up">
                    2014-2018
                </Typography> 
               
                <Box component='div' align='center' className={classes.timeLineItem} data-aos="fade-up">
                    <Typography variant='h6' align='center' className={classes.subHeading}>
                        Fleet Cage Operations Manager
                    </Typography>
                    <Typography variant='body1' align='center' style={{color:'tomato'}}>
                        Carnival Corporation, Miami,USA Head Office
                    </Typography>
                    <Typography variant='subtitle1' align='left' style={{color:'tan'}}>
                        <List>
                            <ListItemText>
                                - Established accounting and compliance policies for more than 100 properties, as well as constantly revisited and updated existing procedures.
                            </ListItemText>
                            <ListItemText>
                                - Led 100+ Casino Management teams by example, providing comprehensive compliance and accounting support while promoting “idea sharing” within the organization.
                            </ListItemText>
                            <ListItemText>
                                - Spearheaded the development, training, and implementation of various multi-million-dollar programs, including the Anti-Money Laundering (AML) and Junket Operations programs.
                            </ListItemText>
                            <ListItemText>
                                - Accelerate the professional development of staff through strategic training, evaluations, and promotions.
                            </ListItemText>
                           
                            <ListItemText>
                                - Analyzed budgeting, expenses, and staff performance for the casino floor using various metrics; generated financial analysis and other reports.
                            </ListItemText>
                            <ListItemText>
                                - Proposed and implemented initiatives that saved the company millions of dollars, such as reducing games liabilities with high jackpots/payouts.
                            </ListItemText>

                        </List>

                    </Typography>

                </Box>
                <Typography  variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`} data-aos="fade-up">
                    2019-Present
                </Typography> 
               
                <Box component='div' align='center' className={classes.timeLineItem} data-aos="fade-up">
                    <Typography variant='h6' align='center' className={classes.subHeading}>
                        JavaScript Full Stack Web Development
                    </Typography>
                    <Typography variant='body1' align='center' style={{color:'tomato'}}>
                        Udacity - Web Development Nanodegree | Udemy |Scrimba | CodersLab
                    </Typography>
                    <Typography variant='subtitle1' align='left' style={{color:'tan'}}>
                        <List>
                            <ListItemText>
                                - Working to continuaasly improve my software development skills by taking various online courses, and building projects.
                            </ListItemText>
                            <ListItemText>
                                - Technologies studied include: HTML,CSS,JavaScript,Bootstrap,React.js, Node.js, Express.js,Git.
                            </ListItemText>
                            

                        </List>

                    </Typography>

                </Box>
                <Typography  variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`} data-aos="fade-up">
                    Additional Online Courses Attended
                </Typography> 
               
                <Box component='div' align='center' className={classes.timeLineItem} data-aos="fade-up">
                    <Typography variant='h6' align='center' className={classes.subHeading}>
                        Mini-MBA | Online Marketing | Design Thinking | Metacognition & Creativity | Psychology | Physics
                    </Typography>
                    <Typography variant='body1' align='center' style={{color:'tomato'}}>
                    Kauffan Fellow Academy | University of Illinois Urbana-Campaign | Stanford University | Florida Satate University
                    </Typography>
                    <Typography variant='subtitle1' align='left' style={{color:'tan'}}>
                        <List>
                            <ListItemText>
                                - I attend 2-4 courses per year in various filelds, see Linkedin profile for details.
                            </ListItemText>
                        </List>

                    </Typography>

                </Box>
                <Typography  variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`} data-aos="fade-up">
                    Publications
                </Typography> 
               
                <Box component='div' align='center' className={classes.timeLineItem} data-aos="fade-up">
                    <Typography variant='h6' align='center' className={classes.subHeading}>
                        Web Development | CleanTech | Future | Environment
                    </Typography>
                    <Typography variant='body1' align='center' style={{color:'tomato'}}>
                    dev.to | cleantecnica.com | planetsave.com
                    </Typography>
                    <Typography variant='subtitle1' align='left' style={{color:'tan'}}>
                        <List>
                            <ListItemText>
                                <a href="https://dev.to/furbo1/read-more-read-less-button-html-vs-javascript-which-one-do-you-prefer-j5n" style={{color:"tan"}} target="_blank">- Read More Read Less Button… HTML vs JavaScript, which one do you prefer?</a>
                            </ListItemText>
                            <ListItemText>
                                 <a href="https://planetsave.com/2017/11/12/mapping-the-global-efforts-to-restore-the-worlds-forests/" style={{color:"tan"}} target="_blank">- Mapping The Global Efforts To Restore The World’s Forests!</a>
                            </ListItemText>
                            <ListItemText>
                                <a href="https://cleantechnica.com/2017/10/02/lab-grown-meat-arrived-good-news-planet/" style={{color:"tan"}} target="_blank">- Lab-Grown Meat Has Arrived, And It’s Good News For The Planet!</a>
                            </ListItemText>
                            <ListItemText>
                                <a href="https://cleantechnica.com/2017/11/13/amazon-future-food/" style={{color:"tan"}} target="_blank">- Amazon & The Future Of Food</a>
                            </ListItemText>
                        </List>

                    </Typography>

                </Box>
            </Box>
            
            
            
        </Box>
        </>
    )
}

export default Resume
