const usersData = {
    header: "Users Details",
    title: "Add Users",
    listOfUser: "List Of Users",

    addUserBtn: {
        btnType: "button",
        btnText: "Add User"
    },
    fields: [
        {
            label: "User Name",
            name: "username",
            type: "text",
            placeholder: "User Name",
            error: "User Not found"
        },
        {
            label: "User Email",
            name: "email",
            type: "text",
            placeholder: "User Email",
            error: "Invalid Email"
        },
        {
            label: "User Password",
            name: "password",
            type: "text",
            placeholder: "User Password",
            error: "Invalid Password"
        },
        {
            label: "User role ",
            name: "role",
            type: "text",
            placeholder: "User Role",
            error: "Role Not defind"
        },

    ],
    btnFields: {
        btnType: "submit",
        btnText: "Add User"
    }
}

export {
    usersData
}