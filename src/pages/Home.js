import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Header />
                <div className="container">
                    <Card />
                </div>
            <Footer />
        </div>
    )
}

export default Home;