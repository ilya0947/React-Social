import React from "react";
import { AppHeader } from "../app-header/app-header";
import PostAddForm from "../post-add-form/post-add-form";
import { PostList } from "../post-list/post-list";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import SearchPanel from "../search-panel/search-pnel";
import nextId from 'react-id-generator';
import random from "../../random";
import './app.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {},
                4,
                [1,2,3,],
                {1: 1},
                {'id': 1},
                {label: `test${(Math.random()*100).toFixed(0)}`, important: true, like: false, id:  `${nextId()}`},
                {label: `test${(Math.random()*100).toFixed(0)}`, important: false, like: false, id: `${random()}`},
                {label: `test${(Math.random()*100).toFixed(0)}`, important: false, like: false, id: `${nextId()}`},
                {label: `test${(Math.random()*100).toFixed(0)}`, important: false, like: false, id: `${random()}`},
                {label: `test${(Math.random()*100).toFixed(0)}`, important: false, like: false, id: `${nextId()}`}
            ],
            term: '',
            filter: 'all'
        }

        this.delPost = (id) => {
            this.setState(({data}) => {
                const newArr = data.filter(post => post.id !== id);
                // const index = data.findIndex(post => post.id === id);
                // const before = data.slice(0, index);
                // const after = data.slice(index + 1);
                // const newArr = [...before, ...after];
                return {
                    data: newArr
                }
            })
        }

        this.addPost = (label) => {
            this.setState(({data}) => {
                const newArr = [...data, {label,  id: random()}];
                // newArr.push({label, id: random()});
                return {
                    data: newArr
                }
            })
        }

        this.onToggle = (id, trig) => {
            this.setState(({data}) => {
                const index = data.findIndex(post => post.id === id);
                const old = {...data[index]};
                const newItem = {...old, [trig]: !old[trig]}
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
                return {
                    data: newArr
                }
            })

            // console.log(this.state.data.filter(p => p.id === id)[0][trig])
        }
        this.updateSearch = this.updateSearch.bind(this);
    }

    search(posts, keyWord) {
        if (keyWord.length === 0) {
            return posts;
        }
        return posts.filter(post => post.label).filter(post => {
            return post.label.indexOf(keyWord) > -1;
        });
    }

    filterPosts = (posts, filter) => {
        if (filter === 'like') {
            return posts.filter(post => post.like);
        } else {
            return posts;
        }
    }

    handleFilter = (filter) => {
        this.setState({filter});
    }

    updateSearch(term) {
        this.setState({term})
    }

    

    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(post => post.like).length;
        const posts = data.filter(post => post.id && Object.keys(post).length > 1).length;

        const postSearch = this.filterPosts(this.search(data, term), filter);

        return (
            <div className="app">
                <AppHeader liked={liked} posts={posts}/>
                <div className="search-panel d-flex">
                    <SearchPanel updateSearch={this.updateSearch}/>
                    <PostStatusFilter filter={filter} cbFilter={this.handleFilter}/>
                </div>
                <PostList onToggle={this.onToggle} cbDel={this.delPost} data={postSearch}/>
                <PostAddForm addPost={this.addPost}/>
            </div>
        )
    }
}