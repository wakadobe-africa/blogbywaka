import Header from "./components/Header";
import Main from "./components/main";
import Sidebar from "./components/sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "./style.css"
const App = ()=>{
const appName = "Chopchop App"; //assue you are fetching from db or api
let walletBalance = 1000;
let isLoggedIn = true;
const students = ["Yemi", "David","Scoffield","Ojule"];
const products = [
  {id:1,name:"book",price:1000},
  {id:2,name:"pencil",price:500},
  {id:3,name:"stapler",price:900},
  {id:4,name:"rice",price:1500}
];
  return (
    //jsx
     <div className="container">
      {isLoggedIn ? <Dashboard/> : <Login/>}
        <h1>{walletBalance}</h1>
        <Header brand={appName} wb={walletBalance}/>
      <div className="row myrow">
        <Main products={products}/>
        <Sidebar students={students}/>
      </div>
      <Footer wb={walletBalance}/>
      </div>
)
}







export default App;