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
    },

    columns: [
        { key: '_id', header: 'ID' },
        { key: 'product', header: 'Product', render: (row) => row.productId?.title ?? '-', },
        { key: 'description', header: 'Description', render: (row) => row.productId?.description ?? '-', },
        { key: 'price', header: 'Price', render: (row) => `₹${row.productId?.price ?? 0}` },
        { key: 'qty', header: 'Quantity', render: (row) => row.qty ?? 0 },
        {
            key: 'total', header: 'Total', render: (row) => {
                const price = row.productId?.price ?? 0
                const qty = row.qty ?? 0
                return `₹${price * qty}`
            },
        },
    ]
}

export {
    cartData
}
