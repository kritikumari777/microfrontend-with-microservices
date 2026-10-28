const isValidUser = (registerUser) => {
    if(registerUser?.username && registerUser?.email && registerUser?.password && registerUser?.role ){
        return true
    }
    return false
}

export {
    isValidUser
}