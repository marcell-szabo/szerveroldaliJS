/**
 * Renders values into template
 */

const requireOption = require('../requireOption')

module.exports = function(objectrepository, viewName) {
    return function(req, res, next)  {
        console.log('render: '+ viewName)
        res.end('Template: ' + viewname)
    }
}