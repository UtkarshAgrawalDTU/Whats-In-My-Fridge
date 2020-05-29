import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header'
import Footer from './Footer'


class RecipeFinder extends Component{


    render()
    {
        return(
            
            <div className = "RecipeFinder"> 
                <Header />
                <h1>RecipeFinder</h1>
                <Footer />
            </div>
            
        )
    }

}

export default RecipeFinder