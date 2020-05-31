import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./MainContent.css"

class MainContent extends Component{

    render()
    {
        return(
            <div className="row my-5 my-3 mx-5">
            
            <div className = "col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
                <img src = "./img4.jpeg"></img>
            </div>
            
            
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center mx-auto">
                <h1 className="heading my-4 py-4">Stop <span className = "red">staring</span> inside your <span className="blue">refrigerator</span></h1>
                <h4 className="mb-5 pb-3 pt-2 subheading">Just provide us with the ingredients available at your home, and we will suggest you with easy to cook food recipes!</h4>
                
                <Link to = "/recipe">
                    <a className="button2">Try Out Now</a>
                </Link>
                
            </div>

            </div>
           
        )
    }
}

export default MainContent