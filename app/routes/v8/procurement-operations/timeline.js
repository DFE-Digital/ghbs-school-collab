module.exports = function (router) {

  var version = "v8";

  router.get('/' + version + '/procurement-operations/timeline', function (req, res) {
    res.render(version + '/procurement-operations/timeline', {})
  })

  router.post('/' + version + '/procurement-operations/timeline', function (req, res) {

    res.redirect('/' + version + '/procurement-operations/timeline')
  })

}
