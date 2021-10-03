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
        const {text} = this.state;
        e.preventDefault();
        this.props.onAdd(text);
        this.setState({
            text: ''
        })
    }

    render() {
        const {text} = this.state;
        return (
            <form className="add-form"
            onSubmit={this.onSubmit}>
                <input 
                className="add-form__input" 
                placeholder=" Добавить новую задачу" 
                type="text"
                onChange={this.onChange}
                value={text}/>
                <button 
                className="add-form__btn" 
                type="submit">+</button>
            </form>
        )
    }
}