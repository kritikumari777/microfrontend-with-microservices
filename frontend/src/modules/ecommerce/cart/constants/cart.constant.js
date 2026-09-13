const cartData = {
    header: "Manage Cart",
    addCart: "Add Card",
    listOfCart: "List of cart details",

    cartBtn: {
        btnType: "button",
        btnText: "Add Cart"
    },

    fields: [
        {
            label: "User ID",
            name: "userId",
            type: "text",
            placeholder: "User ID",
            error: "Please enter User ID"
        },
        {
            label: "Product ID",
            name: "productId",
            type: "text",
            placeholder: "Product Id",
            error: "Please enter Product Id"
        },
        {
            label: "Quantity",
            name: "qty",
            type: "text",
            placeholder: "Quantity",
            error: "Please enter quantity"
        }
    ],

    btnFields: {
        btnType: "submit",
        btnText: "Add Cart"
    }
}

export {
    cartData
}
