const Dashboard = ()=>{
    let appmode = "Light"
    if (appmode=="Dark"){
        return (
        <div className="row bg-dark text-primary">
            <h1>Dashboard</h1>
            <p>You are welcome</p>
        </div>
    )
    }
    else{
        return (
        <div className="row bg-light">
            <h1>Dashboard</h1>
            <p>You are welcome</p>
        </div>
    )
    }
}

export default Dashboard;