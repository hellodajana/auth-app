import "./Container.scss"

type ChildrenProps = {
    children: string;
};

const Container = ({ children }: ChildrenProps) => {
    return (
        <section className="Login">
            <h1 className="title">{children}</h1>
            <form className="Login__form">
                {children === "Register" &&
                    <>
                        <label className="Login__label">
                            Email
                        </label>
                        <input className="Login__input" />
                    </>
                }
                <label className="Login__label">
                    Email
                </label>
                <input className="Login__input" />
                <label className="Login__label">
                    Password
                </label>
                <input className="Login__input" />
                <button className="Login__btn">{children}</button>
            </form>
        </section>
    )

}

export default Container