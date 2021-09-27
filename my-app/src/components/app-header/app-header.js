import React from "react";

import './app-header.sass'

const AppHeader = ({allPosts, matched}) => {
    return (
        <header className="header">
            <h1 className="header__label">ToDo list</h1>
            <div className="header__posts">Всего записей: {allPosts}, из них выполнены: {matched}, в избранных: 0</div>
        </header>
    )
}

export default AppHeader;