const URL = require('../models/url');
const response = require('../utils/response')

module.exports.accessShortUrl = (req, res, next) => {
    let {urlCode} = req.params
    URL.findOne({urlCode}).then((data) => {
        if (data && data.longUrl) {
            res.redirect(301,data.longUrl)
        } else {
            response.sucess(res, 000, 'Url not found please contact to the provider', null)
        }
    }).catch((error) => {
        response.error(res, 000, error, null)
    })
}