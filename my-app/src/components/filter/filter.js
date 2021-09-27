import React, { Component } from 'react'

import './filter.sass';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <form className="filter">
                <input type="text" placeholder="Что вы ищите?" className="filter__input"/>
                <button type="button" className="filter__btn">Искать</button>
            </form>
        )
    }
}