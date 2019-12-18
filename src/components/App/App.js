import React, {Component} from 'react';
import './App.css';
import Header from "../Header/header";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'

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
                    <Route exact path={"/ingredients/new"} render={() => <AddIngredient isEdit={false}/>}>
                    </Route>
                    <Route exact path={"/ingredients"}
                           render={(props) => <Ingredients ingredients={this.state.ingredients} {...props} />}>
                    </Route>
                    <Route exact path={"/ingredient/:name/edit"}
                           render={(props) => <AddIngredient isEdit={true} {...props}/>}>
                    </Route>
                    <Route exact path={"/"} render={() => <AddIngredient isEdit={false}/>}>
                    </Route>
                    <Redirect to={"/"} />

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
