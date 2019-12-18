import React from "react";
import {Link} from "react-router-dom";

class Ingredients extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="row">
                <h4 className="text-upper text-left">Ingredients</h4>
                <div className="table-responsive">
                    <table className="table tr-history table-striped small">
                        {this.getTableHead()}
                        {this.getTableBody()}
                    </table>
                </div>
                <Link className="btn btn-outline-secondary" to={"/ingredients/new"}>
                    <span><strong>Add new ingredient</strong></span>
                </Link>

            </div>
        )
    }

    getTableHead() {
        return (<thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Spicy</th>
            <th scope="col">Veggie</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>)
    }

    getTableBody() {
        return (<tbody>
        {this.props.ingredients.map(o => {
            return (<tr>
                <td scope="col">{o.name}</td>
                <td scope="col">{o.amount}g</td>
                <td scope="col">{o.veggie}</td>
                <td scope="col">{o.spicy}</td>
                <td scope="col">
                    <button className="btn btn-sm btn-secondary">
                        <span className="fa fa-edit"/>
                        <span><strong>Edit</strong></span>
                    </button>
                    <button className="btn btn-sm btn-outline-secondary ">
                        <span className="fa fa-remove"/>
                        <span><strong>Remove</strong></span>
                    </button>
                    <button className="btn btn-sm btn-outline-dark">
                        <span><strong>Details</strong></span>
                    </button>
                </td>
            </tr>)
        })
        }

        </tbody>);
    }

}

export default Ingredients;

