
import { ButtonSubmit } from './Button'
import { InputLabel } from './Input'
import Select from './Select'

const FormComp = (props) => {

    const { data, formData, btnType, btnText, onChange, onSubmit } = props

    return (
        <form onSubmit={onSubmit}>
            <div className=''>
                {data?.map((item, i) => {
                    if (item?.type === "select") {
                        return (
                            <Select key={i} label={item?.label} name={item?.name} value={formData[item?.name]|| ""} roles={item?.roles} onChange={onChange} />
                        )
                    }
                    else {
                        return (
                            <InputLabel key={i} label={item.label} type={item?.type} name={item.name} value={formData[item?.name]|| ""}  onChange={onChange} placeholder={item.placeholder} />
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