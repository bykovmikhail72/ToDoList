import React, { Component } from "react";

import './list-item.sass';

export default class ListItem extends Component {

    onFavorite() {
        this.setState(({important}) => ({
            important: !important
        })) 
    }

    onChecked () {
        this.setState(({checked}) => ({
            checked: !checked
        }))
    }

    render() {
        const {label, onDelete, onToggleMatched, onToggleImportant, important, checked} = this.props;
        
        let classNamesFav = "post__fav fas fa-star";
        let classNamesChecked = "post__checked far fa-check-square";
        let classNamesText = "post__text";
 
        if (important) {
            classNamesFav += " favorite"
            classNamesText += " favorite"
        }

        if (checked) {
            classNamesChecked += " checked";
            classNamesText += " checked"
        }

        return (
            <div className="post">
                <div 
                className={classNamesText}
                >{label}</div>
                <div className="btn-container">
                    <i 
                    className={classNamesFav}
                    onClick={onToggleImportant}></i>
                    <i 
                    className={classNamesChecked}
                    onClick={onToggleMatched}></i>
                    <i 
                    className="post__trash fas fa-trash-alt"
                    onClick={onDelete}></i>
                </div>
            </div>
        )
    }
}