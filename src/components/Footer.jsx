const Footer = (props) =>{
    //props are immutable
    return(
         <div className="col-md-12">
            
         <h4>Footer section</h4>
         <h3>Your wallet balance is: {props.wb}</h3>
        </div>
    )
}

export default Footer;