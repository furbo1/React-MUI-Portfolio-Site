import React from 'react';
import Home from './Components/Index'
import {Route} from 'react-router-dom'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from '../src/Components/Resume'
import { Router } from '@material-ui/icons';
import Portfolio from '../src/Components/Portfolio'
import Contact from '../src/Components/Contact'

function App() {
  return (
    <>

    <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/contact" component={Contact}/>
    </>
  );
}

export default App;
