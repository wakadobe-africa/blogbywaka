import { createContext,useState } from "react";


export const ProductContext = createContext();


// create provider and all component must return something
export const ProductProvider = ({children})=> {
     // which context you wan uses
      
    const defaultProducts = [
        {
        id:2000,
        name:"Hollandia",
        price:2000
    },
    {
        id:2220,
        name:"Active",
        price:1500
    },
]
   
    const [products,setProducts] = useState(defaultProducts);
    function delete_products(id){
         const filteredProducts = products.filter((prod)=>{
            return prod.id != id
         });  
         console.log(filteredProducts)
         setProducts(filteredProducts)         
        
        
    }
    return(
        <ProductContext.Provider value={{products,setProducts,delete_products}}>
            {children}
        </ProductContext.Provider>
    )
}