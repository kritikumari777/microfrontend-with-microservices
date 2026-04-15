const loginFields = {
    header: "Login",
    fields: [
        {
            label: "Plaese Enter Email",
            name: "email",
            type: "text",
            placeholder: "Enter Email",
        },
        {
            label: "Please Enter Password",
            name: "password",
            type: "password",
            placeholder: "Enter Password",
        }
    ],
    btnFields: {
        btnType: "submit",
        btnText: "Login"
    }
}

const registerFields = {
    header: "Register" ,
    fields: [
            {
                label: "Please Enter User Name",
                name: "username",
                type: "text",
                placeholder: "Enter UserName",
            },
            {
                label: "Please Enter Email",
                name: "email",
                type: "text",
                placeholder: "Enter Email",
            },
            {
                label: "Please Enter Password",
                name: "password",
                type: "password",
                placeholder: "Enter Password",
            }
        ],
    btnFields: {
        btnText: "register",
        btnType: "submit"
    }
}

const logout = {
    header: "Logout",
    btnText: "Logout",
    type: "button"
}
const home = {
    header: "Home",
    text: "You are at Home page"
}
const dasboard = {
    header: "Dasboard",
    text: "You are at Dasboard page"
}

export {
    loginFields,
    registerFields,
    logout,
    home,
    dasboard,

}