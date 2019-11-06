const URL = require('../models/url');
const response = require('../utils/response')

module.exports.accessShortUrl = (req, res, next) => {
    let {urlCode} = req.params
    URL.findOne({urlCode}).then((data) => {
        if (data && data.longUrl) {
            res.redirect(301,data.longUrl)
        } else {
            res.redirect('/')
        }
    }).catch((error) => {
        response.error(res, 000, error, null)
    })
}