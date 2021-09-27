import React, { Component } from 'react';
import AddForm from '../add-form';
import AppHeader from '../app-header';
import List from '../list'

import './app.sass'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: [],
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
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
                favorite: false,
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


    render() {
        const {data} = this.state;
        let allPosts = data.length;
        const matched = data.filter((item) => item.checked).length;
        console.log(matched);


        return (
            <div className='container'>
                <AppHeader
                allPosts={allPosts}
                matched={matched}/>
                <AddForm
                onAdd={this.addItem}/>
                <List
                posts={data}
                onDelete={this.deleteItem}/>
            </div>
        )
    }
}