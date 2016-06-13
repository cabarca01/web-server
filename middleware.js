/**
 * Created by cabarca on 13/06/16.
 */
module.exports = {
    requireAuthentication: function (req, res, next) {
        console.log ('Private route hit');
        next();
    },
    logger: function (req, res, next) {
        var datetime = new Date();
        console.log('Request: ' + datetime.toString() + ' ' + req.method + ' ' +
            req.originalUrl);
        next();
    }
};
