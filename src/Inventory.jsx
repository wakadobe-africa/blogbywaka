import Products from "./inventory_components/Products"
import Create from "./inventory_components/Create"
import { useContext, useState } from "react" 
import { AppNameContext } from "./context/AppNameContext" 
import { ProductContext } from "./context/ProductContext"


const Inventory = ()=>{
const {products} = useContext(ProductContext);
const {appName} = useContext(AppNameContext);
   
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                     <h1>{appName}</h1>
                     <h3>Number of Products: {products.length}</h3>
                <Create/>
                </div>
               <Products/>
            </div>
        </div>
    )
}

export default Inventory