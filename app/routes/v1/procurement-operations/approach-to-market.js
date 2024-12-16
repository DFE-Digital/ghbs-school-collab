module.exports = function (router) {

  var version = "v1";

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

}
