import React from "react";
import {Link} from "react-router-dom";

class Ingredients extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        this.handleDetails = this.handleDetails.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="row">
                {this.getSearch()}
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

    getSearch() {
        return (
            <input type="text" value={this.state.search} onChange={this.handleChange}/>
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
            return (<tr key={o.name}>
                <td scope="col">{o.name}</td>
                <td scope="col">{o.amount}g</td>
                <td scope="col">{o.veggie}</td>
                <td scope="col">{o.spicy}</td>
                <td scope="col">
                    <button className="btn btn-sm btn-secondary" onClick={() => this.handleEdit(o.name)}>
                        <span className="fa fa-edit"/>
                        <span><strong>Edit</strong></span>
                    </button>
                    <button onClick={() => this.handleRemove(o.name)} className="btn btn-sm btn-outline-secondary ">
                        <span className="fa fa-remove"/>
                        <span><strong>Remove</strong></span>
                    </button>
                    <button className="btn btn-sm btn-outline-dark"
                            onClick={() => this.handleDetails(o.name)}>
                        <span><strong>Details</strong></span>
                    </button>
                </td>
            </tr>)
        })
        }

        </tbody>);
    }

    handleRemove(name) {
        this.props.onDelete(name);
    }

    handleDetails(name) {
        this.props.history.push(`/ingredient/${name}`);
    }

    handleEdit(name) {
        this.props.history.push(`/ingredient/${name}/edit`);
    }

    handleChange(event) {
        this.setState({search: event.target.value});
        this.props.onSearch(event.target.value);
    }
}

export default Ingredients;

