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
    header: "Register",
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
        },
        {
            label: "Please Select Role",
            name: "role",
            type: "select",
            placeholder: "Enter Role",
            roles: [
                { id: 1, role: "Please select role" },
                { id: 2, role: "Customer" },
                { id: 3, role: "Admin" }
            ]
        }
    ],
    btnFields: {
        btnText: "Register",
        btnType: "submit"
    }
}

const logout = {
    header: "Logout",
    type: "button",
    logoutBtnText: "Logout",
    logoutAllBtnText: "Logout from all devise"
}
const home = {
    header: "Home",
    text: "You are at Home page"
}
const dashboard = {
    header: "Dashboard",
    text: "You are at dashboard page"
}

export {
    loginFields,
    registerFields,
    logout,
    home,
    dashboard,

}