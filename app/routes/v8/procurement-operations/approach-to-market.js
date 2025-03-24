module.exports = function (router) {

  var version = "v8";

  router.get('/' + version + '/procurement-operations/approach-to-market/handover-from-triage', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/handover-from-triage', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/handover-from-triage', function (req, res) {
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

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/approach-to-market/discuss-requirements-and-route-to-market', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/discuss-requirements-and-route-to-market', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/discuss-requirements-and-route-to-market', function (req, res) {
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

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/approach-to-market/research-frameworks', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/research-frameworks', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/research-frameworks', function (req, res) {
    const tagResearchFrameworks = req.session.data['tagResearchFrameworks']

    if (tagResearchFrameworks.includes('Research suitable existing frameworks') &&
        tagResearchFrameworks.includes('Discuss frameworks with the school') &&
        tagResearchFrameworks.includes('Agree framework for procurement') &&
        tagResearchFrameworks.includes('empty')){
      req.session.data.tagResearchFrameworksStatus = 'complete'
      req.session.data.researchFrameworksError = 'false'
    }else if (tagResearchFrameworks == ('empty')){
      req.session.data.tagResearchFrameworksStatus = 'toDo'
    }else {
      req.session.data.tagResearchFrameworksStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/approach-to-market/record-route-to-market-and-contract-value', function (req, res) {
    req.session.data.pageAction = ''
    res.render(version + '/procurement-operations/approach-to-market/record-route-to-market-and-contract-value', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/record-route-to-market-and-contract-value', function (req, res) {
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

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/approach-to-market/set-procurement-timeline', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/set-procurement-timeline', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/set-procurement-timeline', function (req, res) {
    const tagSetProcurementTimeline = req.session.data['tagSetProcurementTimeline']

    if (tagSetProcurementTimeline.includes('Review and set dates for tasks') &&
      tagSetProcurementTimeline.includes('Share dates with the school') &&
      tagSetProcurementTimeline.includes('empty')){
      req.session.data.tagSetProcurementTimelineStatus = 'complete'
    }else if (tagSetProcurementTimeline == ('empty')){
      req.session.data.tagSetProcurementTimelineStatus = 'toDo'
    }else {
      req.session.data.tagSetProcurementTimelineStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/approach-to-market/create-procurement-risk-assessment', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/create-procurement-risk-assessment', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/create-procurement-risk-assessment', function (req, res) {
    const tagCreateRiskAssessment = req.session.data['tagCreateRiskAssessment']

    if (tagCreateRiskAssessment.includes('Download template') &&
      tagCreateRiskAssessment.includes('Save completed form in SharePoint') &&
      tagCreateRiskAssessment.includes('empty')){
      req.session.data.tagCreateRiskAssessmentStatus = 'complete'
    }else if (tagCreateRiskAssessment == ('empty')){
      req.session.data.tagCreateRiskAssessmentStatus = 'toDo'
    }else {
      req.session.data.tagCreateRiskAssessmentStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/approach-to-market/complete-information-gathering', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/complete-information-gathering', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/complete-information-gathering', function (req, res) {
    const tagCompleteInformationGathering = req.session.data['tagCompleteInformationGathering']
    const pageAction = req.session.data['pageAction']

    if (tagCompleteInformationGathering.includes('Review information gathered during triage') &&
      tagCompleteInformationGathering.includes('Share requirements document with school') &&
      tagCompleteInformationGathering.includes('Approve requirements document') &&
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

  router.get('/' + version + '/procurement-operations/approach-to-market/invite-the-school-lead', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/invite-the-school-lead', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/invite-the-school-lead', function (req, res) {
    const tagInviteTheSchoolLead = req.session.data['tagInviteTheSchoolLead']
    const pageAction = req.session.data['pageAction']

    if (tagInviteTheSchoolLead.includes('Add school leads') &&
      tagInviteTheSchoolLead.includes('Send invites') &&
      tagInviteTheSchoolLead.includes('empty')){
      req.session.data.tagInviteTheSchoolLeadStatus = 'complete'
    }else if (tagInviteTheSchoolLead == ('empty')){
      req.session.data.tagInviteTheSchoolLeadStatus = 'toDo'
    }else {
      req.session.data.tagInviteTheSchoolLeadStatus = 'inProgress'
    }

    if (pageAction == 'addUser'){
      res.redirect('/' + version + '/common/add-user')
    } else {
      res.redirect('/' + version + '/procurement-operations/procurement')
    }
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

  router.get('/' + version + '/procurement-operations/approach-to-market/get-approval-for-next-stage', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/get-approval-for-next-stage', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/get-approval-for-next-stage', function (req, res) {
    const tagGetApprovalForStage2 = req.session.data['tagGetApprovalForStage2']
    const costThresholdStatus = req.session.data['costThresholdStatus']

    if (costThresholdStatus == 'Below the relevant threshold'){
      if (tagGetApprovalForStage2.includes('Complete email template') &&
        tagGetApprovalForStage2.includes('Get approval from G7') &&
        tagGetApprovalForStage2.includes('empty')){
        req.session.data.tagGetApprovalForStage2Status = 'complete'
      }else if (tagGetApprovalForStage2 == ('empty')){
        req.session.data.tagGetApprovalForStage2Status = 'toDo'
      }else {
        req.session.data.tagGetApprovalForStage2Status = 'inProgress'
      }
    } else {
      if (tagGetApprovalForStage2.includes('Complete commercial assurance document') &&
        tagGetApprovalForStage2.includes('Get approval from G7') &&
        tagGetApprovalForStage2.includes('Add to secretariat agenda') &&
        tagGetApprovalForStage2.includes('Receive email to confirm approval') &&
        tagGetApprovalForStage2.includes('empty')){
        req.session.data.tagGetApprovalForStage2Status = 'complete'
      }else if (tagGetApprovalForStage2 == ('empty')){
        req.session.data.tagGetApprovalForStage2Status = 'toDo'
      }else {
        req.session.data.tagGetApprovalForStage2Status = 'inProgress'
      }
    }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/approach-to-market/get-approval-from-school-on-approach', function (req, res) {
    res.render(version + '/procurement-operations/approach-to-market/get-approval-from-school-on-approach', {})
  })

  router.post('/' + version + '/procurement-operations/approach-to-market/get-approval-from-school-on-approach', function (req, res) {
    const tagSchoolApproval = req.session.data['tagSchoolApproval']

    if (tagSchoolApproval.includes('Send email to school') &&
      tagSchoolApproval.includes('Received approval from school') &&
      tagSchoolApproval.includes('empty')){
      req.session.data.tagSchoolApprovalStatus = 'complete'
    }else if (tagSchoolApproval == ('empty')){
      req.session.data.tagSchoolApprovalStatus = 'toDo'
    }else {
      req.session.data.tagSchoolApprovalStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

}
