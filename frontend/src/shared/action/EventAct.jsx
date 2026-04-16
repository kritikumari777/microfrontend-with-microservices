export const onChangeAct = (e, setState) => {

    const {value } = e.target
    return  setState( (prev) => ({...prev , value}))
}
export const onChangeObj = (e, setState) => {
    const { name, value } = e.target
    return setState((prev) => ({ ...prev, [name]: value }))
}