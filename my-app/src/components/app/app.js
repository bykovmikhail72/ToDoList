import React, { Component } from 'react';
import AddForm from '../add-form';
import AppHeader from '../app-header';
import List from '../list'

import './app.sass'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleMatched = this.onToggleMatched.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.maxId = 0;
        
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        if (body !== '') {
            body = body[0].toUpperCase() + body.slice(1).toLowerCase();
            
            const newItem = {
                label: body,
                important: false,
                checked: false,
                id: this.maxId++
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
        }
    }

    onToggleMatched(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const old = data[index];
            const newItem = {...old, checked: !old.checked};

            const newArr = [...data.slice(0, index), ...data.slice(index + 1), newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    componentDidUpdate(prevState) {
        if (this.state !== prevState) {
            const {data} = this.state;
            localStorage.setItem('posts', JSON.stringify(data));
        }
    }

    componentDidMount() {
        const posts = localStorage.getItem('posts');
        const newArr = JSON.parse(posts);
        if (posts) {
            this.setState({
                data: newArr
            })
        }
    }

    render() {
        const {data} = this.state;
        const allPosts = data.length;
        const matched = data.filter((item) => item.checked).length;
        const important = data.filter((item) => item.important).length;


        return (
            <div className='container'>
                <AppHeader
                    allPosts={allPosts}
                    matched={matched}
                    important={important}
                />
                <AddForm
                    onAdd={this.addItem}
                />
                <List
                    posts={data}
                    onDelete={this.deleteItem}
                    onToggleMatched={this.onToggleMatched}
                    onToggleImportant={this.onToggleImportant}
                />
            </div>
        )
    }
}