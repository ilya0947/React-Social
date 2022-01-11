import React from "react";
import './post-add-form.css';

export default class PostAddForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
        this.handleValue = this.handleValue.bind(this);
    }

    handleValue(e) {
        this.setState({
            value: e.target.value
        });
    }

    onSubmit = (e) => {
        const {addPost} = this.props;
        e.preventDefault();
        addPost(this.state.value);
        this.setState({
            value: ''
        });
    }


    render() {

        const {value} = this.state;

        return (
            <form onSubmit={this.onSubmit} className="bottom-panel d-flex">
                <input type="text"
                    value={value}
                    onChange={this.handleValue}
                    placeholder="Abra"
                    className="form-control new-post-label"
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary" 
                    >Добавить</button>
            </form>
        )
    }
}