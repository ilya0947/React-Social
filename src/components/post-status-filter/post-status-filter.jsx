import React from "react";
import { Button } from "reactstrap";
import './post-status-filter.css';

export default class PostStatusFilter extends React.Component{
    constructor(q) {
        super(q)

        this.buttons = [
            {name: 'all', label: 'Всё'},
            {name: 'like', label: 'Понравилось'}
        ]
    }

    render(){
 
        const {cbFilter, filter} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name;
            // console.log(active)
            const clazz = active ? 'info' : 'outline-secondary'
            return (
                <Button key={name}
                    onClick={() => cbFilter(name)}
                    color={clazz}
                >{label}</Button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
                {/* <button className="btn btn-info">Всё</button> */}
                {/* <button className="btn btn-outline-secondary">Понравилось</button> */}
            </div>
        )
    }
}