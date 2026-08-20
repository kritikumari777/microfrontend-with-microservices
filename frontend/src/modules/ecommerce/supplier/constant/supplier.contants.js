const supplierData = {
    header: "Manage Supplier",
    title: "Add Suppier",

    supplierBtn: {
         btnType: "button",
         btnText: "Add Supplier"
    },

    fields: [
        {label: "Please Enter supplier name",
         name : "name",
         type : "text",
         error : "Enter Supplier name"
        },

        {label: "Please enter supplier email",
         name : "email",
         type : "email",
         error : "Enter supplier email"
        },

        {label: "Please enter suppiler phone number",
         name : "phone",
         type : "phone",
         error : "Enter suppiler phone number"
        },

         {label: "Please enter supplier Address",
         name : "address",
         type : "text",
         error : "Enter suppiler address"
        }
    ],

        btnFields: {
            btnType: "submit",
            btnText: "Add Supplier"
        },
        ListOfSupplier: "List Of Supplier"
}

export {
    supplierData
}