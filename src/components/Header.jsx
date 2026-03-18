import styles from "./Header.module.css";
const Header = ({brand,wb})=>{
// logic and data
    // console.log(props) props is an object
    const appname = "ChopChop FastFood";
    
    let productscount = 10;
    const rowStyle = {
        minHeight: "200px",
        border: "2px solid red",
        borderRadius:"5px",
        marginTop:"20px",
        padding:"50px 20px"
    }
    return(
        <div className="container">
        <div className={`row ${styles.myrow}`} style={rowStyle}>
            <div className="col-md-12">
                <h1>{ brand }</h1>
                <h2>{wb}</h2>
                <h4>Total Products:{productscount++}</h4>  
                <button className="btn btn-primary" onClick={()=>{alert(`You are welcome to ${appname}`)}}>Click me</button>
            </div>
         </div>
        </div>
        
    )


}





export default Header;