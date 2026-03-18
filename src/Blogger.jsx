import Nav from "./blogger_components/Nav";
import Header from "./blogger_components/Header";
import Main from "./blogger_components/Main";
import Footer from "./blogger_components/Footer";  
import { useEffect, useState } from "react"; 




const Blogger = ()=>{
    //a state to store if the application is loading or not
    const [loading,setLoading] = useState(true)
    //a state to store whatever comes from the api
    const [posts,setPosts] = useState([])
    //a state to store error
    const [error,setError] = useState(false)
    // how to send request to another application
    function fetch_all_posts(){
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                setLoading(false)
                setError(false)
                setPosts(data)
            })
            .catch(function(err){
                setLoading(false)
                setError(true)
                setPosts([])
            });
    }
    useEffect(()=>{
        fetch_all_posts()
    }, []);
    return (
        <>
            <Nav />
            <Header />
            <Main posts={posts} loading={loading} error={error} />
            <Footer />
        </>
    )
}

export default Blogger;