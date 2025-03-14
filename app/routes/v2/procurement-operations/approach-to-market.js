module.exports = function (router) {

  var version = "v2";

  router.get('/' + version + '/procurement-operations/approach-to-market/complete-information-gathering', function (req, res) {
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

  router.get('/' + version + '/procurement-operations/approach-to-market/check-cost-threshold', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/check-cost-threshold', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/check-cost-threshold', function (req, res) {
    const tagCheckCostThreshold = req.session.data['costThresholdStatus']

    if (tagCheckCostThreshold){
      req.session.data.tagCheckCostThresholdStatus = 'complete'
    }else{
      req.session.data.tagCheckCostThresholdStatus = 'toDo'
    }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/approach-to-market/get-CAB-approval-for-Non-DfE-deal-or-framework', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/get-CAB-approval-for-Non-DfE-deal-or-framework', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/get-CAB-approval-for-Non-DfE-deal-or-framework', function (req, res) {
    const tagCabApprovalNonDfeDealFramework = req.session.data['tagCabApprovalNonDfeDealFramework']

    if (tagCabApprovalNonDfeDealFramework.includes('Submit to CAB for approval') &
        tagCabApprovalNonDfeDealFramework.includes('Granted approval to proceed') &
        tagCabApprovalNonDfeDealFramework.includes('empty')){
      req.session.data.tagCabApprovalNonDfeDealFrameworkStatus = 'complete'
    }else if (tagCabApprovalNonDfeDealFramework == ('empty')){
      req.session.data.tagCabApprovalNonDfeDealFrameworkStatus = 'toDo'
    }else {
      req.session.data.tagCabApprovalNonDfeDealFrameworkStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/approach-to-market/get-approval-for-next-stage', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/get-approval-for-next-stage', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/get-approval-for-next-stage', function (req, res) {
    // const tagGetApprovalForStage2 = req.session.data['tagGetApprovalForStage2']

    // if (tagGetApprovalForStage2.includes('Granted approval to proceed') &
    //   tagGetApprovalForStage2.includes('empty')){
    //   req.session.data.tagGetApprovalForStage2Status = 'complete'
    // }else if (tagGetApprovalForStage2 == ('empty')){
    //   req.session.data.tagGetApprovalForStage2Status = 'toDo'
    // }else {
    //   req.session.data.tagGetApprovalForStage2Status = 'inProgress'
    // }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

}
