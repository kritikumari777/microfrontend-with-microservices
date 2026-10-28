const productData = {
    header: "Manage Products",

    productBtn: {
        btnText: "Add Product",
        btnType: "button"
    },

    fields: [
        {
            label: "Please Enter product Title",
            name: "title",
            type: "text",
            error: "Product name"
        },

        {
            label: "Please enter category",
            name: "categoryId",
            type: "select",
            error: "Product category"
        },

        {
            label: "Please enter product price",
            name: "price",
            type: "text",
            error: "Enter product price"
        },

        {
            label: "Please enter product description",
            name: "description",
            type: "text",
            error: "Product description"
        }],

    btnFields: {
        btnType: "submit",
        btnText: "Add Product"
    },
    ListOfProduct: "List Of Product",

    columns : [
    { key: "_id", header: "ID" },
    { key: "title", header: "Product" },
    { key: "description", header: "Description" },
    { key: "price", header: "price", render: (row) => `₹${row.price ?? 0}` },
    { key: "categoryId", header: "category", render: (row) => `${row.categoryId?.name ?? '-'}` },
  ]
}

export {
    productData
}