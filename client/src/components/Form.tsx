import "./Container.scss"

type ChildrenProps = {
    children: string;
};

const Form = ({ children }: ChildrenProps) => {

    return (
        <>
            <label className="Login__label">
                {children}
            </label>
            <input className="Login__input"
                type={children}
                id={children}
                name={children}
                required
                value={children}
            />
        </>
    )

}

export default Form