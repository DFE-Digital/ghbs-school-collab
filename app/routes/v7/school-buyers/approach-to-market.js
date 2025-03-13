module.exports = function (router) {

  var version = "v7";

  router.get('/' + version + '/school-buyer/approach-to-market/complete-information-gathering', function (req, res) {
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

  router.get('/' + version + '/school-buyer/approach-to-market/record-route-to-market', function (req, res) {
    req.session.data.pageAction = ''
    res.render(version + '/school-buyer/approach-to-market/record-route-to-market', {})
  })

  router.post('/' + version + '/school-buyer/approach-to-market/record-route-to-market', function (req, res) {

    res.redirect('/' + version + '/school-buyer/procurement')
  })

}
