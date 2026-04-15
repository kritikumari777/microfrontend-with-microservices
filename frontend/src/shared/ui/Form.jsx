
import { ButtonSubmit } from './Button'
import { InputLabel } from './Input'

const FormComp = (props) => {

    const { data, value, btnType, btnText, onChange, onSubmit } = props

    return (
        <form onSubmit={onSubmit}>
            <div>
                {data?.map((item, i) => (
                    <InputLabel key={i} label={item.label} type={item?.type} name={item.name} value={value} onChange={onChange} placeholder={item.placeholder} />
                ))}
            </div>
            <ButtonSubmit type={btnType} text={btnText} />
        </form>
    )
}

export {
    FormComp
}