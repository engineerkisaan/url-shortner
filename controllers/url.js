const validUrl = require('valid-url');
const response = require('../utils/response')
const shortid = require('shortid');
const URL = require('../models/url');


module.exports.toShort = (req, res, next) => {
    let longUrl = req.body.url || req.query.url;
    let urlCode = shortid.generate();
    let host = req.headers.host ? (req.headers.host.includes('http') ? req.headers.host : 'http://'+req.headers.host) : null 
    if (longUrl && validUrl.isUri(longUrl)) {
        URL.find({longUrl}).then ((urlData) => {
            if(urlData && urlData.length) {
                response.sucess(res, 000, 'Already created', urlData[0])    
            } else {
                let urlDetails = new URL({
                    urlCode: urlCode,
                    longUrl: longUrl,
                    shortUrl: host ? host+'/'+urlCode : null
                })
                urlDetails.save().then((data) => {
                    response.sucess(res, 000, 'Sucessfully created', data)
                }).catch((error) => {
                    response.error(res, 000, error, null)
                })
            }
        }).catch ((error) => {
            response.error(res, 000, error, null)
        })
    } else {
        response.error(res, 000, "A valid URL is required ...", null)
    }
}