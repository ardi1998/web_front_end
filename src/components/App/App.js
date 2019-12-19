import React from 'react';
import './App.css';
import Header from "../Header/header";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

import Pizza from "../Pizza/Pizza";
import AddIngredient from "../AddIngredient/AddIngredient";
import Ingredients from "../Ingredients/Ingredients";
import Ingredient from "../Ingredient/Ingredient";
import ingredientsService from "../../repositories/ingredientsRepository";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: []
        };

    }

    componentDidMount() {
        this.getIngredients();
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
                           render={(props) => <Ingredients {...props}
                                                           ingredients={this.state.ingredients}
                                                           onDelete={(name) => this.deleteIngredient(name)}/>}>
                    </Route>
                    <Route exact path={"/ingredient/:name"}
                           render={(props) => <Ingredient/>}>
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

    getIngredient(name) {
        //TODO: get req to API
    }

    addIngredient(ingredient) {
        // TODO: send ingredient to API
    }

    deleteIngredient(name) {
        ingredientsService.deleteIngredient(name)
            .then(() => {
                this.setState((prev) => {
                    return {ingredients: prev.ingredients.filter(o => o.name !== name)}
                });
            });
    }

    getIngredients() {
        ingredientsService.fetchIngredients()
            .then((ingredients) => {
                this.setState({ingredients: ingredients.data.content});
            });
    }


}

export default App;
