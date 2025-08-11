module.exports = function (router) {

  var version = "v10";

  router.get('/' + version + '/stages/prepare-and-go-to-market/call-off-document-preparation', function (req, res) {
    res.render(version + '/stages/prepare-and-go-to-market/call-off-document-preparation', {})
  })

  router.post('/' + version + '/stages/prepare-and-go-to-market/call-off-document-preparation', function (req, res) {
    const tagRefineSpecificationWithSchoolStatus = req.session.data['tagRefineSpecificationWithSchoolStatus']
    const tagDevelopPricingScheduleStatus = req.session.data['tagDevelopPricingScheduleStatus']
    const tagCreateQualityQuestionsStatus = req.session.data['tagCreateQualityQuestionsStatus']
    const tagEvaluationModelStatus = req.session.data['tagEvaluationModelStatus']

    if (tagRefineSpecificationWithSchoolStatus == 'complete' &&
      tagDevelopPricingScheduleStatus == 'complete' &&
      tagCreateQualityQuestionsStatus == 'complete' &&
      tagEvaluationModelStatus == 'complete'){
      req.session.data.tagCallOffDocumentPreparationStatus = 'complete'
    } else if (tagRefineSpecificationWithSchoolStatus == 'toDo' &&
               tagDevelopPricingScheduleStatus == 'toDo' &&
               tagCreateQualityQuestionsStatus == 'toDo' &&
               tagEvaluationModelStatus == 'toDo'){
      req.session.data.tagCallOffDocumentPreparationStatus = 'toDo'
    } else {
      req.session.data.tagCallOffDocumentPreparationStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement')
  })

  router.get('/' + version + '/stages/prepare-and-go-to-market/refine-specification-with-school', function (req, res) {
    res.render(version + '/stages/prepare-and-go-to-market/refine-specification-with-school', {})
  })

  router.post('/' + version + '/stages/prepare-and-go-to-market/refine-specification-with-school', function (req, res) {
    const tagRefineSpecificationWithSchool = req.session.data['tagRefineSpecificationWithSchool']

    if (tagRefineSpecificationWithSchool.includes('Copy relevant specification templates and rename them to your case file') &&
        tagRefineSpecificationWithSchool.includes('Populate and refine specification') &&
        tagRefineSpecificationWithSchool.includes('Agree specification with school') &&
        tagRefineSpecificationWithSchool.includes('empty')){
      req.session.data.tagRefineSpecificationWithSchoolStatus = 'complete'
    } else if (tagRefineSpecificationWithSchool == ('empty')){
      req.session.data.tagRefineSpecificationWithSchoolStatus = 'toDo'
    } else {
      req.session.data.tagRefineSpecificationWithSchoolStatus = 'inProgress'
    }

    res.redirect('/' + version + '/stages/prepare-and-go-to-market/call-off-document-preparation')
  })

  router.get('/' + version + '/stages/prepare-and-go-to-market/develop-pricing-schedule', function (req, res) {
    res.render(version + '/stages/prepare-and-go-to-market/develop-pricing-schedule', {})
  })

  router.post('/' + version + '/stages/prepare-and-go-to-market/develop-pricing-schedule', function (req, res) {
    const tagDevelopPricingSchedule = req.session.data['tagDevelopPricingSchedule']

    if (tagDevelopPricingSchedule.includes('Copy and rename the relevant templates to your SharePoint case folder') &&
        tagDevelopPricingSchedule.includes('Populate pricing schedule') &&
        tagDevelopPricingSchedule.includes('empty')){
      req.session.data.tagDevelopPricingScheduleStatus = 'complete'
    } else if (tagDevelopPricingSchedule == ('empty')){
      req.session.data.tagDevelopPricingScheduleStatus = 'toDo'
    } else {
      req.session.data.tagDevelopPricingScheduleStatus = 'inProgress'
    }

    res.redirect('/' + version + '/stages/prepare-and-go-to-market/call-off-document-preparation')
  })

  router.get('/' + version + '/stages/prepare-and-go-to-market/create-quality-questions', function (req, res) {
    res.render(version + '/stages/prepare-and-go-to-market/create-quality-questions', {})
  })

  router.post('/' + version + '/stages/prepare-and-go-to-market/create-quality-questions', function (req, res) {
    const tagCreateQualityQuestions = req.session.data['tagCreateQualityQuestions']

    if (tagCreateQualityQuestions.includes('Copy and rename the relevant templates to your SharePoint case folder') &&
        tagCreateQualityQuestions.includes('Agree quality questions with school') &&
        tagCreateQualityQuestions.includes('empty')){
      req.session.data.tagCreateQualityQuestionsStatus = 'complete'
    } else if (tagCreateQualityQuestions == ('empty')){
      req.session.data.tagCreateQualityQuestionsStatus = 'toDo'
    } else {
      req.session.data.tagCreateQualityQuestionsStatus = 'inProgress'
    }

    res.redirect('/' + version + '/stages/prepare-and-go-to-market/call-off-document-preparation')
  })

  router.get('/' + version + '/stages/prepare-and-go-to-market/evaluation-model', function (req, res) {
    res.render(version + '/stages/prepare-and-go-to-market/evaluation-model', {})
  })

  router.post('/' + version + '/stages/prepare-and-go-to-market/evaluation-model', function (req, res) {
    const tagEvaluationModel = req.session.data['tagEvaluationModel']

    if (tagEvaluationModel.includes('Copy and rename the relevant templates to your SharePoint case folder') &&
        tagEvaluationModel.includes('Create score card template') &&
        tagEvaluationModel.includes('empty')){
      req.session.data.tagEvaluationModelStatus = 'complete'
    } else if (tagEvaluationModel == ('empty')){
      req.session.data.tagEvaluationModelStatus = 'toDo'
    } else {
      req.session.data.tagEvaluationModelStatus = 'inProgress'
    }

    res.redirect('/' + version + '/stages/prepare-and-go-to-market/call-off-document-preparation')
  })

  router.get('/' + version + '/stages/prepare-and-go-to-market/get-g7-approval', function (req, res) {
    res.render(version + '/stages/prepare-and-go-to-market/get-g7-approval', {})
  })

  router.post('/' + version + '/stages/prepare-and-go-to-market/get-g7-approval', function (req, res) {
    const tagGetG7Approval = req.session.data['tagGetG7Approval']

    if (tagGetG7Approval.includes('Create document pack and save in SharePoint') &&
        tagGetG7Approval.includes('Raise approval request from G7 in CMS') &&
        tagGetG7Approval.includes('Approved by G7') &&
        tagGetG7Approval.includes('empty')){
      req.session.data.tagGetG7ApprovalStatus = 'complete'
    } else if (tagGetG7Approval == ('empty')){
      req.session.data.tagGetG7ApprovalStatus = 'toDo'
    } else {
      req.session.data.tagGetG7ApprovalStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement')
  })

  router.get('/' + version + '/stages/prepare-and-go-to-market/get-school-sign-off-for-document-pack', function (req, res) {
    res.render(version + '/stages/prepare-and-go-to-market/get-school-sign-off-for-document-pack', {})
  })

  router.post('/' + version + '/stages/prepare-and-go-to-market/get-school-sign-off-for-document-pack', function (req, res) {
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

    res.redirect('/' + version + '/procurement')
  })

  router.get('/' + version + '/stages/prepare-and-go-to-market/publish-call-off-to-competition', function (req, res) {
    res.render(version + '/stages/prepare-and-go-to-market/publish-call-off-to-competition', {})
  })

  router.post('/' + version + '/stages/prepare-and-go-to-market/publish-call-off-to-competition', function (req, res) {
    const tagPublishCallOffToCompetition = req.session.data['tagPublishCallOffToCompetition']

    if (tagPublishCallOffToCompetition.includes('Publish on relevant portal') &&
        tagPublishCallOffToCompetition.includes('empty')){
      req.session.data.tagPublishCallOffToCompetitionStatus = 'complete'
    } else if (tagPublishCallOffToCompetition == ('empty')){
      req.session.data.tagPublishCallOffToCompetitionStatus = 'toDo'
    } else {
      req.session.data.tagPublishCallOffToCompetitionStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement')
  })

}
