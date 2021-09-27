import React, { Component } from 'react';
import AddForm from '../add-form';
import AppHeader from '../app-header';
import List from '../list'

import './app.sass'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: [
                {label: "Приготовить еду", favorite: false, checked: true, id: 1},
                {label: "Позвонить в Name", favorite: false, checked: false, id: 2},
                {label: "Купить запчасти для машины", favorite: false, checked: false, id: 3}
            ]
        }   
        // const maxId = 4;
    }
    render() {
        return (
            <div className='container'>
                <AppHeader/>
                <AddForm/>
                <List
                posts={this.state.data}/>
            </div>
        )
    }
}