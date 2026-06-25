const productData = {
    header: "Manage Products",
    title: "Add Product",

    fields: [
        {label: "Please Enter product Title",
         name : "title",
         type : "text",
         error : "Product name"
        },

        {label: "Please enter category Id",
         name : "categoryId",
         type : "text",
         error : "Product category"
        },

        {label: "Please enter product price",
         name : "price",
         type : "text",
         error : "Enter product price"
        },

        {label: "Please enter product description",
         name : "description",
         type : "text",
         error : "Product description"
        }],

        btnFields: {
            btnType: "submit",
            btnText: "Add Product"
        },
        ListOfProduct: "List Of Product"
}

export {
    productData
}