import React from "react";
import Header from "../components/Header";
import Project from "../components/Project";
import Footer from "../components/Footer";

function Projects() {
    return (
        <div>
            <Header />
                <div className="container">
                    <Project />
                </div>
            <Footer />
        </div>
    )
}

export default Projects;