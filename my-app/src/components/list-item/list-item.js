import React, { Component } from "react";

import './list-item.sass';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: false,
            checked: false
        }
        this.onFavorite = this.onFavorite.bind(this);
        this.onChecked = this.onChecked.bind(this);
    }

    onFavorite() {
        this.setState(({favorite}) => ({
            favorite: !favorite
        })) 
    }

    onChecked () {
        this.setState(({checked}) => ({
            checked: !checked
        }))
    }

    render() {
        const {label} = this.props;
        const {favorite, checked} = this.state;
        let classNamesFav = "post__fav fas fa-star";
        let classNamesChecked = "post__checked far fa-check-square";
        let classNamesText = "post__text";
 
        if (favorite) {
            classNamesFav += " favorite"
            classNamesText += " favorite"
        }

        if (checked) {
            classNamesChecked += " checked";
            classNamesText += " checked"
        }

        return (
            <li className="post">
                <div className={classNamesText}>{label}</div>
                <div className="btn-container">
                    <i 
                    className={classNamesFav}
                    onClick={this.onFavorite}></i>
                    <i 
                    className={classNamesChecked}
                    onClick={this.onChecked}></i>
                    <i className="post__trash fas fa-trash-alt"></i>
                </div>
            </li>
        )
    }
}