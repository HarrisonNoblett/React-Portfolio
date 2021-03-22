import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "./Home.css"

function Home() {
    return (
        <div >
            <Header />
                <div className="container">
                    <div className="row p-2 m-5 shadow bg-body rounded bg-white">
                        <Card />
                        <div>
                            <h3 className="text-center">About Me: </h3>
                        </div>
                            <h5 className="text-center lh-base text-decoration-underline">
                                    I am a Full Stack Web Developer with knowledges of HTML5, CSS, JavaScript/jQuery, Node.JS, JSON, Express, React, MySQL, MVC, MongoDB, Mongoose, NoSQL, and MERN.
                                I am a very hard worker with very good communitcation and problem solving skills.
                            </h5>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Home;