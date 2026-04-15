export const OnChangeAct = (e, setState) => {

    const {value } = e.target
    return  setState( (prev) => ({...prev , value}))
}
export const OnChangeObj = (e, setState) => {

    const { name, value } = e.target
    return setState((prev) => ({ ...prev, [name]: value }))
}