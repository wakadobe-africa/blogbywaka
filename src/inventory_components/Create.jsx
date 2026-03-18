import { useContext, useState } from "react"
import { ProductContext } from "../context/ProductContext";

const Create = ()=>{

    const{products,setProducts} = useContext(ProductContext);
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [id,setId] = useState("");
    const [form,setForm] = useState({
        id: "",
        name:"",
        price:""
    });
    function handleSubmit(e){
        e.preventDefault();
        if(form.name == ''||form.price==''){
            alert('Fill in all fields')
        }
        else{
            //generate a random id
            let id = Date.now();
            setForm({...form,id: id});
            //combine everything to form an an object
            // console.log(data)
            setProducts([...products,form]);
        }
    }
    function updateFormState(e){
        setForm({...form,[e.target.name]:e.target.value})
        console.log(e)
    } 
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2 pb-2">
                <form onSubmit={handleSubmit}> 
                    <input type="text" className="form-control mb-2" placeholder="Product name" value={form.name} onChange={updateFormState} name="name"/>
                    <input type="number" className="form-control mb-2" placeholder="Product price" value={form.price} onChange={updateFormState} name="price"/>
                    <button className="btn btn-primary">Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default Create