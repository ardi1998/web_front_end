import React, {Component} from "react";

export default class Ingredient extends Component {

    componentDidMount() {
        this.props.onChange(this.props.match.params.name);
    }

    render() {
        return (
            <div>
                <h1>
                    {this.props.ingredient.name}
                </h1>
                {<ul>
                    {this.props.pizzas.map(o => (<li key={o.name}>{o.name}</li>))}
                </ul>}
            </div>
        )
    }

}
