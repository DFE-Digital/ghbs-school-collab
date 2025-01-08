module.exports = function (router) {

  var version = "v2";

  router.get('/' + version + '/procurement-operations/procurement', function (req, res) {
    res.render(version + '/procurement-operations/procurement', {})

    // tagCompleteInformationGatheringStatus
    // tagRecordRouteToMarketStatus
    // tagGetApprovalForStage2Status
  })

  router.post('/' + version + '/procurement-operations/procurement', function (req, res) {
  })

}
