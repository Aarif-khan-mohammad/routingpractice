import React from "react";
import Header from "../Header/index.js";
import BlogsList from "../BlogsList/index.js";

const Home = () =>{
    return(
        <div className='main-container'>
            <Header/>
            <section>
                <BlogsList/>
            </section>
            
        </div>
    )
}

export default Home