import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Navbar from "../Navbar";
import ProductPage from "../ProductPage";
import Products from "../Products";

export default function Routes(){
    return (
        <>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/products" exact>
                    <Products/>
                </Route>
                <Route path="/products/:id">
                    <ProductPage/>
                </Route>
                <Route>
                    Page Not Found 404
                </Route>
            </Switch>
            
        </>
        
    )
}