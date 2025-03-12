module.exports = function (router) {

  var version = "v6";

  router.get('/' + version + '/procurement-operations/prepare-and-go-to-market/call-off-document-preparation', function (req, res) {
    res.render(version + '/procurement-operations/prepare-and-go-to-market/call-off-document-preparation', {})
  })

  router.post('/' + version + '/procurement-operations/prepare-and-go-to-market/call-off-document-preparation', function (req, res) {

    res.redirect('/' + version + '/procurement-operations/procurement')
  })

  router.get('/' + version + '/procurement-operations/prepare-and-go-to-market/refine-specification-with-school', function (req, res) {
    res.render(version + '/procurement-operations/prepare-and-go-to-market/refine-specification-with-school', {})
  })

  router.post('/' + version + '/procurement-operations/prepare-and-go-to-market/refine-specification-with-school', function (req, res) {
    const tagRefineSpecificationWithSchool = req.session.data['tagRefineSpecificationWithSchool']

    if (tagRefineSpecificationWithSchool.includes('Edit down template') &&
        tagRefineSpecificationWithSchool.includes('Refine with school') &&
        tagRefineSpecificationWithSchool.includes('Save final documents in SharePoint') &&
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

    if (tagSetPricingSchedule.includes('Create pricing schedule') &&
        tagSetPricingSchedule.includes('Refine with school') &&
        tagSetPricingSchedule.includes('Save final documents in SharePoint') &&
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

    if (tagCreateQualityQuestions.includes('School needs recorded as compliant questions') &&
        tagCreateQualityQuestions.includes('Agree quality questions and weighting with school') &&
        tagCreateQualityQuestions.includes('Save final documents in SharePoint') &&
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

    if (tagEvaluationMethodology.includes('Create evaluation methodology') &&
        tagEvaluationMethodology.includes('Refine with school') &&
        tagEvaluationMethodology.includes('Save final documents in SharePoint') &&
        tagEvaluationMethodology.includes('empty')){
      req.session.data.tagEvaluationMethodologyStatus = 'complete'
    } else if (tagEvaluationMethodology == ('empty')){
      req.session.data.tagEvaluationMethodologyStatus = 'toDo'
    } else {
      req.session.data.tagEvaluationMethodologyStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement-operations/prepare-and-go-to-market/call-off-document-preparation')
  })

}
