import React from "react";
import "./homepage.styles.scss";

const Homepage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">INFANTS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">TODDLERS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">KIDS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">WOMENS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">MENS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage;