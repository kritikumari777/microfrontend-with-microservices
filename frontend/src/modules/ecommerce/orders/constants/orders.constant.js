const ordersData = {
    header: "Manage Orders",

    listOfOrders: "List of Orders",

    ordersBtn: {
        btnType: "button",
        btnText: "Add Supplier"
    },

    fields: [
        {
            label: "Cart Items ID",
            name: "cartItems",
            type: "text",
            placeholder: "cart Items ID",
            error: "Please enter cart Items ID"
        },
        {
            label: "shipping Address",
            name: "shippingAddress",
            type: "text",
            placeholder: "shipping Address",
            error: "Please enter shipping Address"
        },
        {
            label: "city",
            name: "city",
            type: "text",
            placeholder: "city",
            error: "Please enter city"
        },
        {
            label: "zip",
            name: "zip",
            type: "text",
            placeholder: "zip",
            error: "Please enter zip"
        },
        {
            label: "country",
            name: "country",
            type: "text",
            placeholder: "country",
            error: "Please enter country"
        },
        {
            label: "phone",
            name: "phone",
            type: "text",
            placeholder: "phone",
            error: "Please enter phone"
        },
        {
            label: "status",
            name: "status",
            type: "text",
            placeholder: "status",
            error: "Please enter status"
        },
        {
            label: "total Price",
            name: "totalPrice",
            type: "text",
            placeholder: "total Price",
            error: "Please enter total Price"
        },
        {
            label: "user",
            name: "user",
            type: "text",
            placeholder: "user",
            error: "Please enter user"
        },
        {
            label: "ordered Date",
            name: "orderedDate",
            type: "text",
            placeholder: "ordered Date",
            error: "Please enter ordered Date"
        },
    ],

    btnFields: {
        btnType: "submit",
        btnText: "Add Order"
    }

}

export {
    ordersData
}