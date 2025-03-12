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

}
