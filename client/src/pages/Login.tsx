import React, { useState } from "react";
import Container from "../components/Container";

const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    return (
        <Container children={"Login"} />
    )

}

export default Login