import React from "react";
import axios from "axios";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";

export default function Products(){
    const [data, setData] = React.useState([]);

    React.useEffect( async() => {
        await axios.get("http://localhost:3000/products")
        .then(res => {
            setData(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.cont}>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>View</th>
                    </tr>    
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><Link to={`/products/${item.id}`}>Click for details</Link></td>
                        </tr>) )
                    }
                </tbody>
            
            </table>
        </div>
    )
}