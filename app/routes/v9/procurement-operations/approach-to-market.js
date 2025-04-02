module.exports = function (router) {

  var version = "v9";

  router.get('/' + version + '/stages/approach-to-market/handover-from-triage', function (req, res) {
    res.render(version + '/stages/approach-to-market/handover-from-triage', {})
  })

  router.post('/' + version + '/stages/approach-to-market/handover-from-triage', function (req, res) {
    const tagHandoverFromTriage = req.session.data['tagHandoverFromTriage']

    if (tagHandoverFromTriage.includes('Send participation agreement') &&
      tagHandoverFromTriage.includes('Participation agreement signed') &&
      tagHandoverFromTriage.includes('Assigned to procurement operations lead') &&
      tagHandoverFromTriage.includes('empty')){
      req.session.data.tagHandoverFromTriageStatus = 'complete'
    }else if (tagHandoverFromTriage == ('empty')){
      req.session.data.tagHandoverFromTriageStatus = 'toDo'
    }else {
      req.session.data.tagHandoverFromTriageStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement')
  })

  router.get('/' + version + '/stages/approach-to-market/discuss-requirements-and-route-to-market', function (req, res) {
    res.render(version + '/stages/approach-to-market/discuss-requirements-and-route-to-market', {})
  })

  router.post('/' + version + '/stages/approach-to-market/discuss-requirements-and-route-to-market', function (req, res) {
    const tagDiscussRequirementsAndRouteToMarket = req.session.data['tagDiscussRequirementsAndRouteToMarket']

    if (tagDiscussRequirementsAndRouteToMarket.includes('Research suitable routes to market') &&
      tagDiscussRequirementsAndRouteToMarket.includes('Record school holidays, non-working days and completion date') &&
      tagDiscussRequirementsAndRouteToMarket.includes('Discuss route to market with school') &&
      tagDiscussRequirementsAndRouteToMarket.includes('Agree route to market') &&
      tagDiscussRequirementsAndRouteToMarket.includes('Save documents to SharePoint') &&
      tagDiscussRequirementsAndRouteToMarket.includes('empty')){
      req.session.data.tagDiscussRequirementsAndRouteToMarketStatus = 'complete'
    }else if (tagDiscussRequirementsAndRouteToMarket == ('empty')){
      req.session.data.tagDiscussRequirementsAndRouteToMarketStatus = 'toDo'
    }else {
      req.session.data.tagDiscussRequirementsAndRouteToMarketStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement')
  })

  router.get('/' + version + '/stages/approach-to-market/record-route-to-market-and-contract-value', function (req, res) {
    req.session.data.pageAction = ''
    res.render(version + '/stages/approach-to-market/record-route-to-market-and-contract-value', {})
  })

  router.post('/' + version + '/stages/approach-to-market/record-route-to-market-and-contract-value', function (req, res) {
    const tagRecordRouteToMarket = req.session.data['routeToMarket']
    const tagReasonForRouteToMarket = req.session.data['reasonForRouteToMarket']
    const tagContractValue = req.session.data['tagContractValue']

    if (tagRecordRouteToMarket &&
        tagReasonForRouteToMarket &&
        tagContractValue){
      req.session.data.tagRecordRouteToMarketAndContractValueStatus = 'complete'
    }else {
       req.session.data.tagRecordRouteToMarketAndContractValueStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement')
  })

  router.get('/' + version + '/stages/approach-to-market/set-procurement-timeline', function (req, res) {
    res.render(version + '/stages/approach-to-market/set-procurement-timeline', {})
  })

  router.post('/' + version + '/stages/approach-to-market/set-procurement-timeline', function (req, res) {
    const tagSetProcurementTimeline = req.session.data['tagSetProcurementTimeline']
    const userType = req.session.data['userType']

    if (userType == 'procurement-operations'){
      if (tagSetProcurementTimeline.includes('Review and set dates for tasks') &&
        tagSetProcurementTimeline.includes('Share dates with the school') &&
        tagSetProcurementTimeline.includes('empty')){
        req.session.data.tagSetProcurementTimelineStatus = 'complete'
      }else if (tagSetProcurementTimeline == ('empty')){
        req.session.data.tagSetProcurementTimelineStatus = 'toDo'
      }else {
        req.session.data.tagSetProcurementTimelineStatus = 'inProgress'
      }
    }

    res.redirect('/' + version + '/procurement')
  })

  router.get('/' + version + '/stages/approach-to-market/invite-school-users-to-portal', function (req, res) {
    res.render(version + '/stages/approach-to-market/invite-school-users-to-portal', {})
  })

  router.post('/' + version + '/stages/approach-to-market/invite-school-users-to-portal', function (req, res) {
    const sbp1Emailed = req.session.data['sbp1Emailed']
    const pageAction = req.session.data['pageAction']

    if (sbp1Emailed == 'true'){
      req.session.data.tagInviteSchoolUsersToPortalStatus = 'complete'
    }else {
      req.session.data.tagInviteSchoolUsersToPortalStatus = 'toDo'
    }

    if (pageAction == 'addUser'){
      res.redirect('/' + version + '/common/add-user')
    } else {
      res.redirect('/' + version + '/procurement')
    }
  })

  router.get('/' + version + '/stages/approach-to-market/create-procurement-risk-assessment', function (req, res) {
    res.render(version + '/stages/approach-to-market/create-procurement-risk-assessment', {})
  })

  router.post('/' + version + '/stages/approach-to-market/create-procurement-risk-assessment', function (req, res) {
    const tagCreateRiskAssessment = req.session.data['tagCreateRiskAssessment']

    if (tagCreateRiskAssessment.includes('Complete procurement risk assessment') &&
      tagCreateRiskAssessment.includes('Save completed form in SharePoint') &&
      tagCreateRiskAssessment.includes('empty')){
      req.session.data.tagCreateRiskAssessmentStatus = 'complete'
    }else if (tagCreateRiskAssessment == ('empty')){
      req.session.data.tagCreateRiskAssessmentStatus = 'toDo'
    }else {
      req.session.data.tagCreateRiskAssessmentStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement')
  })

  router.get('/' + version + '/procurement-operations/approach-to-market/get-CAB-approval-for-Non-DfE-deal-or-framework', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/get-CAB-approval-for-Non-DfE-deal-or-framework', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/get-CAB-approval-for-Non-DfE-deal-or-framework', function (req, res) {
    const tagCabApprovalNonDfeDealFramework = req.session.data['tagCabApprovalNonDfeDealFramework']

    if (tagCabApprovalNonDfeDealFramework.includes('Submit to CAB for approval') &&
        tagCabApprovalNonDfeDealFramework.includes('Granted approval to proceed') &&
        tagCabApprovalNonDfeDealFramework.includes('empty')){
      req.session.data.tagCabApprovalNonDfeDealFrameworkStatus = 'complete'
    }else if (tagCabApprovalNonDfeDealFramework == ('empty')){
      req.session.data.tagCabApprovalNonDfeDealFrameworkStatus = 'toDo'
    }else {
      req.session.data.tagCabApprovalNonDfeDealFrameworkStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/stages/approach-to-market/get-approval-for-next-stage', function (req, res) {
    res.render(version + '/stages/approach-to-market/get-approval-for-next-stage', {})
  })

  router.post('/' + version + '/stages/approach-to-market/get-approval-for-next-stage', function (req, res) {
    const tagGetApprovalForStage2 = req.session.data['tagGetApprovalForStage2']

    if (tagGetApprovalForStage2.includes('Complete commercial assurance document') &&
      tagGetApprovalForStage2.includes('Get approval from G7') &&
      tagGetApprovalForStage2.includes('Add to secretariat agenda') &&
      tagGetApprovalForStage2.includes('Approval received from CAB') &&
      tagGetApprovalForStage2.includes('empty')){
      req.session.data.tagGetApprovalForStage2Status = 'complete'
    }else if (tagGetApprovalForStage2 == ('empty')){
      req.session.data.tagGetApprovalForStage2Status = 'toDo'
    }else {
      req.session.data.tagGetApprovalForStage2Status = 'inProgress'
    }

    res.redirect('/' + version + '/procurement')
  })

}
