import suppilerModle from "../models/suppiler.model.js"

const createSuppiler = async (req, res) => {

    try {
        const suppiler = await suppilerModle.create(req?.body)

        res.status(201).json({
            success: true,
            message: "Suppiler created sucessfull",
            suppiler

        })
    }
    catch (err) {
        return res.status(500).json({
            success: true,
            message: err.message
        })
    }

}

const fetchSuppiler = async (req, res) => {
   
    try{
        const suppilers = await suppilerModle.find().select("-__v")
    
        res.status(200).json({
            message: "Suppiler fetched sucessfully",
            code: 404,
            status: true,
            suppilers
        })

    }catch(err){
        return res.status(500).json({
            message: "Server side error",
            code: 500,
            status: true
        })
    }
}

const fetchSupplierById = async (req, res) => {
    
    try{ 
        const suppiler = await suppilerModle.findById(req.params.id)

         if(!suppiler){
            return res.status(404).json({
                message: "Suppiler not found",
                status: false,
                code: 404
            })
        }

        res.status(200).json({
            message: "Suppiler fetched sucessfully",
            status: true,
            code: 200,
            suppiler
        })

    }catch(err){
        return res.status(500).json({
            message: "Server side error",
            code: 500,
            status: true
        })
    }
}
const updateSupplier = async (req, res) => {
    
    try{ 
        const suppiler = await suppilerModle.findByIdAndUpdate(req.params.id, req.body, {new: true})

         if(!suppiler){
            return res.status(404).json({
                message: "Suppiler not found",
                status: false,
                code: 404
            })
        }

        res.status(200).json({
            message: "Suppiler Updated sucessfully",
            status: true,
            code: 200,
            suppiler
        })

    }catch(err){
        return res.status(500).json({
            message: "Internal Server Error",
            code: 500,
            status: true
        })
    }
}
const deleteSupplier = async (req, res) => {
    
    try{ 
        const suppiler = await suppilerModle.findByIdAndDelete(req.params.id)

         if(!suppiler){
            return res.status(404).json({
                message: "Suppiler not found",
                status: true,
                code: 404
            })
        }

        res.status(200).json({
            message: "Suppiler fetched sucessfully",
            status: true,
            code: 200,
            suppiler
        })

    }catch(err){
        return res.status(500).json({
            message: "Server side error",
            code: 500,
            status: true
        })
    }
}

export {
createSuppiler,
fetchSuppiler,
fetchSupplierById,
updateSupplier,
deleteSupplier

}