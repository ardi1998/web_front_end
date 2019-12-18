import React, {Component} from "react";


// TODO: in case it is edit it should make call to api
class AddIngredient extends Component {

    isEdit = false;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            spicy: false,
            veggie: false,
            amount: 0.0
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        this.isEdit = this.props.isEdit;
        if (this.isEdit) {
            // TODO: make call to API to set currentIngredient
        }
    }

    render() {
        return (this.getContent());
    }

    getContent() {
        return (
            <div className="row">
                <form className="card" onSubmit={this.handleSubmit}>
                    <h4 className="text-upper text-left">Add/Edit Ingredient</h4>
                    <div className="form-group row">
                        <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Ingredient name</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="name" placeholder="Ingredient name"
                                   value={this.state.name} onChange={this.handleTextChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Amount</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="amount" placeholder="Amount"
                                   value={this.state.amount} onChange={this.handleTextChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="veggie" className="col-sm-4 offset-sm-1 text-left">Veggie</label>
                        <div className="col-sm-6 col-xl-4">
                            <input type="checkbox" className="form-control" id="veggie"
                                   checked={this.state.veggie}
                                   onChange={this.handleCheckboxChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="spicy" className="col-sm-4 offset-sm-1 text-left">Spicy</label>
                        <div className="col-sm-6 col-xl-4">
                            <input type="checkbox" className="form-control" id="spicy"
                                   checked={this.state.spicy}
                                   onChange={this.handleCheckboxChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div
                            className="offset-sm-1 col-sm-3  text-center">
                            <button
                                type="submit"
                                className="btn btn-primary text-upper">
                                Save
                            </button>
                        </div>
                        <div
                            className="offset-sm-1 col-sm-3  text-center">
                            <button
                                type="button"
                                className="btn btn-warning text-upper" onClick={this.handleReset}>
                                Reset
                            </button>
                        </div>
                        <div
                            className="offset-sm-1 col-sm-3  text-center">
                            <button
                                type="button"
                                onClick={this.handleCancel}
                                className="btn btn-danger text-upper">
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    handleReset() {
        this.setState({
            name: '',
            amount: 0.0,
            spicy: false,
            veggie: false
        });
    }

    handleSubmit(event) {
        //TODO: sent request to API to save currentIngredient
        event.preventDefault();
        console.log(this.state);
    }

    handleTextChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleCheckboxChange(event) {
        this.setState({[event.target.id]: event.target.checked});
    }

    handleCancel(event) {

    }
}


export default AddIngredient;
