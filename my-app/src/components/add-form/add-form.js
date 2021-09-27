import React, { Component } from "react";

import "./add-form.sass";

export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
           text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form className="add-form"
            onSubmit={this.onSubmit}>
                <input 
                className="add-form__input" 
                placeholder=" Добавить новую задачу" 
                type="text"
                onChange={this.onChange}
                value={this.state.text}/>
                <button 
                className="add-form__btn" 
                type="submit">+</button>
            </form>
        )
    }
}