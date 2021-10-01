import React from "react";
import {withRouter} from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, match, link }) => (
    <div 
        className={`${size} menu-item`}
        onClickt={() => history.push(`${match.url}${link}`)}
        >
        <div 
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

// gives access to the history prop which only resides in the Homepage.
// This prevents prop drilling
export default withRouter(MenuItem);