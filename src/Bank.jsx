import Counter from "./bank_components/Counter"
import  Atm from "./bank_components/Atm"
import Pos from "./bank_components/Pos"
import {useState} from "react";
import Success from "./bank_components/Success"
import Warning from "./bank_components/Warning"
const Bank = ()=>{
//    let accountBalance = 10000; //react ignores anything stored in a variable
    const [accountBalance,setAccountBalance] = useState(10000)
    const [amount,setAmount] = useState(0);
    function update_amount(e){
        setAmount(e.target.value);
    }
    return(
        <div className="container">
            <h1>Bank Application:{accountBalance}</h1>
            {accountBalance > 1000 ? <Success/>: <Warning/>}
            {/* accountBalance=accountBalance-100;console.log(accountBalance) */}
            <button className="btn btn-danger" onClick={()=>{
                if (amount < accountBalance){
                    setAccountBalance(accountBalance-amount)}
                else{
                    alert('oga you no go hustle')
                }
            }}>Withdraw</button>
            <input type="number" value={amount} onChange={update_amount}/>
            <button className="btn btn-success" onClick={()=>{
                    setAccountBalance(accountBalance+Number(amount))
                    }}>Deposit</button>
            <Counter ab={accountBalance}/>
            <Atm ab={accountBalance}/>
            <Pos ab={accountBalance}/>
        </div>
    )
}

export default Bank