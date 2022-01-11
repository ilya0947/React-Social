import React from "react";
import './post-list-item.css';

export default class PostListItem extends React.Component{
    
    
    render() {

        // console.log(this.props);

        const {important, like, label, id, cb, onToggle} = this.props;
        
        let classNames = 'app-list-item d-flex justify-content-between';
        
        important ? classNames += ' important' : classNames += '';

        like ? classNames += ' like' : classNames += '';

        return (
            <div className={classNames}>
                <span onClick={() => onToggle(id, 'like')} className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm"
                        onClick={() => onToggle(id, 'important')}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button onClick={cb} className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }    
}