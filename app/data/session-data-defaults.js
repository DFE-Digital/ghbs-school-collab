module.exports = {

  // Insert values here
  'procurementEstimatedValue': '£782,400',
  'stage1ApprovalBlocked': 'true',

  // Task date offsets (cumulative)
  'handoverFromTriageDuration' : '1',
  'discussSchoolRequirementsDuration' : '2',  // 1 + 1
  'researchFrameworksDuration' : '7',         // 2 + 5
  'recordRouteToMarketDuration' : '8',        // 7 + 1
  'createProcurementTimeline' : '10',         // 8 + 2
  'inviteTheSchoolLead' : '16',              // 10 + 6
  'setProcurementTimelineDuration' : '17',    // 16 + 1
  'createProcurementRiskAssessmentDuration' : '18', // 17 + 1
  'checkCostThresholdDuration' : '19', // 18 + 1
  // Tasks with errors
  'tagResearchFrameworksStatus': 'overdue',
  'tagRecordRouteToMarketStatus': 'overdue'
}
