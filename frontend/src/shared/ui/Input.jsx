const Input =  ({name, value, placeholder, onChange }) => {
    return (
             <input name={name} type={tyep} placeholder={placeholder} value={value} onChange={onChange} />
    )
}

const InputLabel = ({label, type, name, value, placeholder, onChange }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export {
    InputLabel,
    Input
}