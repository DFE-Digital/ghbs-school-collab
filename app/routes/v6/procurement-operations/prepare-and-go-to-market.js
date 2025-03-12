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

}
