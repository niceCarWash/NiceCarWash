exports.erroHandler = (error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
             message: error.message
        }
    })
    console.log("===============================================", error.message)
    }