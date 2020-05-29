import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'


class LandingPage extends Component{

    componentDidMount()
    {

    }

    render()
    {
        return(
            <div className = "LandingPage">
                <Header />
                <MainContent />
                <Footer />
            </div>
            
        )
    }

}

export default LandingPage