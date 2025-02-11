module.exports = function (router) {

  var version = "v5";

  router.get('/' + version + '/procurement-operations/procurement', function (req, res) {
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

    res.render(version + '/procurement-operations/procurement', {})
  })

  router.post('/' + version + '/procurement-operations/procurement', function (req, res) {
  })
}
