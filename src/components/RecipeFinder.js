import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header'
import Footer from './Footer'
import RecipeCard from './RecipeCard'

class RecipeFinder extends Component{

    constructor()
    {
        super()
        this.state = {
            loading : false,
            recipes : []
        }
    }

    componentDidMount()
    {
        this.setState({
            loading : true
        })

        fetch("https://myfridgeapi.herokuapp.com/myfridge/")
        .then(response => response.json())
        .then(data => this.setState({
            loading : false,
            recipes : data
        }))
        
    }

    


    render()
    {

        console.log(this.state.recipes)

        if(this.state.loading){
            return(
                <div>
                    <Header />
                    <h1>loading</h1>
                    <Footer />
                </div>
                
            )
        }
        return(
            <div className = "RecipeFinder"> 
                <Header />
                <div className = "container">
                    <div className = "row">
                            {this.state.recipes.map(item => <div className = "col-lg-4 my-2"><RecipeCard key = {item.id} values = {item} /></div>)}
                    </div>
                    
                </div>
                
                <Footer />
            </div>
            
        )
    }

}

export default RecipeFinder