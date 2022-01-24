import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar(){
    return (
        <div className={styles.header}>
            <Link to="/" style={{textDecoration: "none"}}><div>Home</div></Link>
            <Link to="/products" style={{textDecoration: "none"}}><div>Products</div></Link>          
        </div>
    )
}