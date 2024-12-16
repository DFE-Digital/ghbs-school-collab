module.exports = function (router) {

  var version = "v1";

  router.get('/' + version + '/common/upload-document', function (req, res) {
    res.render(version + '/common/upload-document', {})
  })

  router.post('/' + version + '/common/upload-document', function (req, res) {
    const userType = req.session.data['userType']

    res.redirect('/' + version + '/' + userType + '/procurement')
  })
}