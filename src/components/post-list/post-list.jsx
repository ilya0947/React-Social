import React from "react";
import { ListGroup } from "reactstrap";
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css';

export const PostList = ({data, cbDel, onToggle}) => {
    const posts = data.map(post => {
        let elem;
        const {id} = post;
        // alert(id)
        if (id && Object.keys(post).length > 1) {
            elem = 
            <li key={id} className="list-group-item">
                <PostListItem 
                onToggle={onToggle}
                cb={() => cbDel(id)}  {...post}/>
            </li>
        }
        return elem;
    });

    return (
        <ListGroup className="app-list">
            {posts}
        </ListGroup>
        // <ul className="app-list list-group">
        // </ul>
    );
}