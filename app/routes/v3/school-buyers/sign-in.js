module.exports = function (router) {

  var version = "v3";

  router.get('/' + version + '/school-buyer/sign-in', function (req, res) {
    res.render(version + '/school-buyer/sign-in', {})
  })

  router.post('/' + version + '/school-buyer/sign-in', function (req, res) {
    res.redirect('/' + version + '/school-buyer/password')
  })

  router.get('/' + version + '/school-buyer/password', function (req, res) {
    res.render(version + '/school-buyer/password', {})
  })

  router.post('/' + version + '/school-buyer/password', function (req, res) {
    res.redirect('/' + version + '/school-buyer/procurement')
  })
}
