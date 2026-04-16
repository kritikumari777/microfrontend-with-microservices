const Button = ({ type, text, onClick, className }) => {
    return (
        <button className={`${className}`} type={type} onClick={onClick}>{text}</button>
    )
}

const ButtonSubmit = ({ type, text }) => {
    return (
        <button className="btn btn-success" type={type}>{text}</button>
    )
}

export {
    Button,
    ButtonSubmit
}

