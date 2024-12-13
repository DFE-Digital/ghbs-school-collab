module.exports = function (router) {

  var version = "v1";

  router.get('/' + version + '/approach-to-market/complete-information-gathering', function (req, res) {
    res.render(version + '/approach-to-market/complete-information-gathering', {})
  })

  router.post('/' + version + '/approach-to-market/complete-information-gathering', function (req, res) {
    const tagCompleteInformationGathering = req.session.data['tagCompleteInformationGathering']

    if (tagCompleteInformationGathering.includes('Review information gathered during triage') &
      tagCompleteInformationGathering.includes('Send and review quality and scoring preferences document') &
      tagCompleteInformationGathering.includes('empty')){
      req.session.data.tagCompleteInformationGatheringStatus = 'complete'
    }else if (tagCompleteInformationGathering == ('empty')){
      req.session.data.tagCompleteInformationGatheringStatus = 'toDo'
    }else {
      req.session.data.tagCompleteInformationGatheringStatus = 'inProgress'
    }

    res.redirect('/' + version + '/procurement')
  })
}
