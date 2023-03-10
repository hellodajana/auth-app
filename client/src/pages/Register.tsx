import React, { useState } from "react";
import Container from "../components/Container";

const Register = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    return (
        <Container children={"Register"} />
    )

}

export default Register