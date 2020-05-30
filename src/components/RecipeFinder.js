import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Header from './Header'
import Footer from './Footer'
import RecipeCard from './RecipeCard'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));




class RecipeFinder extends Component{

    constructor()
    {
        super()
        this.state = {
            loading : false,
            recipes : [],
            inputIngredients : []
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

        const recipeObj = this.state.recipes.map(item => <div key = {item.id} className = "my-2 col-lg-6"><RecipeCard key={item.id} values = {item} /></div>)

        return(
            <div className = "RecipeFinder"> 
                
                <Header />

                <div className = "container">

                <form>
                    <div className="input-group input-group-lg mb-3">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                    </div>
                </form>
                

                <Chip />

                    <div className = "row">
                        {recipeObj}
                    </div>
                    
                </div>
                
                <Footer />
            </div>
            
        )
    }

}

export default RecipeFinder