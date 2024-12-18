module.exports = function (router) {

  var version = "v2";

  router.get('/' + version + '/procurement-operations/approach-to-market/complete-information-gathering', function (req, res) {
    req.session.data.pageAction = ''
    res.render(version + '/procurement-operations/approach-to-market/complete-information-gathering', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/complete-information-gathering', function (req, res) {
    const tagCompleteInformationGathering = req.session.data['tagCompleteInformationGathering']
    const pageAction = req.session.data['pageAction']

    if (tagCompleteInformationGathering.includes('Review information gathered during triage') &
      tagCompleteInformationGathering.includes('Share requirements document with school') &
      tagCompleteInformationGathering.includes('Approve requirements document') &
      tagCompleteInformationGathering.includes('empty')){
      req.session.data.tagCompleteInformationGatheringStatus = 'complete'
    }else if (tagCompleteInformationGathering == ('empty')){
      req.session.data.tagCompleteInformationGatheringStatus = 'toDo'
    }else {
      req.session.data.tagCompleteInformationGatheringStatus = 'inProgress'
    }

    if (pageAction == 'uploadInformationGathering'){
      res.redirect('/' + version + '/common/upload-document')
    } else {
      res.redirect('/' + version + '/procurement-operations/procurement')
    }
  })

  router.get('/' + version + '/procurement-operations/approach-to-market/record-route-to-market', function (req, res) {
    req.session.data.pageAction = ''
    res.render(version + '/procurement-operations/approach-to-market/record-route-to-market', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/record-route-to-market', function (req, res) {
    const tagRecordRouteToMarket = req.session.data['tagRecordRouteToMarket']

    if (tagRecordRouteToMarket.includes('Discuss and agree route to market') &
    tagRecordRouteToMarket.includes('Record route to market') &
    tagRecordRouteToMarket.includes('empty')){
      req.session.data.tagRecordRouteToMarketStatus = 'complete'
    }else if (tagRecordRouteToMarket == ('empty')){
      req.session.data.tagRecordRouteToMarketStatus = 'toDo'
    }else {
      req.session.data.tagRecordRouteToMarketStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

}
