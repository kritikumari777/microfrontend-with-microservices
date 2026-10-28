const ordersData = {

    listOfOrders: "List of Orders",

    fields: [
        {
            label: "Order Status",
            name: "status",
            type: "select",
            placeholder: "status",
            roles: [
                {id: 0, role: "Pending"},
                {id: 1, role: "Confirmed"},
                {id: 2, role: "Processing"},
                {id: 3, role: "Shipped"},
                {id: 4, role: "Delivered",},
                {id: 5, role: "Cancelled",}
            ],
            error: "Please enter status"
        },
    ],

    btnFields: {
        btnType: "submit",
        btnText: "Update Status"
    },
    columns: [

        { key: "user", header: "User", render: (row) => row.user?.username ?? row.user?.email ?? "-" },
        { key: "items", header: "Items", render: (row) => row.items?.length ?? 0 },
        { key: "subTotle", header: "Sub Total", render: (row) => `₹${row.subTotal ?? 0}` },
        { key: "totalPrice", header: "Total Price", render: (row) => `₹${row.totalPrice ?? 0}` },
        { key: "shippingAddress", header: "Shipping Address", render: (row) => row.shippingAddress ?? "-", },
        { key: "city", header: "City", },
        { key: "zip", header: "ZIP" },
        { key: "country", header: "Country" },
        { key: "phone", header: "Phone" },
        { key: "status", header: "Status" },
        {
            key: "orderedDate", header: "Ordered Date", render: (row) =>
                row.orderedDate
                    ? new Date(row.orderedDate).toLocaleDateString()
                    : "-",
        },
    ]

}

export {
    ordersData
}