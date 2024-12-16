module.exports = function (router) {

  var version = "v1";

  router.get('/' + version + '/approach-to-market/complete-information-gathering', function (req, res) {
    req.session.data.pageAction = ''
    res.render(version + '/approach-to-market/complete-information-gathering', {})
  })

  router.post('/' + version + '/approach-to-market/complete-information-gathering', function (req, res) {
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
      res.redirect('/' + version + '/upload-document')
    } else {
      res.redirect('/' + version + '/procurement')
    }
  })

  router.get('/' + version + '/upload-document', function (req, res) {
    res.render(version + '/upload-document', {})
  })

  router.post('/' + version + '/upload-document', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'uploadInformationGathering'){
      res.redirect('/' + version + '/approach-to-market/complete-information-gathering')
    } else {
      res.redirect('/' + version + '/procurement')
    }
  })
}
