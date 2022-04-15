import React from "react";
import "./Home.css";
import bgImg from "../../images/bannerbackground.png";
import { Button, Form, FormControl } from "react-bootstrap";

const Home = () => {
    return (
        <div
            className="hero-area"
            style={{
                backgroundImage: `url(${bgImg})`,
                height: `400px`,
                objectFit: `cover`,
                width: `100%`,
            }}
        >
            <div className="container text-center">
                <h2>Best Food for you. Order NOW!!!</h2>
                <Form className="d-flex w-50 mx-auto">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className=""
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        </div>
    );
};

export default Home;
