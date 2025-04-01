module.exports = function (router) {

  var version = "v9";

  router.get('/' + version + '/common/change-due-date', function (req, res) {
    res.render(version + '/common/change-due-date', {})
  })

  router.post('/' + version + '/common/change-due-date', function (req, res) {
    const userType = req.session.data['userType']
    const dueDateTask = req.session.data['dueDateTask']
    const dueDateYear = req.session.data['due-date-year']
    const dueDateMonth = req.session.data['due-date-month']
    const dueDateDay = req.session.data['due-date-day']

    if (dueDateTask == 'Research frameworks'){
      req.session.data.researchFrameworksError = 'false'
      req.session.data.researchFrameworksDate = dueDateYear + '-' + dueDateMonth + '-' + dueDateDay
    } else if (dueDateTask == 'Record route to market'){
      req.session.data.recordRouteToMarketError = 'false'
      req.session.data.recordRouteToMarketDate = dueDateYear + '-' + dueDateMonth + '-' + dueDateDay
    }

    res.redirect('/' + version + '/' + userType + '/procurement')
  })
}
