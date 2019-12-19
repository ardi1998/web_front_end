import React, {Component} from 'react';
import './App.css';
import Header from "../Header/header";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Pizza from "../Pizza/Pizza";
import AddIngredient from "../AddIngredient/AddIngredient";
import Ingredients from "../Ingredients/Ingredients";
import Ingredient from "../Ingredient/Ingredient";
import ingredientsService from "../../repositories/ingredientsRepository";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            ingredient: {},
            pizzas: []
        };
        this.addIngredient = this.addIngredient.bind(this);
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
                           render={(props) => <AddIngredient isEdit={false} {...props}
                                                             onAddIngredient={(ingredient) => this.addIngredient(ingredient)}/>}>
                    </Route>
                    <Route exact path={"/ingredients"}
                           render={(props) => <Ingredients {...props}
                                                           ingredients={this.state.ingredients}
                                                           onDelete={(name) => this.deleteIngredient(name)}/>}>
                    </Route>
                    <Route exact path={"/ingredient/:name"}
                           render={(props) => <Ingredient
                               {...props}
                               pizzas={this.state.pizzas}
                               ingredient={this.state.ingredient}
                               onChange={(name) => this.getIngredient(name)}/>}>
                    </Route>
                    <Route exact path={"/ingredient/:name/edit"}
                           render={(props) =>
                               <AddIngredient isEdit={true}
                                              {...props}
                                              onEditIngredient={(ingredient) => this.editIngredient(ingredient)}/>}>
                    </Route>
                    <Route exact path={"/"}
                           render={(props) => <AddIngredient isEdit={false}
                                                             onAddIngredient={(ingredient) => this.addIngredient(ingredient)}
                                                             {...props} />}>
                    </Route>
                    {/*<Redirect to={"/"}/>*/}

                </div>
            </Router>
        );
    }

    getIngredient(name) {
        ingredientsService.getIngredient(name)
            .then(ingredient => this.setState({ingredient: ingredient.data}));

        ingredientsService.getPizzas(name)
            .then((pizzas) => {
                this.setState({pizzas: pizzas.data});
            });
    }

    editIngredient(ingredient) {
        ingredientsService.editIngredient(ingredient)
            .then(o => window.location.replace(`/ingredient/${o.data.name}`));
    }

    addIngredient(ingredient) {
        this.setState((prev) => {
            return {
                ingredients: prev.ingredients.concat([ingredient])
            }
        });
        ingredientsService.addIngredient(ingredient)
            .then(o => window.location.replace(`/ingredient/${o.data}`));
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
