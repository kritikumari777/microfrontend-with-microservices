const categoryData = {
    header: "Category Management",

    title: "Add category",

    fields: [
        {
            label: "Category Name",
            name: 'name',
            type: "text",
            Placeholder: "Category name",
            error: "Please enter Category name"
        },
        {
            label: "Category Icon",
            name: 'icon',
            type: "text",
            Placeholder: "Category icon",
            error: "Please enter Category icon"
        }
    ],
    btnFields: {
        btnType: "submit",
        btnText: "Add Category"
    },
    listOfCategory: "List of Category",
    
    columns: [
        { key: '_id', header: 'ID' },
        { key: 'name', header: 'Category Name' },
        { key: 'icon', header: 'Icon' },
    ]
}

export {
    categoryData
}