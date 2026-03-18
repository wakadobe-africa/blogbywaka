// import { useState } from "react"

// const Create = ({products,setProducts})=>{
//     const [name,setName] = useState("");
//     const [price,setPrice] = useState("");
//     const [id,setId] = useState("");
    
//     function handleSubmit(e){
//         e.preventDefault();
//         if(name == ''||price==''){
//             alert('Fill in all fields')
//         }
//         else{
//             //generate a random id
//             let id = Date.now();
//             setId(id);
//             //combine everything to form an an object
//             const data ={
//                 id:id,
//                 name:name, 
//                 price:price
//             }
//             // console.log(data)
//             setProducts([...products,data]);
//         }
//     }
//     return (
//         <div className="row">
//             <div className="col-md-8 offset-md-2 pb-2">
//                 <form onSubmit={handleSubmit}> 
//                     <input type="text" className="form-control mb-2" placeholder="Product name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//                     <input type="number" className="form-control mb-2" placeholder="Product price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
//                     <button className="btn btn-primary">Add Product</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Create