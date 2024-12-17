module.exports = function (router) {

  var version = "v2";

  router.get('/' + version + '/school-buyer/approach-to-market/complete-information-gathering', function (req, res) {
    req.session.data.pageAction = ''
    res.render(version + '/school-buyer/approach-to-market/complete-information-gathering', {})
  })

  router.post('/' + version + '/school-buyer/approach-to-market/complete-information-gathering', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'uploadInformationGathering'){
      res.redirect('/' + version + '/common/upload-document')
    } else {
      res.redirect('/' + version + '/school-buyer/procurement')
    }
  })

}
