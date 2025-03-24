module.exports = function (router) {

  var version = "v8";

  router.get('/' + version + '/procurement-operations/prepare-and-go-to-market/call-off-document-preparation', function (req, res) {
    res.render(version + '/procurement-operations/prepare-and-go-to-market/call-off-document-preparation', {})
  })

  router.post('/' + version + '/procurement-operations/prepare-and-go-to-market/call-off-document-preparation', function (req, res) {
    const tagRefineSpecificationWithSchoolStatus = req.session.data['tagRefineSpecificationWithSchoolStatus']
    const tagSetPricingScheduleStatus = req.session.data['tagSetPricingScheduleStatus']
    const tagCreateQualityQuestionsStatus = req.session.data['tagCreateQualityQuestionsStatus']
    const tagEvaluationMethodologyStatus = req.session.data['tagEvaluationMethodologyStatus']

    if (tagRefineSpecificationWithSchoolStatus == 'complete' &&
        tagSetPricingScheduleStatus == 'complete' &&
        tagCreateQualityQuestionsStatus == 'complete' &&
        tagEvaluationMethodologyStatus == 'complete'){
      req.session.data.tagCallOffDocumentPreparationStatus = 'complete'
    } else if (tagRefineSpecificationWithSchoolStatus == 'toDo' &&
               tagSetPricingScheduleStatus == 'toDo' &&
               tagCreateQualityQuestionsStatus == 'toDo' &&
               tagEvaluationMethodologyStatus == 'toDo'){
      req.session.data.tagCallOffDocumentPreparationStatus = 'toDo'
    } else {
      req.session.data.tagCallOffDocumentPreparationStatus = 'inProgress'
    }


    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/prepare-and-go-to-market/refine-specification-with-school', function (req, res) {
    res.render(version + '/procurement-operations/prepare-and-go-to-market/refine-specification-with-school', {})
  })

  router.post('/' + version + '/procurement-operations/prepare-and-go-to-market/refine-specification-with-school', function (req, res) {
    const tagRefineSpecificationWithSchool = req.session.data['tagRefineSpecificationWithSchool']

    if (tagRefineSpecificationWithSchool.includes('Select relevant specification template') &&
        tagRefineSpecificationWithSchool.includes('Populate and refine specification') &&
        tagRefineSpecificationWithSchool.includes('Agree specification with school') &&
        tagRefineSpecificationWithSchool.includes('Save specification to SharePoint') &&
        tagRefineSpecificationWithSchool.includes('empty')){
      req.session.data.tagRefineSpecificationWithSchoolStatus = 'complete'
    } else if (tagRefineSpecificationWithSchool == ('empty')){
      req.session.data.tagRefineSpecificationWithSchoolStatus = 'toDo'
    } else {
      req.session.data.tagRefineSpecificationWithSchoolStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/prepare-and-go-to-market/call-off-document-preparation')
  })

  router.get('/' + version + '/procurement-operations/prepare-and-go-to-market/set-pricing-schedule', function (req, res) {
    res.render(version + '/procurement-operations/prepare-and-go-to-market/set-pricing-schedule', {})
  })

  router.post('/' + version + '/procurement-operations/prepare-and-go-to-market/set-pricing-schedule', function (req, res) {
    const tagSetPricingSchedule = req.session.data['tagSetPricingSchedule']

    if (tagSetPricingSchedule.includes('Create and refine pricing schedule') &&
        tagSetPricingSchedule.includes('Agree pricing schedule with school') &&
        tagSetPricingSchedule.includes('Save pricing schedule to SharePoint') &&
        tagSetPricingSchedule.includes('empty')){
      req.session.data.tagSetPricingScheduleStatus = 'complete'
    } else if (tagSetPricingSchedule == ('empty')){
      req.session.data.tagSetPricingScheduleStatus = 'toDo'
    } else {
      req.session.data.tagSetPricingScheduleStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/prepare-and-go-to-market/call-off-document-preparation')
  })

  router.get('/' + version + '/procurement-operations/prepare-and-go-to-market/create-quality-questions', function (req, res) {
    res.render(version + '/procurement-operations/prepare-and-go-to-market/create-quality-questions', {})
  })

  router.post('/' + version + '/procurement-operations/prepare-and-go-to-market/create-quality-questions', function (req, res) {
    const tagCreateQualityQuestions = req.session.data['tagCreateQualityQuestions']

    if (tagCreateQualityQuestions.includes('Create and refine quality questions document') &&
        tagCreateQualityQuestions.includes('Agree quality questions with school') &&
        tagCreateQualityQuestions.includes('Save quality questions document in SharePoint') &&
        tagCreateQualityQuestions.includes('empty')){
      req.session.data.tagCreateQualityQuestionsStatus = 'complete'
    } else if (tagCreateQualityQuestions == ('empty')){
      req.session.data.tagCreateQualityQuestionsStatus = 'toDo'
    } else {
      req.session.data.tagCreateQualityQuestionsStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/prepare-and-go-to-market/call-off-document-preparation')
  })

  router.get('/' + version + '/procurement-operations/prepare-and-go-to-market/evaluation-methodology', function (req, res) {
    res.render(version + '/procurement-operations/prepare-and-go-to-market/evaluation-methodology', {})
  })

  router.post('/' + version + '/procurement-operations/prepare-and-go-to-market/evaluation-methodology', function (req, res) {
    const tagEvaluationMethodology = req.session.data['tagEvaluationMethodology']

    if (tagEvaluationMethodology.includes('Create and refine evaluation methodology') &&
        tagEvaluationMethodology.includes('Save evaluation methodology document in SharePoint') &&
        tagEvaluationMethodology.includes('empty')){
      req.session.data.tagEvaluationMethodologyStatus = 'complete'
    } else if (tagEvaluationMethodology == ('empty')){
      req.session.data.tagEvaluationMethodologyStatus = 'toDo'
    } else {
      req.session.data.tagEvaluationMethodologyStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/prepare-and-go-to-market/get-school-sign-off-for-document-pack')
  })

  router.get('/' + version + '/procurement-operations/prepare-and-go-to-market/get-g7-approval', function (req, res) {
    res.render(version + '/procurement-operations/prepare-and-go-to-market/get-g7-approval', {})
  })

  router.post('/' + version + '/procurement-operations/prepare-and-go-to-market/get-g7-approval', function (req, res) {
    const tagGetG7Approval = req.session.data['tagGetG7Approval']

    if (tagGetG7Approval.includes('Make the pack') &&
        tagGetG7Approval.includes('Approved by G7') &&
        tagGetG7Approval.includes('empty')){
      req.session.data.tagGetG7ApprovalStatus = 'complete'
    } else if (tagGetG7Approval == ('empty')){
      req.session.data.tagGetG7ApprovalStatus = 'toDo'
    } else {
      req.session.data.tagGetG7ApprovalStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/prepare-and-go-to-market/get-school-sign-off-for-document-pack', function (req, res) {
    res.render(version + '/procurement-operations/prepare-and-go-to-market/get-school-sign-off-for-document-pack', {})
  })

  router.post('/' + version + '/procurement-operations/prepare-and-go-to-market/get-school-sign-off-for-document-pack', function (req, res) {
    const tagSignOffBidDocumentWithSchool = req.session.data['tagSignOffBidDocumentWithSchool']

    if (tagSignOffBidDocumentWithSchool.includes('Email pack to the school') &&
        tagSignOffBidDocumentWithSchool.includes('Approval from school received') &&
        tagSignOffBidDocumentWithSchool.includes('Save approval screenshot in SharePoint') &&
        tagSignOffBidDocumentWithSchool.includes('empty')){
      req.session.data.tagSignOffBidDocumentWithSchoolStatus = 'complete'
    } else if (tagSignOffBidDocumentWithSchool == ('empty')){
      req.session.data.tagSignOffBidDocumentWithSchoolStatus = 'toDo'
    } else {
      req.session.data.tagSignOffBidDocumentWithSchoolStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/prepare-and-go-to-market/publish-call-off-to-competition', function (req, res) {
    res.render(version + '/procurement-operations/prepare-and-go-to-market/publish-call-off-to-competition', {})
  })

  router.post('/' + version + '/procurement-operations/prepare-and-go-to-market/publish-call-off-to-competition', function (req, res) {
    const tagPublishCallOffToCompetition = req.session.data['tagPublishCallOffToCompetition']

    if (tagPublishCallOffToCompetition.includes('Publish on relevant portal') &&
        tagPublishCallOffToCompetition.includes('empty')){
      req.session.data.tagPublishCallOffToCompetitionStatus = 'complete'
    } else if (tagPublishCallOffToCompetition == ('empty')){
      req.session.data.tagPublishCallOffToCompetitionStatus = 'toDo'
    } else {
      req.session.data.tagPublishCallOffToCompetitionStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

}
