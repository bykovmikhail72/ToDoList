import React, { Component } from "react";

import './app-header.sass'

export default class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: 0,
            complete: 0
        }
    }
    render() {
        return (
            <header className="header">
                <h1 className="header__label">ToDo list</h1>
                <div className="header__posts">Всего записей: {this.state.posts}, из них выполнены: {this.state.complete}</div>
            </header>
        )
    }
}