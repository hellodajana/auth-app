import React, { useState } from "react";
import Form from "./Form";

type ChildrenProps = {
    children: string;
};

const Container = ({ children }: ChildrenProps) => {

    const [getUser, setGetUser] = useState<{ email: string, password: string, username: string }>({
        email: "",
        password: "",
        username: ""
    })

    const { email, password, username } = getUser

    return (
        <section className="Login">
            <h1 className="title">{children}</h1>
            <form className="Login__form">
                {children === "Register" &&
                    <Form children="Username" />
                }
                <Form children="Email" />
                <Form children="Password" />

                {/* <input className="Login__input"
                    type="password"
                    id="password"
                    name="password"
                    required
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setGetUser({
                        ...getUser,
                        password: e.target.value
                    })}
                /> */}
                <button className="Login__btn">{children}</button>
            </form>
        </section>
    )

}

export default Container