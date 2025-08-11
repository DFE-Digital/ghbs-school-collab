module.exports = function (router) {

  var version = "v10";

  router.get('/', function (req, res) {
    req.session.data.hideNavigation = 'true'
    res.locals.data.hideNavigation = 'true'

    res.render('/index', {})
  })

}
