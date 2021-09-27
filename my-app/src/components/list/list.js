import React from "react";
import ListItem from "../list-item";

import './list.sass';

const List = ({posts, onDelete}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="posts">
                <ListItem
                {...itemProps}
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