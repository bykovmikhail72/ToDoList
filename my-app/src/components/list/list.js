import React from "react";
import ListItem from "../list-item";

import './list.sass';

const List = ({posts, onDelete, onToggleMatched, onToggleImportant}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="posts">
                <ListItem
                {...itemProps}
                onDelete={() => {onDelete(id)}}
                onToggleMatched={() => {onToggleMatched(id)}}
                onToggleImportant={() => {onToggleImportant(id)}}
                />
            </li>
        )
    })

    return (
        <ul className="postList">
            {elements}
        </ul>
    )
}
export default List;