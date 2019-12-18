import React, {Component} from 'react';
import './App.css';
import Header from "../Header/header";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Pizza from "../Pizza/Pizza";
import AddIngredient from "../AddIngredient/AddIngredient";
import Ingredients from "../Ingredients/Ingredients";
import {getAllIngredients} from "../../repositories/ingredientsRepository";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: []
        }
    }

    componentDidMount() {
        this.loadIngredients();
    }

    render() {
        return (
            <Router>
                <Header/>
                <div className="container">
                    <Route path={"/pizzas"} render={() => <Pizza/>}>
                    </Route>
                    <Route path={"/ingredients/new"} render={() => <AddIngredient/>}>
                    </Route>
                    <Route exact path={"/ingredients"}
                           render={() => <Ingredients ingredients={this.state.ingredients}/>}>
                    </Route>
                </div>
            </Router>
        );
    }

    loadIngredients() {
        const ingredients = getAllIngredients();
        this.setState({ingredients});
    }
}

export default App;
