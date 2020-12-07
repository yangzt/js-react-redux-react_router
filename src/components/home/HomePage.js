import React from "react";
//Link at client level instead of sending to the server
import { Link } from "react-router-dom";

const HomePage = () => (
    //jumbotron from React bootstrap
    <div className="jumbotron"> 
        <hi>Pluralsight Administrator</hi>
        <p>React, Redux and React Router for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
);

export default HomePage;