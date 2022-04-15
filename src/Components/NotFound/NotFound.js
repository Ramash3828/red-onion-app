import React from "react";
import notFound from "../../images/notFound.jpg";

const NotFound = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "400px" }}
        >
            <img className="img-fluid" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
