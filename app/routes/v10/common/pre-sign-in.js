module.exports = function (router) {

  var version = "v10";

  router.get('/', function (req, res) {
    req.session.data.hideNavigation = 'true'
    res.locals.data.hideNavigation = 'true'
    req.session.data.showUser = 'false'
    res.locals.data.showUser = 'false'

    res.render('/index', {})
  })

}
