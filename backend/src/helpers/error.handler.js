const errorHandler = (err, req, res, next) => {

    if (err?.name === "UnauthorizedError") {
        return res.status(401).json({ message: "Unauthorized User" })
    }

    if (err?.name === "ValidationError") {
        return res.status(400).json({ message: "Validation failed" })
    }

    return res.status(500).json({ message: err.message || "Server Error" })
}

export {
    errorHandler
}