import React, { Component } from "react";

import "./add-form.sass";

export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <form className="add-form">
                <input className="add-form__input" placeholder=" Добавить новую задачу" type="text"/>
                <button className="add-form__btn" type="submit">+</button>
            </form>
        )
    }
}