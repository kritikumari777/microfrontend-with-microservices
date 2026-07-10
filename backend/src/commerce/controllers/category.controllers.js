import categoryModle from "../models/category.model.js"

const createCategory = async (req, res) => {
    try {
        const {name} = req.body
        const isExistCategory = await categoryModle.findOne({name})
       
        if (isExistCategory) {
            return res.status(409).json({
                success: false,
                message: "Category already exists"
            })
        }

        const category = await categoryModle.create(req.body)

        res.status(201).json({
            success: true,
            message: "Category created sucessfully",
            category
        })
    } catch (err) {
        return res.status(500).json({
            success: true,
            message: err.message
        })
    }

}
const fetchCategory = async (req, res) => {
    try {

        const categorys = await categoryModle.find()

        res.status(200).json({
            success: true,
            message: "Categorys fetched sucessfully",
            categorys
        })
    } catch (err) {
        return res.status(500).json({
            success: true,
            message: "Internal server error"
        })
    }

}
const fetchCategoryById = async (req, res) => {
    try {

        const category = await categoryModle.findById(req.params.id)

        if (!category) {
            return res.status(400).json({
                success: false,
                message: "Category not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "A category fetched sucessfully",
            category
        })
    } catch (err) {
        return res.status(500).json({
            success: true,
            message: "Internal server error"
        })
    }

}

const updateCategory = async (req, res) => {

    try {

        const category = await categoryModle.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!category) {
            return res.status(400).json({
                success: false,
                message: "Category not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Updated Category successfully",
            category
        })

    } catch (err) {
        return res.status(500).json({
            success: true,
            message: "Internal server error"
        })
    }
}

const removeCategory = async (req, res) => {
    try {

        const category = await categoryModle.findByIdAndDelete(req.params.id)

        if (!category) {
            return res.status(400).json({
                success: false,
                message: "Category not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Remove category successfully",
            category
        })

    } catch (err) {
        return res.status(500).json({
            success: true,
            message: "Internal server error"
        })
    }
}

export {
    createCategory,
    fetchCategory,
    fetchCategoryById,
    updateCategory,
    removeCategory
}