module.exports = function (router) {

  var version = "v8";

  router.get('/' + version + '/procurement', function (req, res) {
    const tagCompleteInformationGatheringStatus = req.session.data['tagCompleteInformationGatheringStatus']
    const tagRecordRouteToMarketStatus = req.session.data['tagRecordRouteToMarketStatus']
    const tagCheckCostThresholdStatus = req.session.data['tagCheckCostThresholdStatus']

    if (tagCompleteInformationGatheringStatus == 'complete' &
      tagRecordRouteToMarketStatus == 'complete' &
      tagCheckCostThresholdStatus == 'complete'){
        req.session.data.stage1ApprovalBlocked = 'false'
        res.locals.data.stage1ApprovalBlocked = 'false'
        // set the local data as well so that the tag updates when the page loads
        // without this the user needs to refresh to see the update.
    } else {
      req.session.data.stage1ApprovalBlocked = 'true'
      res.locals.data.stage1ApprovalBlocked = 'true'
    }

    res.render(version + '/procurement', {})
  })

  router.post('/' + version + '/procurement', function (req, res) {
  })

  router.get('/' + version + '/sign-in', function (req, res) {
    res.render(version + '/sign-in', {})
  })

  router.post('/' + version + '/sign-in', function (req, res) {
    res.redirect('/' + version + '/password')
  })

  router.get('/' + version + '/password', function (req, res) {
    res.render(version + '/password', {})
  })

  router.post('/' + version + '/password', function (req, res) {
    res.redirect('/' + version + '/procurement')
  })
}
