module.exports = function (router) {

  var version = "v1";

  router.get('/' + version + '/approach-to-market/complete-information-gathering', function (req, res) {
    res.render(version + '/approach-to-market/complete-information-gathering', {})
  })

  router.post('/' + version + '/approach-to-market/complete-information-gathering', function (req, res) {
    res.redirect('/' + version + '/procurement')
  })
}
