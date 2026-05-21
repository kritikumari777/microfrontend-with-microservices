
import { ButtonSubmit } from './Button'
import { InputLabel } from './Input'
import Select from './Select'

const FormComp = (props) => {

    const { data, value, btnType, btnText, onChange, onSubmit } = props

    return (
        <form onSubmit={onSubmit}>
            <div>
                {data?.map((item, i) => {
                    if (item?.type === "text" || item?.type === "password" || item?.type === "email") {
                        return (
                            <InputLabel key={i} label={item.label} type={item?.type} name={item.name} value={value} onChange={onChange} placeholder={item.placeholder} />
                        )
                    }
                    else if (item?.type === "select") {
                        return (
                            <Select key={i} label={item?.label} name={item?.name} value={value} roles={item?.roles} onChange={onChange} />
                        )
                    }
                })}
            </div>
            <ButtonSubmit type={btnType} text={btnText} />
        </form>
    )
}

export {
    FormComp
}