import React, {Component} from 'react';
import './App.css';
import Header from "../Header/header";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

import Pizza from "../Pizza/Pizza";
import AddIngredient from "../AddIngredient/AddIngredient";
import Ingredients from "../Ingredients/Ingredients";
import ingredientsService from "../../repositories/ingredientsRepository";

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
                    <Route exact path={"/ingredients/new"}
                           render={(props) => <AddIngredient isEdit={false} {...props} />}>
                    </Route>
                    <Route exact path={"/ingredients"}
                           render={(props) => <Ingredients ingredients={this.state.ingredients} {...props} />}>
                    </Route>
                    <Route exact path={"/ingredient/:name/edit"}
                           render={(props) => <AddIngredient isEdit={true} {...props}/>}>
                    </Route>
                    <Route exact path={"/"} render={(props) => <AddIngredient isEdit={false} {...props} />}>
                    </Route>
                    <Redirect to={"/"}/>

                </div>
            </Router>
        );
    }

    loadIngredients() {
        ingredientsService
            .fetchIngredients()
            .then((ingredients) => this.setState({ingredients: ingredients.data.content}));

    }
}

export default App;
