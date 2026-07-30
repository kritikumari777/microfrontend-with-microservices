
import { Button, ButtonSubmit } from './Button'
import { InputLabel } from './Input'
import Select from './Select'

const FormComp = (props) => {

    const { data, formData, btnType, btnText, onChange, onSubmit, onCancle,  isCancle} = props

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
            {isCancle && <Button className='btn btn-success mx-3' type={btnType} text={"Cancle"} onClick={onCancle} />}
        </form>
    )
}

export {
    FormComp
}