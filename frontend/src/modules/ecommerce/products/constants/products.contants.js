const productData = {
    header: "Manage Products",
    title: "Add Product",

    fields: [
        {label: "Please Enter product Name",
         name : "name",
         type : "text",
         error : "Product name"
        },

        {label: "Please enter Product category Name",
         name : "category",
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
        }
}

export {
    productData
}