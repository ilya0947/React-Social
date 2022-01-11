import React from "react";
import './search-panel.css';

export default class SearchPanel extends React.Component {
    constructor(p) {
        super(p);

        this.state = {
            value: ''
        }
    }

    setValue = (e) => {
        const value = e.target.value;
        this.setState({value});
        this.props.updateSearch(value);
    }

    render() {
        const {value} = this.state;


        return (
            <input 
                onChange={this.setValue}
                value={value}
                className="form-control search-input"
                type="text" 
                placeholder="Поиск"

            />
        )
    }
}