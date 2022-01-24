import axios from "axios";
import React from "react"
import { useHistory, useParams } from "react-router-dom"

export default function ProductPage(){
    const [Product, setProduct] = React.useState(null);
    const [err, setErr] = React.useState(false);

    const {id} = useParams();
    const history = useHistory();

    const handleBack = () => {
        history.push("/Products");
    }

    React.useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
        .then((res) => {
            setProduct(res.data)
        })
        .catch(err => setErr(true))
    }, [])
    


    return err? (
        <div>
            <h4>Invalid Product</h4>
            <button onClick={handleBack} style={{width:"30%", justifyContent:"center"}}>Go Back</button>
        </div> )
    : (
        <>
            <div style={{display:"flex", flexDirection:"column", background:"pink", width:"60%", margin:"30px auto", padding:"1rem"}}>
                <div><h2>Product Name: {Product?.name}</h2></div>
                <div><h4>Product price: {Product?.price}</h4></div>
                
            </div>
            <button onClick={handleBack} style={{width:"30%", justifyContent:"center"}}>Go Back</button>
        </>
    )
}