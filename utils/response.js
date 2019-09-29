module.exports.error = (res, statusCode, error, data) => {
    return res.json({
        error: 1,
        message: error.message ? error.message : error,
        data: data
    })
}

module.exports.sucess = (res, statusCode, error, data) => {
    return res.json({
        error: 0,
        message: error.message ? error.message : error,
        data: data
    })
}