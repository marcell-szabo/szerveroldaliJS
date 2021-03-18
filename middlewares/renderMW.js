/**
 * Renders values into template
 */


module.exports = function(objectrepository, viewName) {
    return function(req, res, next)  {
        console.log('render: '+ viewName)
        res.end('Template: ' + viewname)
    }
}